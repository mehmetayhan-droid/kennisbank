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
    { id: "productie-ontdooi", title: "Productieprocessen — Ontdooien", tag: "new" },
  ]},
  { id: "software", label: "Software & systemen", icon: "💻", items: [
    { id: "odoo-basics", title: "Odoo — Aan de slag", tag: "howto" },
    { id: "shopify-setup", title: "Shopify beheer", tag: "howto" },
    { id: "juo-subscriptions", title: "Juo abonnementen", tag: "howto" },
    { id: "trengo-klantenservice", title: "Trengo klantenservice", tag: "howto" },
    { id: "nextup-tms", title: "NextUp TMS", tag: "howto" },
    { id: "mollie-betalingen", title: "Mollie betalingen", tag: "howto" },
  ]}
];
// Artikelen die op de homepage onder "Recente artikelen" staan:
window.WIKI_RECENT = ["productie-ontdooi", "order-fulfilment", "testscenarios-b2c", "abonnement-flow", "juo-subscriptions"];
