"use client";

import { useLang } from "@/lib/language";
import { STRINGS } from "@/data/strings";

export function AboutView() {
  const [lang] = useLang();
  const s = STRINGS[lang];

  return (
    <section aria-label={s.aboutTitle}>
      <div className="about">
        <h2>{s.aboutTitle}</h2>
        <p>{s.aboutP1}</p>
        <p>{s.aboutP2}</p>
        <p>{s.aboutP3}</p>
        <p className="status">{s.aboutStatus}</p>
      </div>
    </section>
  );
}
