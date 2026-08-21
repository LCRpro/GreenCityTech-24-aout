const { chromium } = require("../archive/visuels/assets/node_modules/playwright-core");
const { PDFDocument } = require("pdf-lib");
const path = require("path");
const fs = require("fs");

const ORDER = [
  "01-couverture", "02-intro", "03-contexte", "04-organisation-methode",
  "05-organisation-equipe", "06-methode-rituels", "07-arbitrages-budget",
  "08-intercalaire-mise-en-oeuvre", "09-versioning-environnements",
  "10-architecture-technique", "11-supervision-logs", "12-architecture-deploiement",
  "13-pipeline-cicd", "14-intercalaire-qualite", "15-qualite-securite-conformite",
  "16-tests-accessibilite", "17-intercalaire-gestion-produit",
  "18-gestion-produit-evolutions", "19-suivi-demonstrations-satisfaction",
  "20-intercalaire-inclusion", "21-inclusion-management", "22-conclusion", "23-merci",
];

(async () => {
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const out = await PDFDocument.create();

  const SLIDES = path.join(__dirname, "..", "slides");
  for (const name of ORDER) {
    const abs = "file:///" + path.join(SLIDES, name + ".html").split(path.sep).join("/");
    await page.goto(abs, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const buf = await page.pdf({
      width: "1280px", height: "720px", printBackground: true,
      pageRanges: "1", margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    const src = await PDFDocument.load(buf);
    const [pg] = await out.copyPages(src, [0]);
    out.addPage(pg);
    console.log("added", name);
  }

  fs.writeFileSync(path.join(SLIDES, "GreenCityTech-LiamCariou.pdf"), await out.save());
  console.log("→ GreenCityTech-LiamCariou.pdf (" + out.getPageCount() + " pages)");
  await browser.close();
})();
