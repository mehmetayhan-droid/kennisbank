// Navigatie: categorieën en artikelen. Eén regel per artikel.
// Nieuw artikel toevoegen? 1) Voeg hier een regel toe. 2) Maak articles/<id>.js aan.
window.WIKI_NAV = [
  { id: "processen", label: "Processen", icon: "🔄", items: [
    { id: "abonnement-flow", title: "Abonnement & betaalflow", tag: "process" },
    { id: "order-fulfilment", title: "Order → Fulfilment", tag: "process" },
    { id: "culinair-workflow", title: "Culinaire werkwijze", tag: "process" },
    { id: "release-process", title: "Release proces", tag: "process" },
    { id: "testscenarios-b2c", title: "Testscenario's B2C-keten", tag: "new" },
  ]},
  { id: "operatie", label: "Operatie", icon: "⚙️", items: [
    { id: "productie-omzetten", title: "Productieprocessen — Ontdooien", tag: "new" },
  ]},
  { id: "software", label: "Software & systemen", icon: "💻", items: [
    { id: "odoo-basics", title: "Odoo — Aan de slag", tag: "howto" },
    { id: "shopify-setup", title: "Shopify beheer", tag: "howto" },
    { id: "juo-subscriptions", title: "Juo abonnementen", tag: "howto" },
    { id: "trengo-klantenservice", title: "Trengo klantenservice", tag: "howto" },
    { id: "nextup-tms", title: "NextUp TMS", tag: "howto" },
    { id: "mollie-betalingen", title: "Mollie betalingen", tag: "howto" },
  ]},
  { id: "bugs", label: "Bugs & oplossingen", icon: "🐛", items: [
    { id: "bug-shopify-sync", title: "Shopify–Odoo sync issues", tag: "bug" },
    { id: "bug-juo-lock", title: "Juo lock niet getriggerd", tag: "bug" },
    { id: "bug-mollie-webhook", title: "Mollie webhook mislukt", tag: "bug" },
  ]},
  { id: "overdracht", label: "Overdracht", icon: "🤝", items: [
    { id: "overdracht-mehmet", title: "PO rol & verantwoordelijkheden", tag: "howto" },
    { id: "team-structuur", title: "Team & stakeholders", tag: "info" },
    { id: "systeem-overzicht", title: "Systeemlandschap 2025", tag: "info" },
  ]},
  { id: "klant", label: "Klant & UX", icon: "👤", items: [
    { id: "review-module", title: "Reviewmodule v1", tag: "howto" },
    { id: "mijn-omgeving", title: "Mijn omgeving — klant", tag: "howto" },
  ]}
];
// Artikelen die op de homepage onder "Recente artikelen" staan:
window.WIKI_RECENT = ["productie-omzetten", "order-fulfilment", "testscenarios-b2c", "abonnement-flow", "juo-subscriptions"];
