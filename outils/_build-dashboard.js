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
    const cls = rel.includes("notes-orales-script") ? "doc script-doc" : "doc";
    nav += `<button class="nav-item" data-id="${id}" title="${esc(rel)}">${esc(title)}</button>`;
    articles += `<article class="${cls}" id="${id}" hidden><div class="doc-meta">${esc(rel)}</div>${html}</article>`;
  }
}

const ACCESS_CODE = "2408"; // 🔑 code d'accès au dashboard — change-le ici puis régénère (node outils/_build-dashboard.js)

const page = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Oral GreenCity Tech — Liam Cariou</title>
<link rel="icon" type="image/png" href="slides/logo-greencity-mark.png">
<script>try{var t=localStorage.getItem('gct_theme')||((window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light');document.documentElement.setAttribute('data-theme',t);if(localStorage.getItem('gct_dash_ok')==='1')document.documentElement.classList.add('unlocked');}catch(e){}</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap");
:root{
  --violet:#7C3AED;--violet-deep:#6D28D9;--violet-soft:#A78BFA;--magenta:#EC4899;--indigo:#1E1B4B;
  --bg:#ffffff;--text:#1e2230;--sidebar:#f6f6f8;--panel:#ffffff;
  --border:rgba(18,18,30,.10);--muted:#6b7280;
  --h1:#1E1B4B;--h2:#6D28D9;
  --code-bg:#eef0f2;--pre-bg:#1E1B4B;--pre-text:#eee;
  --quote-bg:#f5f6f8;--quote-text:#2a2a35;
  --field-bg:#ffffff;--navhover:#eef0f2;--th-bg:#1E1B4B;--th-text:#fff;
  --shadow:rgba(15,15,30,.08);
  --topbar:linear-gradient(120deg,#1E1B4B,#6D28D9);
}
:root[data-theme="dark"]{
  --bg:#0f0f11;--text:#e9e9ec;--sidebar:#17171a;--panel:#202024;
  --border:rgba(255,255,255,.10);--muted:#9b9ba3;
  --h1:#f5f5f7;--h2:#a78bfa;
  --code-bg:#26262b;--pre-bg:#0a0a0c;--pre-text:#e9e9ec;
  --quote-bg:#1b1b1f;--quote-text:#d4d4d8;
  --field-bg:#202024;--navhover:#26262b;--th-bg:#2a2a30;--th-text:#f5f5f7;
  --shadow:rgba(0,0,0,.5);
  --topbar:linear-gradient(120deg,#161618,#232327);
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
body{font-family:"Segoe UI",system-ui,Arial,sans-serif;color:var(--text);background:var(--bg);transition:background .2s,color .2s;}
.topbar{position:sticky;top:0;z-index:70;display:flex;align-items:center;gap:12px;padding:12px 20px;height:66px;
  background:var(--topbar);color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.28);}
.topbar .brand{display:flex;align-items:center;gap:11px;font-weight:800;font-size:19px;min-width:0;}
.topbar .brand img{width:36px;height:36px;flex:none;}
.topbar .brand .name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.topbar .sub{opacity:.8;font-size:12.5px;font-weight:600;}
.spacer{flex:1;}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;border:0;cursor:pointer;
  font-weight:800;font-size:15px;text-decoration:none;white-space:nowrap;transition:transform .05s;}
.btn:active{transform:translateY(1px);}
.btn.primary{background:linear-gradient(135deg,var(--magenta),#f472b6);color:#fff;box-shadow:0 6px 16px rgba(236,72,153,.4);}
.btn.ghost{background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.25);}
.ico-btn{width:38px;height:38px;flex:none;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.14);
  color:#fff;cursor:pointer;font-weight:800;font-size:16px;display:inline-flex;align-items:center;justify-content:center;}
.ico-btn:hover{background:rgba(255,255,255,.24);}
.burger{display:none;}
.fs-ctl{display:inline-flex;gap:4px;}
.fs-ctl button{width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.14);color:#fff;cursor:pointer;font-weight:800;font-size:15px;}
.layout{display:grid;grid-template-columns:320px 1fr;min-height:calc(100vh - 66px);}
.sidebar{background:var(--sidebar);border-right:1px solid var(--border);padding:16px;overflow-y:auto;height:calc(100vh - 66px);position:sticky;top:66px;}
.overlay{display:none;}
.filter{width:100%;padding:10px 14px;border-radius:12px;border:1px solid var(--border);font-size:14px;margin-bottom:12px;background:var(--field-bg);color:var(--text);}
.nav-group{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--h2);margin:16px 6px 6px;}
.nav-item{display:block;width:100%;text-align:left;padding:9px 12px;margin:2px 0;border-radius:10px;border:0;background:transparent;
  cursor:pointer;font-size:14.5px;font-weight:600;color:var(--text);}
.nav-item:hover{background:var(--navhover);}
.nav-item.active{background:linear-gradient(135deg,var(--violet),var(--violet-deep));color:#fff;}
.content{padding:34px 46px 100px;max-width:760px;margin:0 auto;width:100%;font-family:"Source Sans 3","Segoe UI",sans-serif;font-size:var(--fs,18px);line-height:1.8;}
.doc-meta{font-size:12px;color:var(--muted);font-family:monospace;margin-bottom:18px;padding-bottom:10px;border-bottom:1px solid var(--border);}
.content h1,.content h2,.content h3{font-family:"Baloo 2","Segoe UI",sans-serif;letter-spacing:-.01em;}
/* script oral : corps lisible & aéré, titres discrets */
.script-doc{font-size:1.04em;line-height:1.8;}
.script-doc p{margin:.2em 0 .85em;}
.script-doc h2{margin-top:1.5em;}
.content h1{font-size:1.55em;color:var(--h1);border-bottom:3px solid var(--violet);padding-bottom:.2em;margin-top:0;}
.content h2{font-size:1.2em;color:var(--h2);margin-top:1.5em;}
.content h3{font-size:1.05em;color:var(--h1);margin-top:1.3em;}
.content a{color:var(--h2);}
.content code{background:var(--code-bg);color:var(--text);padding:2px 6px;border-radius:6px;font-size:.9em;}
.content pre{background:var(--pre-bg);color:var(--pre-text);padding:16px;border-radius:12px;overflow-x:auto;}
.content pre code{background:transparent;color:inherit;padding:0;}
.content blockquote{border-left:4px solid var(--magenta);margin:1em 0;padding:.4em 1em;background:var(--quote-bg);border-radius:0 10px 10px 0;color:var(--quote-text);}
.content table{border-collapse:collapse;width:100%;margin:1em 0;box-shadow:0 6px 18px var(--shadow);border-radius:10px;overflow:hidden;display:block;overflow-x:auto;}
.content th{background:var(--th-bg);color:var(--th-text);text-align:left;padding:10px 12px;font-size:.92em;white-space:nowrap;}
.content td{background:var(--panel);color:var(--text);padding:9px 12px;border-top:1px solid var(--border);}
.content ul,.content ol{padding-left:1.4em;}
.content li{margin:.3em 0;}
.content hr{border:0;border-top:1px solid var(--border);margin:1.6em 0;}
/* ---------- Portail d'accès ---------- */
.gate{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;background:var(--topbar);color:#fff;padding:20px;}
html.unlocked .gate{display:none;}
.gate .gcard{width:min(100%,360px);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:20px;padding:30px 24px;text-align:center;backdrop-filter:blur(8px);box-shadow:0 22px 55px rgba(0,0,0,.4);}
.gate .gcard h2{font-family:"Baloo 2","Segoe UI",sans-serif;margin:.15em 0 .1em;font-size:26px;}
.gate .gcard p{opacity:.85;margin:.2em 0 1.2em;font-size:14px;line-height:1.4;}
.gate input{width:100%;text-align:center;font-size:28px;font-weight:800;letter-spacing:.45em;padding:14px 10px;border:0;border-radius:12px;background:#fff;color:#1E1B4B;}
.gate .gbtn{margin-top:14px;width:100%;padding:13px;border:0;border-radius:12px;cursor:pointer;font-weight:800;font-size:16px;background:linear-gradient(135deg,var(--magenta),#f472b6);color:#fff;}
.gate .gerr{min-height:18px;margin-top:10px;font-size:13px;color:#ffd7d7;font-weight:700;}

/* ---------- Responsive : sidebar en burger ---------- */
@media (max-width:860px){
  .layout{grid-template-columns:1fr;}
  .burger{display:inline-flex;}
  .sidebar{position:fixed;top:66px;left:0;bottom:0;width:290px;max-width:84vw;z-index:60;
    transform:translateX(-105%);transition:transform .25s ease;box-shadow:0 12px 40px rgba(0,0,0,.45);}
  .sidebar.open{transform:translateX(0);}
  .overlay{display:block;position:fixed;inset:66px 0 0 0;background:rgba(0,0,0,.5);z-index:55;
    opacity:0;pointer-events:none;transition:opacity .25s;}
  .overlay.show{opacity:1;pointer-events:auto;}
  .content{padding:22px 18px 100px;}
  .topbar .sub{display:none;}
  .btn.primary,.btn.ghost:not(.remote-link){display:none;} /* mobile : on garde l'accès à la télécommande */
  .btn.remote-link{padding:10px 12px;font-size:0;}
  .btn.remote-link .ico{font-size:17px;}
}
@media (max-width:520px){
  .topbar{gap:8px;padding:10px 12px;}
  .topbar .brand .name{font-size:16px;}
}
/* ---------- Télécommande de la présentation ---------- */
.remote{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:80;display:flex;align-items:center;gap:8px;
  background:var(--panel);border:1px solid var(--border);border-radius:999px;padding:8px 10px;box-shadow:0 12px 34px var(--shadow);}
.remote .rbtn{width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;font-size:17px;font-weight:800;flex:none;
  background:linear-gradient(135deg,var(--violet),var(--violet-deep));color:#fff;display:flex;align-items:center;justify-content:center;}
.remote .rbtn:active{transform:translateY(1px);}
.remote .rinfo{display:flex;flex-direction:column;align-items:center;min-width:150px;line-height:1.15;padding:0 4px;}
.remote .rpos{font-family:"Baloo 2","Segoe UI",sans-serif;font-weight:800;font-size:15px;color:var(--text);}
.remote .rtitle{font-size:11.5px;color:var(--muted);max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.remote .rcode{width:62px;border:1px solid var(--border);border-radius:9px;padding:7px 4px;background:var(--field-bg);color:var(--text);text-align:center;font-weight:800;letter-spacing:.06em;}
.remote .rconnect{border:0;border-radius:9px;padding:8px 9px;background:var(--violet);color:#fff;font-weight:800;cursor:pointer;font-size:12px;}
@media (max-width:520px){.remote{gap:6px;}.remote .rinfo{min-width:92px;}.remote .rtitle{max-width:120px;}.remote .rbtn{width:44px;height:44px;}}
@media print{.topbar,.sidebar,.overlay,.remote{display:none!important;}.layout{grid-template-columns:1fr;}.doc[hidden]{display:block!important;}}
</style>
</head>
<body>
<div class="gate" id="gate">
  <div class="gcard">
    <div style="font-size:42px;line-height:1">🔒</div>
    <h2>Accès protégé</h2>
    <p>Entre le code à 4 chiffres pour ouvrir le tableau de bord.</p>
    <input id="gcode" inputmode="numeric" maxlength="4" placeholder="••••" aria-label="Code d'accès">
    <button class="gbtn" id="gbtn">Entrer</button>
    <div class="gerr" id="gerr"></div>
  </div>
</div>
<div class="topbar">
  <button id="burger" class="ico-btn burger" title="Menu" aria-label="Menu">☰</button>
  <div class="brand"><img src="slides/logo-greencity-mark.png" alt=""><div class="name">GreenCity Tech<div class="sub">Oral · Liam Cariou · 24 août 2026</div></div></div>
  <div class="spacer"></div>
  <button id="themeBtn" class="ico-btn" title="Thème clair / sombre">🌙</button>
  <div class="fs-ctl"><button id="fsMinus" title="Réduire le texte">A−</button><button id="fsPlus" title="Agrandir le texte">A+</button></div>
  <a class="btn primary" href="slides/presentation.html" target="_blank"><span class="ico">▶</span><span class="lbl">Lancer la présentation</span></a>
  <a class="btn ghost remote-link" href="slides/remote.html" target="_blank"><span class="ico">🎤</span><span class="lbl">Télécommande</span></a>
  <a class="btn ghost" href="slides/GreenCityTech-LiamCariou.pdf" target="_blank">📄 PDF</a>
</div>
<div class="overlay" id="overlay"></div>
<div class="layout">
  <aside class="sidebar" id="sidebar">
    <input class="filter" id="filter" placeholder="🔍 Filtrer les documents…">
    <nav id="nav">${nav}</nav>
  </aside>
  <main class="content" id="content">
    ${articles}
  </main>
</div>
<div class="remote" id="remote" title="Saisissez le code affiché sur la slide Préparation pour piloter le diapo depuis ce téléphone.">
  <button class="rbtn" id="rprev" aria-label="Slide précédente">◀</button>
  <div class="rinfo"><span class="rpos" id="rpos">— / —</span><span class="rtitle" id="rtitle">présentation non ouverte</span></div>
  <input class="rcode" id="rcode" inputmode="numeric" maxlength="4" placeholder="Code" aria-label="Code télécommande">
  <button class="rconnect" id="rconnect">Lier</button>
  <button class="rbtn" id="rnext" aria-label="Slide suivante">▶</button>
</div>
<script>
// Portail d'accès (code à 4 chiffres — dissuasion, pas une vraie sécurité côté serveur)
(function(){
  const ACCESS="${ACCESS_CODE}";
  const gcode=document.getElementById('gcode'), gerr=document.getElementById('gerr');
  function unlock(){ try{localStorage.setItem('gct_dash_ok','1');}catch(e){} document.documentElement.classList.add('unlocked'); }
  function tryUnlock(){ if((gcode.value||'').trim()===ACCESS){ unlock(); } else { gerr.textContent='Code incorrect'; gcode.value=''; gcode.focus(); } }
  document.getElementById('gbtn').onclick=tryUnlock;
  gcode.addEventListener('keydown',e=>{ if(e.key==='Enter') tryUnlock(); });
  gcode.addEventListener('input',()=>{ if((gcode.value||'').trim().length===4) tryUnlock(); });
  if(!document.documentElement.classList.contains('unlocked')) setTimeout(()=>gcode.focus(),60);
})();
const items=[...document.querySelectorAll('.nav-item')];
const docs=[...document.querySelectorAll('.doc')];
const sidebar=document.getElementById('sidebar'), overlay=document.getElementById('overlay');
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show');}
function toggleMenu(){const o=sidebar.classList.toggle('open');overlay.classList.toggle('show',o);}
document.getElementById('burger').onclick=toggleMenu;
overlay.onclick=closeMenu;
function show(id){
  docs.forEach(d=>d.hidden=d.id!==id);
  items.forEach(b=>b.classList.toggle('active',b.dataset.id===id));
  document.getElementById('content').scrollTo({top:0});
  if(window.innerWidth<=860) closeMenu();
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
let fs=parseInt((()=>{try{return localStorage.getItem('gct_fs')}catch(e){return null}})()||'18',10);
function applyFs(){document.getElementById('content').style.setProperty('--fs',fs+'px');try{localStorage.setItem('gct_fs',fs)}catch(e){}}
document.getElementById('fsPlus').onclick=()=>{fs=Math.min(26,fs+1);applyFs();};
document.getElementById('fsMinus').onclick=()=>{fs=Math.max(13,fs-1);applyFs();};
applyFs();
// Télécommande de la présentation (BroadcastChannel, même origine)
const present=("BroadcastChannel" in window)?new BroadcastChannel("gct-present"):null;
const rpos=document.getElementById("rpos"), rtitle=document.getElementById("rtitle");
const rcode=document.getElementById("rcode");
let remoteSession="";
function validRemoteCode(value){return /^\\d{4}$/.test(value);}
function setRemoteCode(value){
  const code=String(value||"").trim();
  if(!validRemoteCode(code)){rtitle.textContent="Code à 4 chiffres requis";return false;}
  remoteSession=code; rcode.value=code; rpos.textContent="Code "+code; rtitle.textContent="prêt — lance le diapo";
  try{localStorage.setItem("gct_remote_session",code);}catch(e){}
  const link=document.querySelector('a.btn.primary');       // le lancement partage le code au diapo
  if(link) link.href="slides/presentation.html?remote="+code;
  return true;
}
const codeFromUrl=new URLSearchParams(location.search).get("remote")||"";
let savedRemoteCode="";
try{savedRemoteCode=localStorage.getItem("gct_remote_session")||"";}catch(e){}
if(validRemoteCode(codeFromUrl)) setRemoteCode(codeFromUrl);
else if(validRemoteCode(savedRemoteCode)) setRemoteCode(savedRemoteCode);
else { const rb=new Uint32Array(1); crypto.getRandomValues(rb); setRemoteCode(String(1000+(rb[0]%9000))); } // sinon on en génère un
document.getElementById("rconnect").onclick=()=>setRemoteCode(rcode.value);
rcode.addEventListener("keydown",e=>{if(e.key==="Enter")setRemoteCode(rcode.value);});
rcode.addEventListener("input",()=>{if(rcode.value.trim().length===4)setRemoteCode(rcode.value);});
async function sendRemote(action){
  try{
    const response=await fetch("slides/remote-control.php?session="+encodeURIComponent(remoteSession),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action})});
    rtitle.textContent=response.ok?"Commande envoyée":"Erreur de relais";
  }catch(e){rtitle.textContent="Relais inaccessible";}
}
if(present){
  present.onmessage=(e)=>{const d=e.data||{}; if(d.type==="state"){rpos.textContent=(d.i+1)+" / "+d.n; rtitle.textContent=d.title||"";}};
  present.postMessage({action:"ping"});
}else{ rtitle.textContent="navigateur non compatible"; }
document.getElementById("rprev").onclick=()=>{ if(remoteSession) sendRemote("prev"); else if(present) present.postMessage({action:"prev"}); else rtitle.textContent="Saisissez le code"; };
document.getElementById("rnext").onclick=()=>{ if(remoteSession) sendRemote("next"); else if(present) present.postMessage({action:"next"}); else rtitle.textContent="Saisissez le code"; };
// doc initial (dernier ouvert ou premier)
let start='${firstId}';
try{const s=localStorage.getItem('gct_lastdoc'); if(s&&document.getElementById(s))start=s;}catch(e){}
show(start);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, "index.html"), page);
console.log("→ index.html généré (" + idx + " documents)");
