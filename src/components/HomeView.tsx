"use client";

import Link from "next/link";
import { useLang } from "@/lib/language";
import { STRINGS } from "@/data/strings";
import { CARDS } from "@/data/cards";

export function HomeView() {
  const [lang] = useLang();
  const s = STRINGS[lang];

  return (
    <section aria-label="Home">
      <p className="kicker">{s.kicker}</p>
      <h1 className="title">Lalka</h1>
      <div className="frame">
        <video
          src="/videos/home-painting.mp4"
          poster="/videos/home-painting-poster.jpg"
          aria-label={s.windowAlt}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="menu">
        <Link className="btn" href="/learn/1">
          <span>{s.learn}</span>
          <small>{lang === "uk" ? `${CARDS.length} рядків` : `${CARDS.length} lines`}</small>
        </Link>
        <Link className="btn" href="/about">
          <span>{s.about}</span>
          <small>{s.aboutSub}</small>
        </Link>
      </div>
    </section>
  );
}
