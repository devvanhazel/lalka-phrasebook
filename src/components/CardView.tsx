"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { CARDS } from "@/data/cards";
import { STRINGS } from "@/data/strings";
import { useLang } from "@/lib/language";
import { useAudio } from "@/hooks/useAudio";
import { Waveform } from "./Waveform";

const PLAY_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
  </svg>
);
const PAUSE_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z" fill="currentColor" />
  </svg>
);

export function CardView({ index }: { index: number }) {
  const [lang] = useLang();
  const s = STRINGS[lang];
  const router = useRouter();
  const card = CARDS[index];
  const { playing, progress, noVoice, toggle } = useAudio(card);
  const touchStart = useRef<number | null>(null);

  const hasPrev = index > 0;
  const hasNext = index < CARDS.length - 1;
  const go = (delta: number) => router.push(`/learn/${index + 1 + delta}`);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && index < CARDS.length - 1) router.push(`/learn/${index + 2}`);
      if (e.key === "ArrowLeft" && index > 0) router.push(`/learn/${index}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, router]);

  return (
    <section aria-label="Phrase cards">
      <div className="count" aria-live="polite">
        {s.line} {index + 1} / {CARDS.length}
      </div>
      <div className="stack">
        <article
          className="card enter"
          onTouchStart={(e) => {
            touchStart.current = e.changedTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (dx < -50 && hasNext) go(1);
            if (dx > 50 && hasPrev) go(-1);
          }}
        >
          <span className="tag">{card.theme[lang]}</span>
          <p className="pl" lang="pl">
            {card.polish}
          </p>
          <hr className="rule" />
          <p className="tr">{card.translation[lang]}</p>
          <p className="src">{s.source}</p>
        </article>
      </div>

      <div className="audio">
        {hasPrev ? (
          <Link className="nav" href={`/learn/${index}`} aria-label={s.prev}>
            &#8249;
          </Link>
        ) : (
          <span className="nav" aria-disabled="true" />
        )}
        <div className="center">
          <button
            className="play"
            type="button"
            onClick={toggle}
            aria-label={playing ? s.pause : s.play}
          >
            {playing ? PAUSE_ICON : PLAY_ICON}
          </button>
          <Waveform progress={progress} />
        </div>
        {hasNext ? (
          <Link className="nav" href={`/learn/${index + 2}`} aria-label={s.next}>
            &#8250;
          </Link>
        ) : (
          <span className="nav" aria-disabled="true" />
        )}
      </div>
      <p className="note" role="status">
        {noVoice ? s.noVoice : ""}
      </p>
    </section>
  );
}
