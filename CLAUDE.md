# kuchynekubes.cz – kontext projektu

Nový web truhlářství David Kubeš (kuchyně a nábytek na míru, dílna a vzorkové studio ve Svinném u Chotěboře, vzorový byt v Pardubicích). Náhrada starého WordPress webu kuchynekubes.cz.

## Technika

- Astro 7, statický web. Vývoj: `npm run dev` (http://localhost:4321), build: `npm run build`.
- Nasazení: Netlify (zatím nenasazeno). Formuláře přes Netlify Forms (`poptavka`, `kuchyn-na-prodej`, `truhlar`).
- GitHub: https://github.com/Vojtano98/kuchyneKubes (větev `main`). Po každé dokončené změně commit + push.
- Komunikace s majitelem webu je v češtině.

## Pravidla

- Nic si nevymýšlet (reference, čísla, roky na trhu, ceny, sliby). Texty jen z původního webu nebo od majitele; když něco chybí, zeptat se.
- Fotky jsou v `src/assets/img/<kategorie>/`, galerie se generuje automaticky. Nejlepší fotky kuchyní jsou v `featured` v `src/data/categories.ts`.
- Kontakty, pobočky a menu: `src/data/site.ts`.

## Design (odsouhlasené rozhodnutí)

- Prémiový, střídmý vzhled (inspirace hanak-nabytek.cz): fotka dominuje, jen jemný tmavý přechod pod textem.
- Písmo Poppins; nadpisy h1/h2 v tenkém řezu (300), popisky nad nadpisy velkými prostrkanými písmeny.
- Zlatá: tlačítka `#c19031` s **bílým** textem (přání majitele), zlaté texty na světlém pozadí tmavší `#8a6723`, na tmavém `#d7ac56`.
- Tlačítka hranatá (radius 2px), malá, velká prostrkaná písmena. Malé zaoblení rohů (6–10px), jemné stíny.
- Hlavička vždy viditelná; v hero plná velikost a průhledná, po scrollu menší a neprůhledná.
- Slider na úvodu přepíná po 4,5 s, má tlačítko pauzy.
- Odsazení sekcí střídmé (majitel nechce velké mezery).

## Otevřené body (čekají na podklady od majitele)

- Roztřídění fotek podle zakázek (příběhy realizací), reference/recenze, postup spolupráce, orientační ceny.
- Správné ceny kuchyně na prodej (celková a původní cena).
- Instagram (adresa), text GDPR (nedokončená místa ze šablony).
- Nové fotky: tým/dílna, prodejna ve vyšším rozlišení, vzorový byt v Pardubicích.
- Nasazení na Netlify, e-mailová upozornění formulářů, přesměrování domény.
