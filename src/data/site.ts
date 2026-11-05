export const site = {
  name: 'Truhlářství David Kubeš',
  shortName: 'Kuchyně Kubeš',
  title: 'Kvalitní kuchyně a nábytek na míru - Truhlářství David Kubeš',
  description:
    'Kuchyně a nábytek na míru od truhlářství David Kubeš. Vlastní dílna a vzorkové kuchyňské studio v Chotěboři, vzorový byt v Pardubicích. Nezávazná poptávka včetně kompletního návrhu.',
  phone: '+420 604 245 852',
  phoneHref: 'tel:+420604245852',
  email: 'kuchyne.kubes@seznam.cz',
  facebook: 'https://www.facebook.com/kubeskuchyne',
  ico: '72906529',
  dic: 'CZ7909133001',
  billing: 'U Sportovní školy 374, 533 53 Pardubice VII – Ohrazenice',
  partner: { name: 'MM Spotřebiče', url: 'https://www.mmspotrebice.cz' },
};

export const branches = [
  {
    id: 'chotebor',
    title: 'Prodejna, vzorkovna a dílna',
    street: 'Svinný 82',
    city: '583 01 Chotěboř',
    hours: [
      ['Po', '6:00 – 15:00'],
      ['Út', '6:00 – 15:00'],
      ['St', '6:00 – 15:00'],
      ['Čt', '6:00 – 15:00'],
      ['Pá', '6:00 – 15:00'],
      ['So', 'Po domluvě'],
      ['Ne', 'Po domluvě'],
    ],
    note: null as string | null,
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10319.115241196612!2d15.64087062647302!3d49.71496576664505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dac6c82b53889%3A0xb5386525131a535d!2zU3Zpbm7DvSA4MiwgNTgzIDAxIENob3TEm2JvxZk!5e0!3m2!1scs!2scz!4v1704994470268!5m2!1scs!2scz',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Svinn%C3%BD+82%2C+583+01+Chot%C4%9Bbo%C5%99',
  },
  {
    id: 'pardubice',
    title: 'Kompletně vybavený vzorový byt',
    street: 'U Sportovní školy 374',
    city: '533 53 Pardubice VII',
    hours: [] as string[][],
    note: 'Prohlídka možná kdykoliv po předchozí telefonické domluvě.',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20490.469657511225!2d15.76098!3d50.06178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcd29e7cf8f4b%3A0x3938dbe186b884b8!2sU%20Sportovn%C3%AD%20%C5%A1koly%20374%2C%20533%2053%20Pardubice%20VII!5e0!3m2!1scs!2scz!4v1705593785011!5m2!1scs!2scz',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=U+Sportovn%C3%AD+%C5%A1koly+374%2C+533+53+Pardubice',
  },
];

export const nav = [
  { href: '/#onas', label: 'O nás' },
  { href: '/#sluzby', label: 'Služby' },
  { href: '/realizace/', label: 'Realizace' },
  { href: '/kuchyn-na-prodej/', label: 'Kuchyň na prodej' },
  { href: '/#pobocky', label: 'Pobočky' },
  { href: '/#kontakt', label: 'Kontakt' },
];
