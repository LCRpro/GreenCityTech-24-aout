const { marked } = require("marked");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, ".."); // racine du projet (outils/ est à la racine)

// Groupes de documents (titre affiché, chemin relatif à la racine du projet)
const GROUPS = [
  { name: "🎤 Prépa orale", docs: [
    ["Brief projet", "redaction/00-brief-projet.md"],
    ["Script oral (à dire)", "redaction/notes-orales-script.md"],
    ["Cue-cards (antisèche)", "redaction/notes-orales-cue-cards.md"],
    ["Synthèse orale (fil rouge)", "redaction/synthese_orale_greencity_tech.md"],
    ["Q&A jury", "redaction/questions_sensibles_et_reponses.md"],
  ]},
  { name: "📖 Référence", docs: [
    ["Glossaire technique & outils", "redaction/glossaire-technique.md"],
  ]},
  { name: "📝 Contenu détaillé", docs: [
    ["Partie 1 — Organisation & méthodo", "redaction/partie_1_organisation_methodologie_devops.md"],
    ["Partie 2 — Mise en œuvre technique", "redaction/partie_2_mise_en_oeuvre_technique_devops.md"],
    ["Partie 3 — Qualité & conformité", "redaction/partie_3_qualite_conformite_securite.md"],
    ["Partie 4 — Relation client & évolutions", "redaction/partie_4_relation_client_evolutions.md"],
    ["Partie 5 — Inclusion & management", "redaction/partie_5_inclusion_management_equipe.md"],
    ["Présentation (détaillée)", "redaction/presentation.md"],
    ["Présentation synthétique", "redaction/presentation_synthetique.md"],
    ["Liste des livrables", "redaction/liste_livrables_presentation.md"],
  ]},
  { name: "📦 Livrables", docs: [
    ["README livrables", "livrables/README.md"],
    ["01 — Note de cadrage", "livrables/01_note_cadrage_devops.md"],
    ["02 — Schéma architecture", "livrables/02_schema_architecture_devops.md"],
    ["03 — Pipeline CI/CD", "livrables/03_exemple_pipeline_ci_cd.md"],
    ["04 — Déploiement & rollback", "livrables/04_strategie_deploiement_et_rollback.md"],
    ["05 — Proposition d'outillage", "livrables/05_proposition_outillage.md"],
    ["06 — Plan qualité & tests", "livrables/06_plan_qualite_tests_conformite.md"],
    ["07 — Indicateurs qualité", "livrables/07_indicateurs_qualite_et_pilotage.md"],
    ["08 — Gestion produit", "livrables/08_gestion_produit_et_evolutions.md"],
    ["09 — Suivi & démonstrations", "livrables/09_plan_de_suivi_et_demonstrations.md"],
    ["10 — Inclusion & management", "livrables/10_inclusion_et_management.md"],
    ["11 — Budget prévisionnel", "livrables/11_budget_previsionnel.md"],
  ]},
];

function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

let nav = "";
let articles = "";
let idx = 0;
let firstId = null;

for (const g of GROUPS) {
  nav += `<div class="nav-group">${esc(g.name)}</div>`;
  for (const [title, rel] of g.docs) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) { console.warn("manquant:", rel); continue; }
    const id = "doc-" + idx++;
    if (firstId === null) firstId = id;
    const md = fs.readFileSync(abs, "utf8");
    const html = marked.parse(md);
    nav += `<button class="nav-item" data-id="${id}" title="${esc(rel)}">${esc(title)}</button>`;
    articles += `<article class="doc" id="${id}" hidden><div class="doc-meta">${esc(rel)}</div>${html}</article>`;
  }
}

