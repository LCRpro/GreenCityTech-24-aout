# Partiel — GreenCity Tech · Liam Cariou

Soutenance DevOps (RNCP 38590 — Manager de l'ingénierie numérique) : proposition
d'organisation et de pilotage pour faire passer **GreenCity Tech** d'un prototype
fragile à une plateforme fiable et industrialisée.

## Organisation du projet

| Élément | Contenu |
|---|---|
| **[index.html](index.html)** | 🎤 **Tableau de bord d'oral** (thème clair/sombre) — lit tous les `.md` + glossaire + boutons pour lancer la présentation. **Point d'entrée le jour J.** |
| **[slides/](slides/)** | 🎯 **La présentation** : les 24 slides HTML, `presentation.html` (mode plein écran), l'export `GreenCityTech-LiamCariou.pdf`, `shared.css` et les logos. |
| **[livrables/](livrables/)** | Les 11 livrables écrits (cadrage, architecture, pipeline, qualité, budget…). |
| **[redaction/](redaction/)** | Prépa écrite & orale : brief projet, parties 1-5, synthèse orale, Q&A jury, notes orales (script + cue-cards). |
| **[sujet/](sujet/)** | Énoncé du partiel (images). |
| **[outils/](outils/)** | Scripts de génération (PDF, aperçus, dashboard). |
| **[previews/](previews/)** | Aperçus PNG des slides (régénérables, ignorés par git). |
| **[archive/](archive/)** | Ancien : maquette `Slides/`, base de design, PDF d'origine, `visuels/`, `ressources/`. |

## Pour présenter (le jour J)

1. Ouvre **[index.html](index.html)** → tes notes à gauche.
2. Clique **« ▶ Lancer la présentation »** → ouvre [slides/presentation.html](slides/presentation.html).
3. Appuie sur **F** (plein écran) puis navigue aux **flèches** / **espace**.

Fallback : le PDF **[slides/GreenCityTech-LiamCariou.pdf](slides/GreenCityTech-LiamCariou.pdf)**.

## Préparer l'oral

- Brief de remise en contexte : [redaction/00-brief-projet.md](redaction/00-brief-projet.md)
- Script rédigé : [redaction/notes-orales-script.md](redaction/notes-orales-script.md)
- Antisèche (puces + Q&A) : [redaction/notes-orales-cue-cards.md](redaction/notes-orales-cue-cards.md)

## Modifier / régénérer

- **Un texte de slide** : éditer le `.html` concerné dans `slides/`.
- **Une couleur globale** : variables en haut de `slides/shared.css`.
- **Régénérer** (depuis la racine, nécessite Chrome + les libs de `outils/`) :
  ```bash
  node outils/_build-pdf.js          # → slides/GreenCityTech-LiamCariou.pdf
  node outils/_shot.js slides/*.html # → previews/ (aperçus PNG)
  node outils/_build-dashboard.js    # → index.html
  ```
