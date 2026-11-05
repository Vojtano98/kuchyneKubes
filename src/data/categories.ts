export type Category = {
  slug: string;
  name: string;
  /** Indexes of the strongest photos, shown first in the gallery */
  featured?: number[];
  /** Label used in the services tabs on the homepage */
  service?: { title: string; paragraphs: string[] };
};

// Texts are taken over verbatim from the original kuchynekubes.cz website.
export const categories: Category[] = [
  {
    slug: 'kuchyne',
    name: 'Kuchyně',
    featured: [173, 77, 88, 129, 176, 185, 81, 67, 96, 33, 23, 41, 12, 101, 106, 180],
    service: {
      title: 'Kuchyňský nábytek na míru vašim potřebám',
      paragraphs: [
        'S naším závazkem ke kvalitě a designu vám nabízíme možnost vytvořit si ideální kuchyňský prostor, který plně odpovídá vašemu vkusu a požadavkům. Objednejte si u nás kuchyňský nábytek, který bude nejen funkcionalitou excelovat, ale i esteticky ladit s vaším domovem.',
        'Vaše představy se stávají skutečností s naším kuchyňským nábytkem na míru.',
      ],
    },
  },
  {
    slug: 'loznice',
    name: 'Ložnice',
    service: {
      title: 'Nábytek na míru do každé ložnice',
      paragraphs: [
        'S naší precizní řemeslnou prací a vášnivým přístupem k designu vytváříme jedinečné kousky nábytku, které se perfektně integrují do vašeho prostoru.',
        'Nechte svou ložnici ožít s naším širokým spektrem stylů a materiálů, abyste si mohli užívat maximální pohodlí a praktičnost.',
        'Objednejte si náš nábytek na míru a proměňte vaši ložnici v místo s maximálním využitím prostoru, designu a precizní ruční práce.',
      ],
    },
  },
  {
    slug: 'chodby',
    name: 'Chodby',
    service: {
      title: 'Nábytek na míru do velké i malé chodby',
      paragraphs: [
        'Vstupte do světa šikovného designu naší kolekce nábytku na míru pro chodby, ať už jsou velké nebo malé. Naše precizně vyrobené kusy nábytku nejen optimalizují prostor, ale také přinášejí do chodeb styl a funkčnost. Bez ohledu na rozměr vaší chodby vám nabízíme elegantní a praktická řešení, která pomohou vytvořit útulný vstupní prostor.',
        'Objednejte si náš nábytek na míru a proměňte každý krok ve vašem domově v estetický zážitek spojený s maximálním využitím prostoru.',
      ],
    },
  },
  {
    slug: 'koupelny',
    name: 'Koupelny',
    service: {
      title: 'Nábytek na míru do každé koupelny',
      paragraphs: [
        'S našimi jedinečnými designy a praktickými řešeními vytváříme nábytek, který dokonale ladí s vaším osobním stylem a maximálně využívá prostor ve vaší koupelně. Nezáleží na velikosti či konfiguraci, naše řemeslně zpracované kusy nábytku dodávají vaší koupelně eleganci a funkcionalitu.',
        'Objednejte si náš nábytek na míru a začněte každé ráno a večer ve své koupelně s jedinečným stylem a pohodlím.',
      ],
    },
  },
  {
    slug: 'detske-pokoje',
    name: 'Dětské pokoje',
    service: {
      title: 'Nábytek na míru do velkého i malého dětského pokoje',
      paragraphs: [
        'Prozkoumejte naši kolekci nábytku na míru do dětských pokojů, které spojují funkčnost a originalitu s důrazem na důmyslné využití každého úložného prostoru.',
        'Objednejte si náš nábytek na míru a vytvořte dětský pokoj, který bude nejen praktický, ale i plný radosti a pohodlí pro vaše malé jedince.',
      ],
    },
  },
  {
    slug: 'obyvaci-pokoje',
    name: 'Obývací pokoje',
    service: {
      title: 'Nábytek na míru do každého obývacího pokoje',
      paragraphs: [
        'Každý kus je vytvořen s láskou k detailu a důrazem na design, aby perfektně ladil s vaším osobním stylem. Naše řady nábytku nabízí širokou škálu možností pro maximální využití prostoru a zvýraznění estetiky vašeho obývacího pokoje.',
        'Objednejte si náš nábytek na míru a přetvořte váš obývací prostor v harmonické místo, kde se setkává funkcionalita s neotřelým designem.',
      ],
    },
  },
  { slug: 'kuchyn-na-prodej', name: 'Kuchyň na prodej' },
  { slug: 'detaily', name: 'Detaily' },
];
