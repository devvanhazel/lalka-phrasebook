"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLang } from "@/lib/language";
import { STRINGS } from "@/data/strings";

export function TopBar() {
  const pathname = usePathname();
  const [lang, setLang] = useLang();
  const s = STRINGS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="topbar">
      {pathname !== "/" && (
        <Link href="/" className="back" aria-label={s.backLabel}>
          {s.back}
        </Link>
      )}
      <div className="lang" role="group" aria-label="Language">
        <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
          EN
        </button>
        <button type="button" aria-pressed={lang === "uk"} onClick={() => setLang("uk")}>
          УКР
        </button>
      </div>
    </div>
  );
}
