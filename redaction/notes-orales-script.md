# Script oral — GreenCity Tech (Liam Cariou)

> Présentation ~20 min · calée sur le deck de 24 slides · à dire au mot près ou à adapter.
>
> **Fil rouge** : faire passer GreenCity Tech d'un *prototype fragile* à une *plateforme fiable, industrialisée, sécurisée, observable et capable d'évoluer avec les collectivités — sans surdimensionner l'équipe ni négliger l'humain.*
>
> Posture : consultant DevOps **pragmatique** — pas de sur-ingénierie, chaque choix est assumé et défendable.

---

## Slide 1 — Couverture  ⏱️ ~30 s

Bonjour, je m'appelle Liam Cariou, en Master Lead Développeur Full Stack à la Normandie Web School.

Je vais vous présenter ma proposition d'organisation et de pilotage DevOps pour **GreenCity Tech**.

L'objectif : montrer comment on transforme un prototype fragile en une plateforme fiable et maîtrisée, de façon **progressive et réaliste**.

---

## Slide 2 — 01 · Introduction *(intercalaire)*  ⏱️ ~5 s

Commençons par le contexte : où en est le projet aujourd'hui, et ce qu'on cherche à obtenir.

---

## Slide 3 — Contexte  ⏱️ ~60 s

GreenCity Tech, c'est une application de **signalement citoyen** : plusieurs briques — app mobile, app web, API — développées rapidement sous forme de prototype.

Le problème n'est pas l'idée, elle est bonne. C'est que tout a été fait dans l'urgence : **pas d'automatisation, déploiements manuels, pas de tests, pas de monitoring, pas d'organisation projet**, et une communication difficile.

Mon rôle ici est celui d'un **consultant DevOps** : pas de tout réécrire, mais d'**industrialiser** l'existant.

Trois objectifs simples, qui sont le fil rouge de toute la suite : **mieux livrer, mieux exploiter, mieux piloter**.

---

## Slide 4 — 02 · Organisation & méthode projet *(intercalaire)*  ⏱️ ~5 s

Première brique, la fondation de tout le reste : l'organisation de l'équipe et la méthode de travail.

---

## Slide 5 — Organisation d'équipe  ⏱️ ~55 s

L'objectif : une équipe **plus structurée**, sans la gonfler artificiellement.

Côté **pilotage** : un Product Owner qui porte la vision, arbitre et protège l'équipe ; et un **DevOps senior** qui prend la CI/CD, le déploiement, les environnements et la supervision.

Côté **développement** : on **garde les 4 développeurs du prototype** — ils connaissent déjà l'existant — avec un Lead Developer qui coordonne et garantit la cohérence technique.

C'est un **arbitrage** assumé : une équipe resserrée au lancement, des coûts maîtrisés, et une montée en compétence progressive plutôt qu'un recrutement massif.

---

## Slide 6 — Méthode & rituels  ⏱️ ~50 s

Le cadre retenu, c'est de l'**agile pragmatique** : sprints de 2 semaines, backlog priorisé par le PO, un Kanban séparé pour les incidents, et des décisions tracées.

Pourquoi ce choix ? Parce que l'équipe est restreinte et le socle encore fragile : il faut **structurer sans alourdir**.

Concrètement : un point dev tous les 2 jours, un suivi hebdo, une démo et une rétro en fin de sprint, un pilotage mensuel avec les collectivités.

Résultat : des décisions plus rapides, moins de flou, une meilleure coordination et des livraisons plus fiables.

---

## Slide 7 — Arbitrages & budget  ⏱️ ~55 s

Sur le budget, je raisonne au niveau du **projet**, en ordres de grandeur assumés.

La phase de structuration, c'est environ **30 k€ par mois**, soit **~120 k€ sur ~4 mois**.

Le poste **RH pèse ~95 %**, avec des **coûts journaliers différenciés par profil** : de l'ordre de **225 €** pour un développeur, **250 €** pour le Product Owner, **300 €** pour le DevOps senior — le profil le plus cher. L'infra et les outils restent volontairement sobres.

Mes arbitrages : on capitalise sur l'équipe existante, on cible un DevOps senior, on garde une infra simple. Des ordres de grandeur, à affiner avec le contrôle de gestion.

---

## Slide 8 — Suivi budgétaire & maîtrise des écarts  ⏱️ ~50 s

Au-delà de l'estimation, l'essentiel c'est de **piloter le budget projet dans le temps**.

Je mets en place un **tableau de bord** alimenté en continu : prévu, consommé, reste à faire, **par poste** (RH, infrastructure, outils).

J'y suis les **écarts** entre le prévu et le réel, avec des **seuils d'alerte** : sous 5 %, sous contrôle ; entre 5 et 10 %, vigilance et analyse de cause ; au-delà de 10 %, alerte et action immédiate.

Un exemple concret : à mi-parcours, ~63 k€ consommés sur 120. L'infrastructure ressort à **+31 %** — un VPS ajouté — c'est typiquement l'écart qu'on détecte tôt.

