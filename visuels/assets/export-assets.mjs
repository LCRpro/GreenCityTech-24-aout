import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assets = [
  { html: "organigramme-equipe.html", png: "organigramme-equipe.png", width: 1600, height: 900 },
  { html: "git-environnements.html", png: "git-environnements.png", width: 1600, height: 900 },
  { html: "pipeline-cicd.html", png: "pipeline-cicd.png", width: 1300, height: 600 }
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });

for (const asset of assets) {
  await page.setViewportSize({ width: asset.width, height: asset.height });
  const url = new URL(`file:///${path.join(__dirname, asset.html).replace(/\\/g, "/")}`);
  await page.goto(url.href, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(__dirname, asset.png),
    type: "png",
    omitBackground: true
  });
}

await browser.close();
