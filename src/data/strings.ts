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
    aboutP1: "The Doll (Lalka) is a realist novel by Bolesław Prus, first published in instalments between 1887 and 1889.",
    aboutP2: "It follows Stanisław Wokulski, a successful merchant whose unrequited love for the aristocrat Izabela Łęcka exposes the class divisions and contradictions of 19th-century Warsaw. The title has a double meaning: it comes from a minor episode about a stolen toy, and it is also a metaphor for Izabela herself.",
    aboutP3: "At its heart is the clash between classes: an aristocracy that clings to its prestige as its fortunes fade, and a rising middle class whose money cannot buy acceptance. Along the way, Prus looks at poverty, prejudice, antisemitism, the position of women, and how hard it is to change society for the better.",
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
    aboutP1: "Реалістичний роман Болеслава Пруса «Лялька» вперше виходив частинами в пресі з 1887 до 1889 року.",
    aboutP2: "У центрі історії Станіслав Вокульський, успішний купець, чиє нерозділене кохання до аристократки Ізабелли Ленцької оголює класові поділи та суперечності Варшави XIX століття. Назва має подвійний зміст: вона походить від епізоду з украденою іграшкою і водночас є метафорою головної героїні.",
    aboutP3: "Головна тема роману полягає в зіткненні суспільних класів: аристократія ще тримається за свій престиж, хоча її статки тануть, а нова буржуазія багатіє, але так і не здобуває визнання. Прус також пише про бідність, упередження, антисемітизм, становище жінок і про те, як важко змінити суспільство на краще.",
    windowAlt:
      "Картина в стилі постімпресіонізму: Вокульський та Ізабела біля крамниці Вокульського на залитій сонцем варшавській вулиці",
  },
};