En cas d'écart ou d'incident, le **plan d'action** est clair : analyse de cause, re-priorisation, réallocation, arbitrage — avec un **reporting mensuel au contrôle de gestion** et une alerte à la **direction financière** si on passe au rouge.

---

## Slide 9 — 03 · Mise en œuvre DevOps *(intercalaire)*  ⏱️ ~5 s

Passons au concret : comment on met en œuvre cette chaîne DevOps, techniquement.

---

## Slide 10 — Versioning & environnements  ⏱️ ~55 s

Côté **versioning**, une structure simple et lisible : une branche `main` de production, alimentée uniquement par des merges depuis `develop`.

`develop` sert à l'intégration des nouvelles fonctionnalités, et des branches courtes `feature/*`, `hotfix/*`, `doc/*` ont chacune un seul but.

Côté **environnements**, trois environnements séparés avec leurs propres règles :

- **production** — sensible, déploiement déclenché **manuellement** ;
- **préproduction** — la version candidate, accessible aux clients pour démo et recette ;
- **dev** — interne, en déploiement automatisé.

Chaque environnement a sa propre base isolée.

---

## Slide 11 — Architecture technique  ⏱️ ~50 s

L'architecture reste cohérente avec le produit : un **portail web citoyen** et une **app mobile** pour l'usage terrain, une **interface admin** pour le suivi municipal, et une **API partenaires** pour les échanges externes.

En dessous : une **base de données métier** commune mais isolée par environnement, un **stockage S3** pour les documents et photos.

Et **Docker** partout — sauf le mobile. Tout est dockerisé et versionné, ce qui simplifie le déploiement et facilite le rollback.

---

## Slide 12 — Supervision, observabilité & logs  ⏱️ ~55 s

La supervision est pensée en **niveaux distincts**, pour ne pas être aveugle en production.

**Netdata** surveille la santé des serveurs — hébergé sur un VPS séparé, pour ne pas tomber avec ce qu'il surveille. **UptimeRobot** vérifie la disponibilité depuis l'extérieur. **Sentry** remonte les erreurs applicatives. Et des **logs structurés** permettent de retracer un incident.

Le tout accompagné d'**alertes** en temps réel : disponibilité, temps de réponse, taux d'erreurs, charge serveur.

Et surtout, un **processus de gestion des incidents** clair : détection par alerte → qualification & priorité → résolution en astreinte → communication au PO et au client → **post-mortem** pour un correctif durable.

---

## Slide 13 — Architecture déploiement  ⏱️ ~55 s

Voici la vue d'ensemble. Le code part de **GitHub**, l'image est construite et poussée dans un **registry**, puis déployée sur le **VPS de production**.

Ce VPS héberge, en conteneurs Docker : le **frontend**, le **backend & API**, la **base de données**, **Traefik** en reverse-proxy, et un **Netdata child**.

Les documents partent vers le **bucket S3**, la base est **sauvegardée**, et la supervision est isolée sur un **VPS Monitoring** dédié.

Sur le schéma : les flèches en **pointillés** = le flux CI/CD et le monitoring ; les flèches **pleines** = les échanges internes.

---

## Slide 14 — Pipeline CI/CD  ⏱️ ~60 s

Le pipeline est organisé en **stages**, du plus rapide au plus coûteux, pour échouer vite.

**Stage 1 — contrôles rapides** : lint, typage, tests unitaires et d'intégration, audit des dépendances, scan de sécurité de l'image avec Trivy, check d'accessibilité.

**Stage 2 — build** de l'application et de l'image Docker. **Stage 3 — tests E2E** sur les parcours critiques.

**Stage 4 — déploiement** : automatique sur dev et préproduction, mais la **production reste en déclenchement manuel** — un garde-fou volontaire — suivi d'un smoke test.

Les secrets sont gérés via GitHub Secrets. Le mobile est plus difficile à automatiser, et on pourra renforcer l'outillage (SonarQube, cloud) si le projet grandit.

---

## Slide 15 — 04 · Qualité, conformité, sécurité *(intercalaire)*  ⏱️ ~5 s

Livrer vite ne suffit pas : il faut livrer **bien**. Parlons qualité, sécurité et conformité.

---

## Slide 16 — Qualité, sécurité & conformité  ⏱️ ~55 s

Sur la **qualité du code**, je définis clairement quand une fonctionnalité est « terminée » : code relu, tests exécutés, doc à jour, sécurité vérifiée, recette validée, déployable, revue avec le Lead Developer.

C'est notre **Definition of Done**, et elle aligne toute l'équipe.

Sur la **sécurité**, elle est intégrée dès le développement : audit des dépendances, scan Trivy, secrets protégés, bonnes pratiques OWASP, revues de code et veille.

Sur la **conformité**, le contexte des collectivités l'impose : **RGPD**, **RGAA** pour l'accessibilité, et conformité des stores pour le mobile.

---

## Slide 17 — Tests & conformité produit  ⏱️ ~55 s

