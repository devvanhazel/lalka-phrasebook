export type Lang = "en" | "uk";
export type Localized = Record<Lang, string>;

export interface PhraseCard {
  /** Card number, 1 to 15 in display order; also names the audio file (lalka-<id>.mp3). */
  id: number;
  theme: Localized;
  polish: string;
  translation: Localized;
}

/**
 * Fifteen lines from Bolesław Prus, Lalka (serialised 1887–1889), in a loose arc:
 * love, happiness, human nature, caution, ambition, money, class, idleness, the salon world,
 * society, idealism, disillusion.
 * Status: the Ukrainian text is a draft awaiting native review; quotes still need checking against the printed novel.
 * Pronunciation guides were removed and archived in archive/pronunciation-guides.md.
 */
export const CARDS: PhraseCard[] = [
  {
    id: 1,
    theme: { en: "Love", uk: "Кохання" },
    polish: "Bywają wielkie zbrodnie na świecie, ale chyba największą jest zabić miłość.",
    translation: {
      en: "There are great crimes in the world, but perhaps the greatest is to kill love.",
      uk: "Бувають великі злочини на світі, але, мабуть, найбільший — убити кохання.",
    },
  },
  {
    id: 2,
    theme: { en: "Love", uk: "Кохання" },
    polish: "Miłość jest radością świata, słońcem życia, wesołą melodią w pustyni.",
    translation: {
      en: "Love is the joy of the world, the sun of life, a cheerful melody in the desert.",
      uk: "Кохання — це радість світу, сонце життя, весела мелодія в пустелі.",
    },
  },
  {
    id: 3,
    theme: { en: "Love", uk: "Кохання" },
    polish: "Miłość patrzy przez mikroskop.",
    translation: {
      en: "Love looks through a microscope.",
      uk: "Кохання дивиться крізь мікроскоп.",
    },
  },
  {
    id: 4,
    theme: { en: "Happiness", uk: "Щастя" },
    polish: "Szczęście każdy nosi w sobie.",
    translation: {
      en: "Everyone carries happiness within themselves.",
      uk: "Щастя кожен носить у собі.",
    },
  },
  {
    id: 5,
    theme: { en: "Human nature", uk: "Людська природа" },
    polish: "Człowiek jest jak ćma: na oślep rwie się do ognia, choć go boli i choć się w nim spali.",
    translation: {
      en: "A person is like a moth: he rushes blindly at the fire, though it hurts him and though he will burn up in it.",
      uk: "Людина — як нічний метелик: наосліп рветься до вогню, хоч йому болить і хоч він у ньому згорить.",
    },
  },
  {
    id: 6,
    theme: { en: "Caution", uk: "Обережність" },
    polish: "I ogień jest przyjemny, szczególniej w zimie – myślała – ale... w pewnym oddaleniu.",
    translation: {
      en: "Even fire is pleasant, especially in winter, she thought, but... at a certain distance.",
      uk: "І вогонь приємний, особливо взимку, — думала вона, — але... на певній відстані.",
    },
  },
  {
    id: 7,
    theme: { en: "Ambition", uk: "Амбіція" },
    polish: "Świat należy do tych, którzy go biorą.",
    translation: {
      en: "The world belongs to those who take it.",
      uk: "Світ належить тим, хто його бере.",
    },
  },
  {
    id: 8,
    theme: { en: "Money", uk: "Гроші" },
    polish: "Pieniądz jest osią, dookoła której obraca się dzisiejszy świat.",
    translation: {
      en: "Money is the axis around which today’s world turns.",
      uk: "Гроші — це вісь, навколо якої обертається сучасний світ.",
    },
  },
  {
    id: 9,
    theme: { en: "Money and heart", uk: "Гроші й серце" },
    polish: "Pieniądze nie stanowią wszystkiego, bo człowiek oprócz kieszeni ma jeszcze i serce...",
    translation: {
      en: "Money isn’t everything, because besides a pocket a person also has a heart...",
      uk: "Гроші — ще не все, бо людина, крім кишені, має ще й серце...",
    },
  },
  {
    id: 10,
    theme: { en: "Class", uk: "Клас" },
    polish:
      "Dla niej świat dzielił się na dwie klasy: na ludzi, którzy bywali w salonach, i na tych, którzy na nich pracowali.",
    translation: {
      en: "For her the world was divided into two classes: people who frequented the salons, and those who worked for them.",
      uk: "Для неї світ ділився на два класи: на людей, які бували в салонах, і на тих, хто на них працював.",
    },
  },
  {
    id: 11,
    theme: { en: "Idleness", uk: "Неробство" },
    polish:
      "Człowiek musi w jakiś sposób zużywać siły; więc jeżeli nie pracuje, musi wpaść w rozpustę, a przynajmniej drażnić nerwy.",
    translation: {
      en: "A person has to expend his energy somehow; so if he doesn’t work, he must fall into debauchery, or at least keep irritating his nerves.",
      uk: "Людина мусить якось витрачати сили; тож якщо вона не працює, то мусить скотитися до розпусти або принаймні дратувати нерви.",
    },
  },
  {
    id: 12,
    theme: { en: "The salon world", uk: "Салонний світ" },
    polish:
      "Ten świat wiecznej wiosny, gdzie szeleściły jedwabie, rosły tylko rzeźbione drzewa, a glina pokrywała się artystycznymi malowidłami…",
    translation: {
      en: "That world of eternal spring, where silks rustled, only carved trees grew, and clay was covered in artistic paintings…",
      uk: "Той світ вічної весни, де шелестіли шовки, росли лише різьблені дерева, а глина вкривалася мистецькими розписами…",
    },
  },
  {
    id: 13,
    theme: { en: "Society", uk: "Суспільство" },
    polish:
      "Tu nie poradzi jednostka z inicjatywą, bo wszystko zjadła bezmyślność i podłość.",
    translation: {
      en: "An individual with initiative can do nothing here, because thoughtlessness and baseness have devoured everything.",
      uk: "Одинак з ініціативою тут нічого не вдіє, бо все пожерли бездумність і підлість.",
    },
  },
  {
    id: 14,
    theme: { en: "Idealism", uk: "Ідеалізм" },
    polish: "Oszaleję albo przypnę ludzkości skrzydła.",
    translation: {
      en: "I will either go mad or pin wings on humanity.",
      uk: "Я або збожеволію, або причеплю людству крила.",
    },
  },
  {
    id: 15,
    theme: { en: "Disillusion", uk: "Розчарування" },
    polish:
      "Wszystko głupstwo!… A wy, coście zginęli, i wy, co cierpicie, jesteście najwięksi głupcy…",
    translation: {
      en: "It’s all nonsense!… And you who perished, and you who suffer, are the greatest fools…",
      uk: "Все дурниці!… А ви, що загинули, і ви, що страждаєте, — найбільші дурні…",
    },
  },
];
