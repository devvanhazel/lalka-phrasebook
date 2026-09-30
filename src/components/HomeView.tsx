"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/language";
import { STRINGS } from "@/data/strings";
import { CARDS } from "@/data/cards";
import shopWindow from "@/assets/shop-window.jpg";

export function HomeView() {
  const [lang] = useLang();
  const s = STRINGS[lang];

  return (
    <section aria-label="Home">
      <p className="kicker">{s.kicker}</p>
      <h1 className="title">Lalka</h1>
      <div className="frame">
        <Image
          src={shopWindow}
          alt={s.windowAlt}
          priority
          placeholder="blur"
          sizes="(max-width: 440px) 100vw, 440px"
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
