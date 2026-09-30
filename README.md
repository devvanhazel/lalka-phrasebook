# Lalka Phrasebook

Learn Polish from fifteen lines of Bolesław Prus's novel *Lalka* (serialised 1887–1889). Each card has the Polish line, an English or Ukrainian translation below it, and audio, in a gaslit-Warsaw look.

A small portfolio project by Haze.

## The idea

Textbook sentences are forgettable. A line like "Pieniądz jest osią, dookoła której obraca się dzisiejszy świat" is not. The app pairs literature people remember with the practical bits a learner needs: what it means, how it sounds, and one screen per idea.

**Who it's for:** foreign learners of Polish, starting with English and Ukrainian speakers.
**Scope on purpose:** one loop. Read the line, hear it, move on.

## Decisions

- **Learners, not Polish students.** Polish teenagers cramming the book for exams are a different product in a crowded space, so they are out of scope.
- **Fifteen lines, not thirty.** A short set, each chosen for a theme (love, happiness, human nature, ambition, money, class, idleness, the salon world, society, idealism, disillusion), ordered as a loose arc from love to disillusion.
- **Next.js from day one.** The current build is static, but the plan is to add AI-generated exercises, which needs a server to keep an API key secret.
- **Fonts are self-hosted** (Cormorant Garamond and Pirata One, files in `src/fonts`), so the build needs no network call for fonts.

## Status

- The Ukrainian translations are drafts and need review by native speakers.
- Pronunciation guides (English and Ukrainian respellings) were removed from the cards and archived in `archive/pronunciation-guides.md`.
- The quotes still need checking against the printed novel.
- Audio: all fifteen lines are recorded (ElevenLabs, voice "Alex - Professional Narration Polish", model eleven_v4) and live in `public/audio`. If a file is missing, the play button falls back to the browser's Polish voice.
- The main picture is `src/assets/shop-window.jpg`, a painting in a post-impressionist style supplied by Haze. To change it, replace the file (it fits best at about a 32:25 shape).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things are

```
src/data/cards.ts       the fifteen lines: Polish, English, Ukrainian
src/data/strings.ts     interface text in English and Ukrainian
src/lib/language.ts     language choice, remembered in the browser
src/hooks/useAudio.ts   plays recorded audio, falls back to the browser voice
src/components/         screens and small pieces (card, top bar, waveform)
src/app/                routes: /, /learn/[n], /about
public/audio/           put lalka-1.mp3 to lalka-15.mp3 here
src/assets/             the main picture
src/fonts/              self-hosted fonts and their licenses
archive/                removed pronunciation guides, kept for later
```

Audio files are named after the card number, in the order the cards appear: `lalka-1.mp3` to `lalka-15.mp3`.

## Next steps

1. Native review of the Ukrainian text.
2. Native-check the sign text in the painting.
3. Measure it with a few real learners and note what changed.
4. AI-generated practice exercises, with a small evaluation of how accurate they are.

## Stack

Next.js, React, TypeScript. Plain CSS. No database.
