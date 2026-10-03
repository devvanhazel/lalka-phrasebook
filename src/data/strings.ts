import type { Lang } from "./cards";

export interface UiStrings {
  kicker: string;
  learn: string;
  learnSub: string;
  about: string;
  aboutSub: string;
  back: string;
  backLabel: string;
  line: string;
  source: string;
  play: string;
  pause: string;
  prev: string;
  next: string;
  noVoice: string;
  footer: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  windowAlt: string;
}

export const STRINGS: Record<Lang, UiStrings> = {
  en: {
    kicker: "Learn Polish from a novel",
    learn: "Learn Polish",
    learnSub: "15 lines",
    about: "The story",
    aboutSub: "Lalka",
    back: "‹",
    backLabel: "Back to the start",
    line: "Line",
    source: "Bolesław Prus, Lalka (1887–1889)",
    play: "Play",
    pause: "Pause",
    prev: "Previous card",
    next: "Next card",
    noVoice: "No Polish voice on this device yet. Recorded audio is coming.",
    footer: "Lalka · Prus",
    aboutTitle: "The story of Lalka",
    aboutP1: "Lalka (The Doll) is a novel by Bolesław Prus, published in serial form from 1887 to 1889. It is set in Warsaw in the late 1870s, when Poland was still divided and the city was part of the Russian Empire.",
    aboutP2: "Stanisław Wokulski, a shop assistant turned wealthy merchant (he made his fortune supplying the Russian army), falls in love with Izabela Łęcka, a proud aristocrat who looks down on him. He spends his money, his time and his ideals trying to win her.",
    aboutP3: "Around them stands the whole city: salons that live on old names, workers who have nothing, and Ignacy Rzecki, an old clerk who keeps a diary and still dreams of Napoleon. The novel asks what money, work, love and ideals are really worth, and it does not offer easy answers.",
    windowAlt:
      "Painting in a post-impressionist style: Wokulski and Izabela outside the Wokulski shop on a sunlit Warsaw street",
  },
  uk: {
    kicker: "Вивчаємо польську з роману",
    learn: "Вивчати польську",
    learnSub: "15 рядків",
    about: "Історія",
    aboutSub: "Лялька",
    back: "‹",
    backLabel: "Назад на початок",
    line: "Рядок",
    source: "Болеслав Прус, «Лялька» (1887–1889)",
    play: "Слухати",
    pause: "Пауза",
    prev: "Попередня картка",
    next: "Наступна картка",
    noVoice:
      "На цьому пристрої немає польського голосу. Записане аудіо буде згодом.",
    footer: "Lalka · Прус",
    aboutTitle: "Історія «Ляльки»",
    aboutP1: "Роман Болеслава Пруса «Лялька» виходив у пресі з 1887 до 1889 року. Дія відбувається у Варшаві наприкінці 1870-х, коли Польща була поділена, а місто входило до складу Російської імперії.",
    aboutP2: "Станіслав Вокульський, з прикажчика ставши заможним купцем (статок він нажив на постачанні російській армії), закохується в Ізабеллу Ленцьку, гордовиту аристократку, яка дивиться на нього зверхньо. Він віддає гроші, час і ідеали, аби здобути її.",
    aboutP3: "Навколо вирує ціле місто: салони, що живуть старими іменами, робітники, які нічого не мають, і Ігнаци Жецький, старий прикажчик, який веде щоденник і досі мріє про Наполеона. Роман питає, чого насправді варті гроші, праця, кохання та ідеали, і не дає легких відповідей.",
    windowAlt:
      "Картина в стилі постімпресіонізму: Вокульський та Ізабела біля крамниці Вокульського на залитій сонцем варшавській вулиці",
  },
};
