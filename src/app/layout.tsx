import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource/unifrakturcook/700.css";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

/** Cormorant Garamond for body text: variable weight 300-700, Latin, Latin Extended and Cyrillic only. */
const cormorant = localFont({
  src: [
    { path: "../fonts/CormorantGaramond-Variable.woff2", weight: "300 700", style: "normal" },
    { path: "../fonts/CormorantGaramond-Italic-Variable.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

/** Pirata One for the title and About heading. Both fonts are under the SIL Open Font License (see src/fonts). */
const pirata = localFont({
  src: "../fonts/PirataOne-Regular.woff2",
  variable: "--font-pirata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalka Phrasebook",
  description:
    "Learn Polish from fifteen lines of Bolesław Prus's Lalka, with English and Ukrainian translations and audio.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1834",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${pirata.variable}`}>
      <body>
        <div className="app">
          <TopBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
