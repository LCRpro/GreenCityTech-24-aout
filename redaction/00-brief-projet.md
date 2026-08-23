# 🧭 Brief projet — GreenCity Tech (remise en contexte)

> Partiel **RNCP 38590 — Manager de l'ingénierie numérique** (NWS).
> Tu interviens comme **consultant DevOps** : proposer et piloter une organisation DevOps pour GreenCity Tech.

---

## 1. C'est quoi GreenCity Tech ?

Une société qui développe une **plateforme de signalement citoyen** : les habitants signalent des incidents urbains (dépôts sauvages, éclairage public défectueux, voirie dégradée, mobilier urbain, incidents de circulation, accessibilité).

**La solution = 4 briques :**
- une **app mobile** (Android/iOS),
- un **portail web citoyen**,
- une **interface d'administration** pour les services municipaux,
- des **API** exposées aux collectivités partenaires.

Un **prototype fonctionnel** a été développé **vite fait par 4 développeurs** pour répondre à un appel d'offres public. Depuis, **plusieurs contrats avec des collectivités** ont été signés → il faut passer du prototype à une vraie plateforme.

## 2. Le problème (pourquoi on t'appelle)

L'existant est fragile sur tous les plans :

| Domaine | Problèmes |
|---|---|
| **Infrastructure** | VMs gérées à la main, pas de préprod stable, déploiements manuels, pas d'Infrastructure as Code |
| **Développement** | Pas de CI/CD, peu de tests, bugs fréquents en prod, doc incomplète, branches Git non standardisées |
| **Exploitation** | Monitoring insuffisant, pas d'alertes, temps de résolution des incidents élevé |
| **Organisation** | Communication dev ↔ exploitation difficile, priorités métier mouvantes, demandes clients qui se multiplient |
| **Humain** | Un développeur a des **troubles visuels** (adaptations ergonomiques) + une **fatigue cognitive** sur les réunions longues → la direction veut une organisation **inclusive et non-discriminante** |

**Ce que veut la direction :** industrialiser dev & déploiement, améliorer la qualité, sécuriser les mises en prod, réduire les délais, garantir la conformité, structurer le suivi budgétaire → **adopter une démarche DevOps complète.**

## 3. Ta mission

Proposer et piloter une **organisation DevOps adaptée** à GreenCity Tech, en tenant compte des **contraintes techniques, enjeux métiers, besoins utilisateurs, contraintes humaines/organisationnelles et sécurité**. Tu dois **produire une analyse argumentée + des livrables** pour la direction, les équipes techniques et le client, et **justifier tous tes choix**.

## 4. Ce qui est demandé — les 5 parties

**Partie 1 — Organisation & méthodologie DevOps**
Organisation des équipes, rôles & responsabilités, méthode de gestion de projet, outils DevOps, stratégie Git, gestion des environnements, principes d'automatisation, indicateurs de pilotage. → *justifier les choix.*

**Partie 2 — Mise en œuvre technique DevOps**
Architecture DevOps cible : CI/CD, automatisation des tests de non-régression, supervision, gestion des logs, sécurité des déploiements (rollback…), Infrastructure as Code.
Livrables concrets : un **schéma d'architecture**, un **exemple de pipeline CI/CD**, un **exemple de stratégie de déploiement**, une **proposition d'outillage**.

**Partie 3 — Qualité & conformité**
Principes de tests, contrôles qualité, mécanismes de rollback, indicateurs de qualité logicielle. Garantir : conformité des apps mobiles aux stores, conformité web, sécurité des données, stabilité des livrables.

**Partie 4 — Relation client & gestion des évolutions**
Nouvelles demandes de la collectivité : **cartographie temps réel**, **photos HD**, **chatbot citoyen**. Expliquer comment les intégrer, organiser les échanges client, gérer les arbitrages de priorité, communiquer les impacts (technique/humain/budget). Proposer : planning de points d'étape, démonstrations, indicateurs de satisfaction.

**Partie 5 — Inclusion & management d'équipe**
Analyser les difficultés des développeurs en situation de handicap. Proposer aménagements organisationnels, adaptations techniques, méthodes de communication inclusives, outils collaboratifs. Garantir : efficacité collective, non-discrimination, qualité de vie au travail.

## 5. Où en est le projet aujourd'hui (déjà fait)

- ✅ **Les 5 parties rédigées** en détail → `redaction/partie_1..5_*.md`
- ✅ **11 livrables** écrits → `livrables/` (note de cadrage, schéma archi, pipeline CI/CD, stratégie déploiement/rollback, outillage, plan qualité/tests, indicateurs, gestion produit, plan de suivi, inclusion, budget)
- ✅ **La présentation finale** (24 slides) → `slides/` + export `slides/GreenCityTech-LiamCariou.pdf`
- ✅ **Notes orales** prêtes → `redaction/notes-orales-script.md` (script) + `redaction/notes-orales-cue-cards.md` (antisèche + Q&A jury)
- ✅ **Synthèse orale & Q&A** → `redaction/synthese_orale_greencity_tech.md`, `redaction/questions_sensibles_et_reponses.md`

**Le deck couvre les 5 parties :** Intro (1-3) · Partie 1 = Organisation (4-7) · Partie 2 = Technique (8-13) · Partie 3 = Qualité (14-16) · Partie 4 = Client (17-19) · Partie 5 = Inclusion (20-21) · Conclusion (22-23).

## 6. Ce qu'il te reste à faire

1. **Te réapproprier le contenu** : relis `redaction/synthese_orale…` (le fil rouge) puis les 5 parties.
2. **T'entraîner à l'oral** avec `redaction/notes-orales-script.md` (chrono ~18 min) puis les cue-cards.
3. **Anticiper les questions du jury** avec `redaction/questions_sensibles_et_reponses.md`.
4. **Vérifier les chiffres** que tu avances (budget projet ~120 k€ / ~4 mois · coûts/j par profil : dev 225 € / PO 250 € / DevOps 300 €, slides 7-8) pour être à l'aise si on te challenge.

> 💡 Fil rouge à garder en tête : *faire passer GreenCity Tech d'un prototype fragile à une plateforme fiable, industrialisée, sécurisée, observable et évolutive — sans surdimensionner l'équipe ni négliger l'humain.* En un mot : **livrer mieux, pas seulement plus vite.**
