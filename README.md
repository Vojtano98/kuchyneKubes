# kuchynekubes.cz

Nový web truhlářství David Kubeš – statický web v [Astro](https://astro.build), nasazovaný na Netlify.

## Vývoj

```bash
npm install
npm run dev      # vývojový server na http://localhost:4321
npm run build    # produkční build do dist/
npm run preview  # náhled buildu
```

## Struktura

- `src/pages/` – stránky (úvod, realizace, kuchyň na prodej, hledáme truhláře, GDPR, 404)
- `src/components/` – sekce a komponenty
- `src/data/site.ts` – kontakty, pobočky, otevírací doba, menu
- `src/data/categories.ts` – kategorie realizací a texty služeb
- `src/assets/img/<kategorie>/` – fotky realizací (přidání fotky = nahrát JPG do složky, pořadí podle názvu souboru)

Fotky se při buildu automaticky zmenšují a převádějí do WebP v několika velikostech.

## Formuláře

Poptávkové formuláře používají **Netlify Forms** (`poptavka`, `kuchyn-na-prodej`).
Po prvním nasazení v Netlify: *Site configuration → Forms → Form notifications* → přidat e-mailovou notifikaci na `kuchyne.kubes@seznam.cz`.

## Nasazení

Netlify: *Add new site → Import from GitHub* → tento repozitář. Nastavení buildu je v `netlify.toml`.
Staré WordPress adresy jsou přesměrované (viz `netlify.toml`).
