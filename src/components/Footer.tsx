"use client";

import { useLang } from "@/lib/language";
import { STRINGS } from "@/data/strings";

export function Footer() {
  const [lang] = useLang();
  return <div className="foot">{STRINGS[lang].footer}</div>;
}
