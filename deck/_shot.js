const { chromium } = require("../visuels/assets/node_modules/playwright-core");
const path = require("path");
const fs = require("fs");

(async () => {
  const files = process.argv.slice(2);
  fs.mkdirSync("previews", { recursive: true });
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
  for (const f of files) {
    const abs = "file://" + path.resolve(f).replace(/\\/g, "/");
    await page.goto(abs, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const out = path.join("previews", path.basename(f).replace(/\.html$/, ".png"));
    await page.locator(".slide").screenshot({ path: out });
    console.log("shot", out);
  }
  await browser.close();
})();
