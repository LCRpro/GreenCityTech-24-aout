// Insère (ou met à jour) la pagination "N / 24" sur chaque slide.
const fs = require("fs");
const path = require("path");

const ORDER = [
  "01-couverture", "02-intro", "03-contexte", "04-organisation-methode",
  "05-organisation-equipe", "06-methode-rituels", "07-arbitrages-budget",
  "07b-suivi-budgetaire",
  "08-intercalaire-mise-en-oeuvre", "09-versioning-environnements",
  "10-architecture-technique", "11-supervision-logs", "12-architecture-deploiement",
  "13-pipeline-cicd", "14-intercalaire-qualite", "15-qualite-securite-conformite",
  "16-tests-accessibilite", "17-intercalaire-gestion-produit",
  "18-gestion-produit-evolutions", "19-suivi-demonstrations-satisfaction",
  "20-intercalaire-inclusion", "21-inclusion-management", "22-conclusion", "23-merci",
];
const TOTAL = ORDER.length;
const dir = path.join(__dirname, "..", "slides");

ORDER.forEach((name, i) => {
  const f = path.join(dir, name + ".html");
  let s = fs.readFileSync(f, "utf8");
  // retire une éventuelle pagination existante (idempotent)
  s = s.replace(/[ \t]*<div class="pageno">.*?<\/div>\n?/g, "");
  // insère avant la fermeture de la section
  s = s.replace("</section>", `  <div class="pageno"><b>${i + 1}</b> / ${TOTAL}</div>\n</section>`);
  fs.writeFileSync(f, s);
  console.log("paginated", (i + 1) + "/" + TOTAL, name);
});
