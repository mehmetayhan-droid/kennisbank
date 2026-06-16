# 🌿 Boerschappen Kennisbank

Interne wiki voor het Boerschappen tech team.
Live: https://mehmetayhan-droid.github.io/kennisbank/

## Structuur

| Bestand | Inhoud |
|---|---|
| `index.html` | Opmaak en logica — hoeft bij nieuwe artikelen **niet** aangepast te worden |
| `nav.js` | Navigatie: categorieën, artikel-ids en de "Recente artikelen"-lijst |
| `articles/<id>.json` | Eén bestand per artikel (inhoud) |
| `.pages.yml` | Configuratie voor de bewerk-editor (Pages CMS) |

## Bewerken via de online editor (Pages CMS)

Teamleden kunnen artikelen aanpassen zonder code, via de gratis editor van Pages CMS:

1. Ga naar **https://app.pagescms.org** en klik op *Sign in with GitHub*.
2. Geef Pages CMS toegang tot de repository `mehmetayhan-droid/kennisbank`.
3. Open de repo in de editor → collectie **Artikelen** → kies een artikel.
4. Pas titel, categorie, labels of inhoud aan en klik op **Save**.
5. Pages CMS schrijft de wijziging als commit naar GitHub; GitHub Pages bouwt
   automatisch en de site is binnen ~1 minuut bijgewerkt.

De inhoudsvelden (`content`, `extraContent`, diagram-`body`) bevatten HTML. Tekst
aanpassen kan direct; voor opmaak kun je bestaande HTML-blokken kopiëren.

> **Laatst bijgewerkt**-datum: wordt automatisch per artikel getoond op basis van
> de laatste commit in GitHub. Het veld *Datum (terugval-tekst)* is alleen een
> reserve voor als de GitHub-API even niet bereikbaar is.

## Nieuw artikel toevoegen

De online editor bewerkt bestaande artikelen. Een **nieuw** artikel zichtbaar maken
vraagt nog één regel in de navigatie:

1. Maak via de editor (of handmatig) `articles/<id>.json` aan. Sjabloon:

```json
{
  "title": "Mijn artikel",
  "category": "Software & systemen",
  "tags": ["howto"],
  "updated": "Juni 2026",
  "author": "Naam",
  "content": "<p>Inhoud als HTML…</p>",
  "extraContent": ""
}
```

2. Voeg in `nav.js` één regel toe aan de juiste categorie:
   `{ id: "mijn-artikel", title: "Mijn artikel", tag: "howto" },`

Een nav-item zónder artikelbestand is toegestaan: dat is een placeholder en toont
"Dit artikel bestaat nog niet".

## Deployen

GitHub Pages: Settings → Pages → Deploy from branch → main / root
