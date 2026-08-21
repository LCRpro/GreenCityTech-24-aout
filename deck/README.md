# Deck GreenCity Tech — Liam Cariou

Deck de soutenance reconstruit en **HTML éditable** (23 slides, 16:9), palette violet/magenta.

## Contenu

| Élément | Rôle |
|---|---|
| `01-couverture.html` → `23-merci.html` | Les 23 slides (un fichier par slide) |
| `index.html` | Sommaire cliquable |
| `shared.css` | Design system (palette, typo, composants) — **tout se règle ici** |
| `logo-greencity-mark.png` | Emblème GreenCity (utilisé sur chaque slide) |
| `logo-greencity-full.png` | Emblème + wordmark (variante, dispo si besoin) |
| `logo-nws.png` | Logo Normandie Web School (couverture + merci) |
| `GreenCityTech-LiamCariou.pdf` | **Export PDF final** (23 pages) |
| `notes-orales-script.md` | Script oral rédigé, slide par slide |
| `notes-orales-cue-cards.md` | Antisèche (puces) + réflexes Q&A |
| `previews/` | Aperçus PNG des slides (régénérables, ignorés par git) |
| `archive/` | Anciens fichiers non utilisés (logo recréé, images sources, script de détourage) |
| `_shot.js`, `_build-pdf.js` | Outils de génération |

## Présenter

Ouvrir `index.html` dans le navigateur, cliquer sur une slide, puis plein écran (F11).

## Modifier

- **Un texte** : éditer le `.html` concerné.
- **Une couleur** globale : variables en haut de `shared.css` (`--violet`, `--magenta`, `--indigo`…).

## Régénérer

Depuis le dossier `deck/` :

```bash
# Aperçus PNG (dans previews/)
node _shot.js *.html

# PDF final
node _build-pdf.js
```

> Nécessite Google Chrome installé + le Playwright présent dans `../visuels/assets/node_modules`.
> Le PDF utilise `pdf-lib` (`npm install pdf-lib` si absent).
