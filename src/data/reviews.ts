// Real customer reviews, copied from the public Firmy.cz profile (both rated 100 %).
// Only add reviews that customers actually wrote somewhere public (Firmy.cz, Google, Facebook) or sent with consent.
export const reviewsSource = {
  name: 'Firmy.cz',
  url: 'https://www.firmy.cz/detail/2562898-kuchyne-a-nabytek-na-miru-david-kubes-chotebor-svinny.html#hodnoceni',
};

export const reviews = [
  {
    author: 'Ivča',
    topic: 'Kuchyňská linka',
    text: 'Mám, nejen, kuchyňskou linku od p. Kubeše již téměř 7 let a je stále jako nová, krásná práce, nic bych neměnila.',
  },
  {
    author: 'Alča P.',
    topic: 'Postel, skříně, knihovna a kuchyň',
    // Firmy.cz shows this review shortened; the rest is behind "Více" on their site.
    text: 'Pan David Kubeš pro nás dělal několik truhlářských zakázek (manželskou postel, skříně, knihovnu, kuchyňskou linku) a to vždy k naší plné spokojenosti. Práce jsou provedeny velmi kvalitně z dobrých materiálů, vše funguje a drží.',
  },
];