const page = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Oral GreenCity Tech — Liam Cariou</title>
<script>try{var t=localStorage.getItem('gct_theme')||((window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
<style>
:root{
  --violet:#7C3AED;--violet-deep:#6D28D9;--violet-soft:#A78BFA;--magenta:#EC4899;--indigo:#1E1B4B;
  --bg:#efe9fb;--text:#1E1B4B;--sidebar:#FAF7FF;--panel:#ffffff;
  --border:rgba(30,27,75,.12);--muted:#6b6480;
  --h1:#1E1B4B;--h2:#6D28D9;
  --code-bg:#F3E8FF;--pre-bg:#1E1B4B;--pre-text:#eee;
  --quote-bg:#F3E8FF;--quote-text:#241B3D;
  --field-bg:#fff;--navhover:#F3E8FF;--th-bg:#1E1B4B;--th-text:#fff;
  --shadow:rgba(30,27,75,.10);
}
:root[data-theme="dark"]{
  --bg:#141220;--text:#e7e3f5;--sidebar:#1b1830;--panel:#211d36;
  --border:rgba(255,255,255,.10);--muted:#a79fc4;
  --h1:#f0ecff;--h2:#b79bff;
  --code-bg:#2a2542;--pre-bg:#0e0c17;--pre-text:#e7e3f5;
  --quote-bg:#241f3a;--quote-text:#d8d2ee;
  --field-bg:#211d36;--navhover:#2a2542;--th-bg:#37306b;--th-text:#fff;
  --shadow:rgba(0,0,0,.45);
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
body{font-family:"Segoe UI",system-ui,Arial,sans-serif;color:var(--text);background:var(--bg);transition:background .2s,color .2s;}
.topbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:14px;padding:14px 22px;
  background:linear-gradient(120deg,var(--indigo),var(--violet-deep));color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.28);}
.topbar .brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:20px;}
.topbar .brand img{width:38px;height:38px;}
.topbar .sub{opacity:.8;font-size:13px;font-weight:600;}
.spacer{flex:1;}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;border:0;cursor:pointer;
  font-weight:800;font-size:15px;text-decoration:none;transition:transform .05s;}
.btn:active{transform:translateY(1px);}
.btn.primary{background:linear-gradient(135deg,var(--magenta),#f472b6);color:#fff;box-shadow:0 6px 16px rgba(236,72,153,.4);}
.btn.ghost{background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.25);}
.ico-btn{width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.14);
  color:#fff;cursor:pointer;font-weight:800;font-size:16px;display:inline-flex;align-items:center;justify-content:center;}
.ico-btn:hover{background:rgba(255,255,255,.24);}
.fs-ctl{display:inline-flex;gap:4px;}
.fs-ctl button{width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.14);color:#fff;cursor:pointer;font-weight:800;font-size:15px;}
.layout{display:grid;grid-template-columns:320px 1fr;min-height:calc(100vh - 66px);}
.sidebar{background:var(--sidebar);border-right:1px solid var(--border);padding:16px;overflow-y:auto;height:calc(100vh - 66px);position:sticky;top:66px;}
.filter{width:100%;padding:10px 14px;border-radius:12px;border:1px solid var(--border);font-size:14px;margin-bottom:12px;background:var(--field-bg);color:var(--text);}
.nav-group{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--h2);margin:16px 6px 6px;}
.nav-item{display:block;width:100%;text-align:left;padding:9px 12px;margin:2px 0;border-radius:10px;border:0;background:transparent;
  cursor:pointer;font-size:14.5px;font-weight:600;color:var(--text);}
