import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assets = [
  { html: "fond-ouverture.html", png: "fond-ouverture.png" },
  { html: "fond-intercalaire.html", png: "fond-intercalaire.png" },
  { html: "fond-contenu-kpi.html", png: "fond-contenu-kpi.png" },
  { html: "fond-pur-ouverture.html", png: "fond-pur-ouverture.png" },
  { html: "fond-pur-intercalaire.html", png: "fond-pur-intercalaire.png" },
  { html: "fond-pur-contenu.html", png: "fond-pur-contenu.png" },
  { html: "fond-pur-contenu-sans-bas-droite.html", png: "fond-pur-contenu-sans-bas-droite.png" },
  { html: "fond-pur-contenu-accent-gauche.html", png: "fond-pur-contenu-accent-gauche.png" },
  { html: "fond-pur-contenu-haut-gauche-bas-centre.html", png: "fond-pur-contenu-haut-gauche-bas-centre.png" }
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });

for (const asset of assets) {
  const url = new URL(`file:///${path.join(__dirname, asset.html).replace(/\\/g, "/")}`);
  await page.goto(url.href, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(__dirname, asset.png),
    type: "png"
  });
}

await browser.close();