La stratégie de tests est **réaliste** : unitaires et intégration sur toute la logique métier, E2E **uniquement sur les parcours critiques** — pas de 100 % de couverture inutile.

Mais surtout, je valide le produit **en situation réelle** : une **recette scénarisée en préproduction iso-prod**, des **tests de charge et de performance** sous trafic simulé, et des tests **sur devices réels** avec des jeux de données réalistes, avant chaque release.

Et je garantis la **conformité aux canaux de distribution** : côté mobile — pre-launch report de la Play Console, bêta TestFlight, guidelines Apple et Google, signatures et certificats ; côté web — performance, sécurité, RGAA et checklist avant publication.

L'accessibilité RGAA reste un point dur, imposé par le contexte des collectivités.

---

## Slide 18 — 05 · Gestion produit et relation client *(intercalaire)*  ⏱️ ~5 s

Une plateforme, ça vit : voyons comment on gère le produit et la relation avec les collectivités.

---

## Slide 19 — Gestion produit & évolutions  ⏱️ ~60 s

Chaque demande d'évolution passe par un **processus** clair : retour terrain → cadrage produit → analyse d'impact → arbitrage interne → puis roadmap, **ou report, ou refus**.

Pour prioriser, je regarde : la valeur métier pour plusieurs collectivités, l'effort, les risques (sécurité, RGPD), la capacité technique de l'équipe et le coût.

Trois exemples de demandes : la **cartographie temps réel** (fort intérêt mais gros impact perf), les **photos HD** (compression + attention RGPD), un **chatbot citoyen** (effet de mode IA à surveiller).

Le principe : une bonne idée doit être **cadrée**. Si c'est trop spécifique, trop coûteux ou trop risqué, on recadre, on reporte, ou on n'intègre pas.

---

## Slide 20 — Suivi, démonstrations et satisfaction  ⏱️ ~50 s

La relation client est **structurée autour d'un point d'entrée unique** : le Product Owner centralise les échanges, les développeurs ne sont pas sollicités directement, et les décisions sont tracées.

On fait des **points réguliers** avec les collectivités pilotes, une démo à chaque fin de cycle, un comité de pilotage mensuel pour les arbitrages.

La **préproduction** sert de validation explicite avant livraison, ce qui réduit les incompréhensions.

Et on suit quelques **indicateurs simples** : satisfaction, respect des délais, avancement de la roadmap, incidents bloquants, budget consommé.

---

## Slide 21 — 06 · Inclusion et management *(intercalaire)*  ⏱️ ~5 s

Dernier point, et pas le moindre : l'humain. Comment faire travailler l'équipe durablement.

---

## Slide 22 — Inclusion & management  ⏱️ ~55 s

Trois angles.

Sur la **charge cognitive** : des réunions courtes et préparées, chaque décision formalisée à l'écrit, un suivi asynchrone, des canaux clairs — les demandes client passent uniquement par le PO.

Sur le **handicap** : fournir le matériel adapté (écrans, souris ergonomique…) et des outils accessibles et configurables.

Sur l'**efficacité collective** : on suit le moral, la motivation et la vélocité de l'équipe, et on lit ces indicateurs **collectivement**, pour éviter toute discrimination individuelle.

Le point clé : l'inclusion n'est pas qu'une question éthique, elle **améliore aussi l'organisation** — moins d'interruptions, plus de temps sur la vraie valeur.

---

## Slide 23 — Conclusion  ⏱️ ~45 s

Pour résumer : GreenCity Tech peut passer d'un prototype fragile à une **plateforme multi-collectivités** plus fiable, plus lisible et plus soutenable.

**Mieux livrer** : équipe structurée, rôles clairs, versioning et pipeline CI/CD.

**Mieux exploiter** : environnements séparés, supervision, déploiements fiables, sécurité renforcée.

**Mieux piloter** : un PO comme point d'entrée, des demandes qualifiées, des arbitrages formalisés, un budget suivi et une roadmap partagée.

Le tout de façon **progressive, défendable et réaliste**. L'idée n'est pas de livrer seulement *plus vite*, mais de livrer **mieux**.

---

## Slide 24 — Merci  ⏱️ ~10 s

Merci de votre attention. Je suis à votre disposition pour vos questions.

---

### Repères de timing

- Bloc 1 *(slides 1-3)* : ~1 min 45
- Bloc Organisation & budget *(4-8)* : ~3 min 35
- Bloc Technique *(9-14)* : ~5 min 20
- Bloc Qualité & tests *(15-17)* : ~2 min 05
- Bloc Produit/Client *(18-20)* : ~2 min
- Bloc Humain *(21-22)* : ~1 min
- Conclusion *(23-24)* : ~1 min

**Total ≈ 17-19 min** de parole + respirations → ~20 min. Garde du temps pour les questions.

👉 Pour les questions du jury, appuie-toi sur **questions_sensibles_et_reponses.md** (pas de QA dédié, pas de Kubernetes, suivi budgétaire, tests en situation, etc.).
