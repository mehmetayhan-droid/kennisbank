WIKI_ARTICLES["culinair-workflow"] = {
  title: "Culinaire werkwijze", category: "Processen", tags: ["process"], updated: "Juni 2026", author: "Mehmet Ayhan",
  content: `<p>Boxinhoud & receptbepaling is <strong>stap 1</strong> van de B2C-keten: van culinaire en commerciële planning naar boxinhoud, recepten, SKU's en de basis voor de prognose.</p>`,
  diagram: { title: "Odoo — boxinhoud & receptbepaling", nodes: [
    { id: "cw-planning", label: "Culinaire\nplanning", type: "start", info: { title: "Culinaire / commerciële planning", step: "Start", body: "<p>De culinaire en commerciële planning is het startpunt. In Odoo Culinair / boxconfiguratie wordt per week de box bepaald.</p>" }},
    { id: "cw-recept", label: "Recept\nmaken", type: "normal", info: { title: "Recept maken op basis van ingrediënten", step: "Stap 2", body: "<p>Recepten worden opgebouwd vanuit ingrediënten. Algemene ingrediënten worden vertaald naar concrete SKU's, met hoeveelheden per aantal personen.</p><p>Let op: ook niet-lineaire hoeveelheden moeten kloppen per personenaantal.</p>" }},
    { id: "cw-bom", label: "Stuklijst\n(BOM)", type: "normal", info: { title: "Stuklijst / BOM opbouwen", step: "Stap 3", body: "<p>Op basis van recepten en hoeveelheden wordt de stuklijst (BOM) opgebouwd, gevolgd door een controle op volledigheid.</p>" }},
    { id: "cw-akkoord", label: "Boxinhoud\nakkoord?", type: "decision", info: { title: "Controle en akkoord", step: "Beslismoment", body: "<p>Is de boxinhoud niet akkoord, dan gaat het terug naar de boxconfiguratie. Bij akkoord is de boxinhoud definitief.</p>" }},
    { id: "cw-output", label: "Definitieve\nboxinhoud", type: "end", info: { title: "Definitieve boxinhoud", step: "Output", body: "<h4>Drie outputs</h4><ul><li>Prognosemodule: SKU's, hoeveelheden, productiedag</li><li>Orderverwerking: boxproduct / productcontext</li><li>Shopify/JUO: recepten en boxinhoud voor de klant</li></ul>" }},
  ]},
  extraContent: `<div class="info-block info-warning"><div class="info-block-icon">⚠️</div><div><strong>Open punt:</strong> de variantkoppeling per week/dag is nog niet definitief en moet met het team besproken worden. Daarom is de boxvariant niet als harde orderkoppeling opgenomen.</div></div>`
};
