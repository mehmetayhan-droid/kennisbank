# 🌿 Boerschappen Kennisbank

Interne wiki voor het Boerschappen tech team.
Live: https://mehmetayhan-droid.github.io/kennisbank/

## Structuur

| Bestand | Inhoud |
|---|---|
| `index.html` | Opmaak en logica — hoeft bij nieuwe artikelen **niet** aangepast te worden |
| `nav.js` | Navigatie: categorieën, artikel-ids en de "Recente artikelen"-lijst |
| `articles/<id>.js` | Eén bestand per artikel |

## Artikel toevoegen

1. Voeg in `nav.js` één regel toe aan de juiste categorie: `{ id: "mijn-artikel", title: "Mijn artikel", tag: "howto" },`
2. Maak `articles/mijn-artikel.js` aan (kopieer een bestaand artikel als sjabloon):

```js
WIKI_ARTICLES["mijn-artikel"] = {
  title: "Mijn artikel", category: "Software & systemen", tags: ["howto"], updated: "Juni 2026", author: "Naam",
  content: `<p>Inhoud als HTML…</p>`,
  extraContent: ``
};
```

3. Commit en push — GitHub Pages bouwt automatisch.

Een nav-item zónder artikelbestand is toegestaan: dat is een placeholder en toont "Dit artikel bestaat nog niet".

## Deployen

GitHub Pages: Settings → Pages → Deploy from branch → main / root
