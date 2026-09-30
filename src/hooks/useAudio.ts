"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PhraseCard } from "@/data/cards";

interface AudioState {
  playing: boolean;
  progress: number;
  noVoice: boolean;
}

const IDLE: AudioState = { playing: false, progress: 0, noVoice: false };

/**
 * Plays public/audio/lalka-<id>.mp3 when it exists. If the file is missing,
 * falls back to the browser's Polish voice. Mount it under a `key` per card
 * so playback resets when the card changes.
 */
export function useAudio(card: PhraseCard) {
  const [state, setState] = useState<AudioState>(IDLE);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const speechRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const stop = useCallback(() => {
    audioRef.current?.pause();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    speechRef.current = false;
    clearTimer();
    setState(IDLE);
  }, []);

  useEffect(() => () => stop(), [stop]);

  const speak = useCallback(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
      setState({ ...IDLE, noVoice: true });
      return;
    }
    const voices = synth.getVoices();
    const voice = voices.find((v) => v.lang.toLowerCase().startsWith("pl"));
    if (!voice && voices.length > 0) {
      setState({ ...IDLE, noVoice: true });
      return;
    }
    const utterance = new SpeechSynthesisUtterance(card.polish);
    utterance.lang = "pl-PL";
    if (voice) utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.onend = () => speechRef.current && stop();
    utterance.onerror = () => speechRef.current && stop();

    speechRef.current = true;
    const estimate = Math.max(2500, card.polish.length * 75);
    const startedAt = Date.now();
    clearTimer();
    timerRef.current = setInterval(() => {
      setState((s) => ({ ...s, progress: Math.min(0.98, (Date.now() - startedAt) / estimate) }));
    }, 120);
    setState({ playing: true, progress: 0, noVoice: false });
    synth.cancel();
    synth.speak(utterance);
  }, [card.polish, stop]);

  const toggle = useCallback(() => {
    if (state.playing) {
      stop();
      return;
    }
    audioRef.current?.pause();
    const audio = new Audio();
    audioRef.current = audio;
    audio.src = `/audio/lalka-${card.id}.mp3`;
    audio.ontimeupdate = () => {
      if (audio.duration) setState((s) => ({ ...s, progress: audio.currentTime / audio.duration }));
    };
    audio.onended = stop;

    let fellBack = false;
    const fallback = () => {
      if (fellBack) return;
      fellBack = true;
      speak();
    };
    audio.onerror = fallback;

    setState({ playing: true, progress: 0, noVoice: false });
    audio.play().catch(fallback);
  }, [card.id, speak, state.playing, stop]);

  return { ...state, toggle };
}
