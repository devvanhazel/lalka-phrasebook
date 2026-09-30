"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/data/cards";

const KEY = "lalka.lang";
const listeners = new Set<() => void>();

function read(): Lang {
  try {
    return window.localStorage.getItem(KEY) === "uk" ? "uk" : "en";
  } catch {
    return "en";
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Current interface language, remembered in the browser. English on the server. */
export function useLang(): [Lang, (lang: Lang) => void] {
  const lang = useSyncExternalStore(subscribe, read, () => "en" as Lang);

  const setLang = (next: Lang) => {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* private mode: the choice just won't be remembered */
    }
    listeners.forEach((l) => l());
  };

  return [lang, setLang];
}
