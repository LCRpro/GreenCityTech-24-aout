const Jimp = require("jimp");

function isBg(r, g, b) {
  // beige / off-white background & light grain
  return r > 200 && g > 195 && b > 188;
}

(async () => {
  const img = await Jimp.read("src-logo-greencity.jpg");
  const W = img.bitmap.width, H = img.bitmap.height;
  console.log("size", W, H);

  // knock out background -> transparent
  img.scan(0, 0, W, H, function (x, y, idx) {
    const r = this.bitmap.data[idx], g = this.bitmap.data[idx + 1], b = this.bitmap.data[idx + 2];
    if (isBg(r, g, b)) this.bitmap.data[idx + 3] = 0;
  });

  // per-row content count
  const rows = new Array(H).fill(0);
  img.scan(0, 0, W, H, function (x, y, idx) {
    if (this.bitmap.data[idx + 3] > 40) rows[y]++;
  });
  // find bands (rows with content > 0.4% of width), grouped
  const thr = W * 0.004;
  const bands = [];
  let start = -1;
  for (let y = 0; y < H; y++) {
    const on = rows[y] > thr;
    if (on && start < 0) start = y;
    if (!on && start >= 0) { bands.push([start, y - 1]); start = -1; }
  }
  if (start >= 0) bands.push([start, H - 1]);
  console.log("bands (top,bottom,height):");
  bands.forEach(b => console.log("  ", b[0], b[1], b[1] - b[0]));

  // horizontal extent of a y-range
  function xrange(y0, y1) {
    let minx = W, maxx = 0;
    img.scan(0, y0, W, y1 - y0 + 1, function (x, y, idx) {
      if (this.bitmap.data[idx + 3] > 40) { if (x < minx) minx = x; if (x > maxx) maxx = x; }
    });
    return [minx, maxx];
  }

  // Assume: band0 = "UNIQUE CONCEPT" caption, band1 = emblem, rest = wordmark
  const emblem = bands[1];
  const [ex0, ex1] = xrange(emblem[0], emblem[1]);
  const pad = 12;
  const mark = img.clone().crop(
    Math.max(0, ex0 - pad), Math.max(0, emblem[0] - pad),
    Math.min(W, ex1 - ex0 + pad * 2), Math.min(H, emblem[1] - emblem[0] + pad * 2)
  );
  await mark.writeAsync("logo-greencity-mark.png");
  console.log("wrote mark", mark.bitmap.width, mark.bitmap.height);

  // full lockup = emblem top -> last band bottom
  const fullTop = emblem[0], fullBot = bands[bands.length - 1][1];
  const [fx0, fx1] = xrange(fullTop, fullBot);
  const full = img.clone().crop(
    Math.max(0, fx0 - pad), Math.max(0, fullTop - pad),
    Math.min(W, fx1 - fx0 + pad * 2), Math.min(H, fullBot - fullTop + pad * 2)
  );
  await full.writeAsync("logo-greencity-full.png");
  console.log("wrote full", full.bitmap.width, full.bitmap.height);

  // NWS: trim white background to transparent + autocrop
  const nws = await Jimp.read("src-logo-nws.jpg");
  nws.scan(0, 0, nws.bitmap.width, nws.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx], g = this.bitmap.data[idx + 1], b = this.bitmap.data[idx + 2];
    if (r > 235 && g > 235 && b > 235) this.bitmap.data[idx + 3] = 0;
  });
  nws.autocrop();
  await nws.writeAsync("logo-nws.png");
  console.log("wrote nws", nws.bitmap.width, nws.bitmap.height);
})();