.nav-item:hover{background:var(--navhover);}
.nav-item.active{background:linear-gradient(135deg,var(--violet),var(--violet-deep));color:#fff;}
.content{padding:34px 46px;max-width:900px;margin:0 auto;width:100%;font-size:var(--fs,17px);line-height:1.7;}
.doc-meta{font-size:12px;color:var(--muted);font-family:monospace;margin-bottom:18px;padding-bottom:10px;border-bottom:1px solid var(--border);}
.content h1{font-size:1.9em;color:var(--h1);border-bottom:3px solid var(--violet);padding-bottom:.2em;margin-top:0;}
.content h2{font-size:1.45em;color:var(--h2);margin-top:1.6em;}
.content h3{font-size:1.2em;color:var(--h1);margin-top:1.3em;}
.content a{color:var(--h2);}
.content code{background:var(--code-bg);color:var(--text);padding:2px 6px;border-radius:6px;font-size:.9em;}
.content pre{background:var(--pre-bg);color:var(--pre-text);padding:16px;border-radius:12px;overflow-x:auto;}
.content pre code{background:transparent;color:inherit;padding:0;}
.content blockquote{border-left:4px solid var(--magenta);margin:1em 0;padding:.4em 1em;background:var(--quote-bg);border-radius:0 10px 10px 0;color:var(--quote-text);}
.content table{border-collapse:collapse;width:100%;margin:1em 0;box-shadow:0 6px 18px var(--shadow);border-radius:10px;overflow:hidden;}
.content th{background:var(--th-bg);color:var(--th-text);text-align:left;padding:10px 12px;font-size:.92em;}
.content td{background:var(--panel);color:var(--text);padding:9px 12px;border-top:1px solid var(--border);}
.content ul,.content ol{padding-left:1.4em;}
.content li{margin:.3em 0;}
.content hr{border:0;border-top:1px solid var(--border);margin:1.6em 0;}
@media print{.topbar,.sidebar{display:none;}.layout{grid-template-columns:1fr;}.doc[hidden]{display:block!important;}}
</style>
</head>
<body>
<div class="topbar">
  <div class="brand"><img src="slides/logo-greencity-mark.png" alt=""><div>GreenCity Tech<div class="sub">Oral · Liam Cariou · 24 août 2026</div></div></div>
  <div class="spacer"></div>
  <button id="themeBtn" class="ico-btn" title="Thème clair / sombre">🌙</button>
  <div class="fs-ctl"><button id="fsMinus" title="Réduire le texte">A−</button><button id="fsPlus" title="Agrandir le texte">A+</button></div>
  <a class="btn primary" href="slides/presentation.html" target="_blank">▶ Lancer la présentation</a>
  <a class="btn ghost" href="slides/GreenCityTech-LiamCariou.pdf" target="_blank">📄 PDF</a>
</div>
<div class="layout">
  <aside class="sidebar">
    <input class="filter" id="filter" placeholder="🔍 Filtrer les documents…">
    <nav id="nav">${nav}</nav>
  </aside>
  <main class="content" id="content">
    ${articles}
  </main>
</div>
<script>
const items=[...document.querySelectorAll('.nav-item')];
const docs=[...document.querySelectorAll('.doc')];
function show(id){
  docs.forEach(d=>d.hidden=d.id!==id);
  items.forEach(b=>b.classList.toggle('active',b.dataset.id===id));
  document.getElementById('content').scrollTo({top:0});
  try{localStorage.setItem('gct_lastdoc',id);}catch(e){}
}
items.forEach(b=>b.addEventListener('click',()=>show(b.dataset.id)));
// filtre
document.getElementById('filter').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase();
  items.forEach(b=>{b.style.display=b.textContent.toLowerCase().includes(q)?'':'none';});
  document.querySelectorAll('.nav-group').forEach(g=>g.style.display=q?'none':'');
});
// thème clair/sombre
function setTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  const b=document.getElementById('themeBtn'); if(b) b.textContent=(t==='dark'?'☀️':'🌙');
  try{localStorage.setItem('gct_theme',t);}catch(e){}
}
setTheme(document.documentElement.getAttribute('data-theme')||'light');
document.getElementById('themeBtn').onclick=()=>setTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
// taille de texte
let fs=parseInt((()=>{try{return localStorage.getItem('gct_fs')}catch(e){return null}})()||'17',10);
function applyFs(){document.getElementById('content').style.setProperty('--fs',fs+'px');try{localStorage.setItem('gct_fs',fs)}catch(e){}}
document.getElementById('fsPlus').onclick=()=>{fs=Math.min(26,fs+1);applyFs();};
document.getElementById('fsMinus').onclick=()=>{fs=Math.max(13,fs-1);applyFs();};
applyFs();
// doc initial (dernier ouvert ou premier)
let start='${firstId}';
try{const s=localStorage.getItem('gct_lastdoc'); if(s&&document.getElementById(s))start=s;}catch(e){}
show(start);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, "index.html"), page);
console.log("→ index.html généré (" + idx + " documents)");
