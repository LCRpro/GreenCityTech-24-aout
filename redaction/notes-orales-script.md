# Script oral — GreenCity Tech (Liam Cariou)

> Présentation ~20 min · calée sur le deck de 24 slides · à dire au mot près ou à adapter.
> **Fil rouge** : faire passer GreenCity Tech d'un *prototype fragile* à une *plateforme fiable, industrialisée, sécurisée, observable et capable d'évoluer avec les collectivités — sans surdimensionner l'équipe ni négliger l'humain.*
> Posture : consultant DevOps **pragmatique** (pas de sur-ingénierie, chaque choix est assumé et défendable).

---

## Slide 1 — Couverture  ⏱️ ~30 s
Bonjour, je m'appelle Liam Cariou, en Master Lead Développeur Full Stack à la Normandie Web School.
Je vais vous présenter ma proposition d'organisation et de pilotage DevOps pour **GreenCity Tech**.
L'objectif de cette présentation : montrer comment on transforme un prototype fragile en une plateforme fiable et maîtrisée, de façon **progressive et réaliste**.

## Slide 2 — 01 · Introduction (intercalaire)  ⏱️ ~5 s
Commençons par le contexte : où en est le projet aujourd'hui, et ce qu'on cherche à obtenir.

## Slide 3 — Contexte  ⏱️ ~60 s
GreenCity Tech, c'est une application de **signalement citoyen** : plusieurs briques — app mobile, app web, API — développées rapidement sous forme de prototype.
Le problème n'est pas l'idée, elle est bonne. Le problème, c'est que tout a été fait dans l'urgence : **pas d'automatisation, des déploiements manuels, pas de tests, pas de monitoring, pas d'organisation projet claire**, et une communication difficile.
Mon rôle ici est celui d'un **consultant DevOps** : pas de tout réécrire, mais d'**industrialiser** l'existant pour atteindre trois objectifs simples — **mieux livrer, mieux exploiter, mieux piloter**. C'est le fil rouge de toute la suite.

## Slide 4 — 02 · Organisation & méthode projet (intercalaire)  ⏱️ ~5 s
Première brique, la fondation de tout le reste : l'organisation de l'équipe et la méthode de travail.

## Slide 5 — Organisation d'équipe  ⏱️ ~55 s
L'objectif, c'est une équipe **plus structurée**, sans la gonfler artificiellement.
Côté **pilotage** : un Product Owner qui porte la vision, arbitre et protège l'équipe ; et un **DevOps senior** qui prend la CI/CD, le déploiement, les environnements et la supervision.
Côté **développement** : on **garde les 4 développeurs du prototype** — ils connaissent déjà l'existant — avec un Lead Developer qui coordonne et garantit la cohérence technique.
C'est un choix d'**arbitrage** assumé : une équipe resserrée au lancement, une maîtrise des coûts, et une montée en compétence progressive sur les sujets DevOps plutôt qu'un recrutement massif.

## Slide 6 — Méthode & rituels  ⏱️ ~50 s
Le cadre retenu, c'est de l'**agile pragmatique** : des sprints de 2 semaines, un backlog priorisé par le PO, un Kanban séparé pour les incidents et les urgences, et des décisions tracées.
Pourquoi ce choix ? Parce que l'équipe est restreinte et le socle encore fragile : il faut **structurer sans alourdir**.
Concrètement : un point dev tous les 2 jours pour lever les blocages, un suivi hebdo, une démo client et une rétro en fin de sprint, et un pilotage mensuel avec les collectivités. Résultat : des décisions plus rapides, moins de flou, une meilleure coordination et des livraisons plus fiables.

## Slide 7 — Arbitrages & budget  ⏱️ ~55 s
Sur le budget, je raisonne au niveau du **projet**, en ordres de grandeur assumés. La phase de structuration, c'est de l'ordre de **30 k€ par mois**, soit environ **120 k€ sur ~4 mois**. Le poste **RH — l'équipe — pèse à lui seul ~95 %**, soit un **coût journalier moyen d'environ 240 € par personne** ; l'infrastructure et les outils sont volontairement sobres, quelques centaines d'euros par mois.
Ma prestation DevOps de cadrage — 13 jours, ~8,45 k€ — est une **ligne à l'intérieur de ce budget**, pas le budget total.
Les arbitrages sont ciblés : on capitalise sur l'équipe existante, on renforce la gestion de projet et le DevOps senior, on reste sur une infra simple. Ces montants sont des ordres de grandeur, à affiner avec le contrôle de gestion.

## Slide 8 — Suivi budgétaire & maîtrise des écarts  ⏱️ ~50 s
Au-delà de l'estimation, l'essentiel c'est de **piloter le budget projet dans le temps**. Je mets en place un **tableau de bord** alimenté en continu : prévu, consommé, reste à faire, **par poste** (RH, infrastructure, outils).
J'y suis les **écarts** entre le prévu et le réel, avec des **seuils d'alerte** : sous 5 %, c'est sous contrôle ; entre 5 et 10 %, je surveille et j'analyse la cause ; au-delà de 10 %, c'est une alerte qui déclenche une action immédiate.
Un exemple concret : à mi-parcours, ~63 k€ consommés sur 120 ; l'infrastructure ressort à **+31 %** parce qu'on a ajouté un VPS — c'est exactement le type d'écart qu'on détecte tôt et qu'on arbitre.
En cas d'écart ou d'incident budgétaire, le **plan d'action** est clair : analyse de cause, re-priorisation du backlog, réallocation, arbitrage avec le PO et la direction — avec un **reporting mensuel au contrôle de gestion** et une alerte immédiate à la **direction financière** si on passe au rouge. L'idée : rester **maître** du budget, pas seulement l'estimer.

## Slide 9 — 03 · Mise en œuvre DevOps (intercalaire)  ⏱️ ~5 s
Passons au concret : comment on met en œuvre cette chaîne DevOps, techniquement.

## Slide 10 — Versioning & environnements  ⏱️ ~55 s
Côté **versioning**, une structure simple et lisible : une branche `main` de production, alimentée uniquement par des merges depuis `develop` ; `develop` pour l'intégration des nouvelles fonctionnalités ; et des branches courtes `feature/*`, `hotfix/*`, `doc/*`, chacune avec un seul but.
Côté **environnements**, trois environnements séparés avec leurs propres règles : **production**, sensible, où le déploiement n'est déclenché que **manuellement** ; **préproduction**, la version candidate, accessible aux clients pour la démo et la recette ; et **dev**, interne, en déploiement automatisé. Chaque environnement a sa propre base isolée.

## Slide 11 — Architecture technique  ⏱️ ~50 s
L'architecture reste cohérente avec le produit : un **portail web citoyen** et une **app mobile** pour l'usage terrain, une **interface admin** pour le suivi municipal et le traitement des incidents, et une **API partenaires** pour les échanges externes et les extensions futures.
En dessous : une **base de données métier** commune mais isolée par environnement, un **stockage S3** pour les documents et photos, et **Docker** partout — sauf le mobile. Tout est dockerisé et versionné, ce qui simplifie le déploiement et facilite le rollback.

## Slide 12 — Supervision & logs  ⏱️ ~55 s
La supervision est pensée en **niveaux distincts**, pour ne pas être aveugle en production.
**Netdata** surveille la santé des serveurs — et il est hébergé sur un VPS séparé, pour ne pas tomber en même temps que ce qu'il surveille. **UptimeRobot** vérifie la disponibilité réelle depuis l'extérieur. **Sentry** remonte les erreurs applicatives. Et des **logs structurés** — horodatés, avec niveaux et suivi par ID — permettent de retracer un incident.
Le tout est accompagné d'**alertes**, pour suivre en temps réel la disponibilité, les temps de réponse, le taux d'erreurs et la charge serveur.
Et surtout, un **processus de gestion des incidents** clair : détection par alerte, qualification et priorisation, résolution en astreinte, communication au PO et au client, puis **post-mortem (REX)** pour éviter que ça se reproduise.

## Slide 13 — Architecture déploiement  ⏱️ ~55 s
Voici la vue d'ensemble du déploiement. Le code part de **GitHub**, l'image est construite et poussée dans un **registry**, puis déployée sur le **VPS de production**.
Ce VPS héberge, dans des conteneurs Docker : le **frontend** (Portail Web), le **backend & API**, la **base de données**, **Traefik** en reverse-proxy, et un **Netdata child**. Les documents partent vers le **bucket S3**, et la base est **sauvegardée** régulièrement.
La supervision est isolée sur un **VPS Monitoring** dédié, et UptimeRobot teste le service depuis l'extérieur. Les flèches en pointillés, c'est le flux CI/CD et le monitoring ; les flèches pleines, les échanges internes.

## Slide 14 — Pipeline CI/CD  ⏱️ ~60 s
Le pipeline est organisé en **stages**, du plus rapide au plus coûteux, pour échouer vite.
**Stage 1 — contrôles rapides** : lint, typage, tests unitaires et d'intégration, audit des dépendances, scan de sécurité de l'image avec Trivy, et un check d'accessibilité.
**Stage 2 — build** de l'application et de l'image Docker. **Stage 3 — tests E2E** sur les parcours critiques.
**Stage 4 — déploiement** : automatique sur dev et préproduction, mais la **production reste en déclenchement manuel** — c'est un garde-fou volontaire — suivi d'un smoke test.
Les secrets sont gérés via GitHub Secrets. Le mobile est plus difficile à automatiser, et on pourra renforcer l'outillage (SonarQube, cloud) si le projet grandit.

## Slide 15 — 04 · Qualité, conformité, sécurité (intercalaire)  ⏱️ ~5 s
Livrer vite ne suffit pas : il faut livrer **bien**. Parlons qualité, sécurité et conformité.

## Slide 16 — Qualité, sécurité & conformité  ⏱️ ~55 s
Sur la **qualité du code**, on définit clairement quand une fonctionnalité est « terminée » : code relu et fonctionnel, tests exécutés, doc à jour, sécurité vérifiée, critères de recette validés, déployable, et revue avec le Lead Developer. C'est notre **Definition of Done**, et elle aligne toute l'équipe.
Sur la **sécurité**, elle est intégrée dès le développement : audit des dépendances, scan Trivy, secrets protégés, bonnes pratiques OWASP, revues de code et veille.
Sur la **conformité**, le contexte des collectivités l'impose : **RGPD**, **RGAA** pour l'accessibilité, et conformité des stores pour le mobile.

## Slide 17 — Tests & conformité produit  ⏱️ ~55 s
La stratégie de tests est **réaliste** : unitaires et intégration sur toute la logique métier, E2E **uniquement sur les parcours critiques** — pas de 100 % de couverture inutile.
Mais surtout, je valide le produit **en situation réelle** : une **recette scénarisée en préproduction iso-prod**, des **tests de charge et de performance** sous trafic simulé, et des tests **sur devices réels** avec des jeux de données réalistes, avant chaque release.
Et je garantis la **conformité aux canaux de distribution** : côté mobile, le pre-launch report de la Play Console, la bêta TestFlight, les guidelines techniques Apple et Google, les signatures et certificats ; côté web, performance, sécurité et RGAA, avec une checklist avant publication. L'accessibilité RGAA reste un point dur, imposé par le contexte des collectivités.

## Slide 18 — 05 · Gestion produit et relation client (intercalaire)  ⏱️ ~5 s
Une plateforme, ça vit : voyons comment on gère le produit et la relation avec les collectivités.

## Slide 19 — Gestion produit & évolutions  ⏱️ ~60 s
Chaque demande d'évolution passe par un **processus** clair : retour terrain, cadrage produit, analyse d'impact, arbitrage interne, puis roadmap — **ou report, ou refus**.
Pour prioriser, on regarde : la valeur métier pour plusieurs collectivités, l'effort, les risques (sécurité, RGPD), la capacité technique de l'équipe et le coût.
Trois exemples de demandes : la **cartographie temps réel** (fort intérêt mais gros impact perf, via WebSocket), les **photos HD** (avec compression et attention RGPD), et un **chatbot citoyen** (cadrage fort, effet de mode IA à surveiller).
Le principe : une bonne idée doit être **cadrée**. Si c'est trop spécifique, trop coûteux ou trop risqué, on recadre, on reporte, ou on n'intègre pas.

## Slide 20 — Suivi, démonstrations et satisfaction  ⏱️ ~50 s
La relation client est **structurée autour d'un point d'entrée unique** : le Product Owner centralise les échanges, les développeurs ne sont pas sollicités directement, et les décisions sont tracées.
On fait des **points réguliers** avec les collectivités pilotes, une démo à chaque fin de cycle important, et un comité de pilotage mensuel pour les arbitrages.
La **préproduction** sert de validation explicite avant livraison, ce qui réduit les incompréhensions.
Et on suit quelques **indicateurs simples** : satisfaction, respect des délais, avancement de la roadmap, incidents bloquants et budget consommé.

## Slide 21 — 06 · Inclusion et management (intercalaire)  ⏱️ ~5 s
Dernier point, et pas le moindre : l'humain. Comment on fait travailler l'équipe durablement.

## Slide 22 — Inclusion & management  ⏱️ ~55 s
Trois angles. Sur la **charge cognitive** : des réunions courtes et préparées, chaque décision formalisée à l'écrit, un suivi asynchrone, des canaux clairs — les demandes client passent uniquement par le PO — et un découpage des tâches lisible.
Sur le **handicap** : fournir le matériel adapté (écrans, souris ergonomique…) et des outils accessibles et configurables.
Sur l'**efficacité collective** : on suit le moral, la motivation et la vélocité de l'équipe, et on lit ces indicateurs **collectivement**, pour éviter toute discrimination individuelle.
Le point clé : l'inclusion n'est pas seulement une question éthique, elle **améliore aussi l'organisation** — moins d'interruptions, plus de temps sur la vraie valeur.

## Slide 23 — Conclusion  ⏱️ ~45 s
Pour résumer : GreenCity Tech peut passer d'un prototype fragile à une **plateforme multi-collectivités** plus fiable, plus lisible et plus soutenable.
**Mieux livrer** : équipe structurée, rôles clairs, versioning et pipeline CI/CD.
**Mieux exploiter** : environnements séparés, supervision, déploiements fiables, sécurité renforcée.
**Mieux piloter** : un PO comme point d'entrée, des demandes qualifiées, des arbitrages formalisés et une roadmap partagée.
Le tout de façon **progressive, défendable et réaliste** par rapport à la taille de l'équipe. L'idée n'est pas de livrer seulement *plus vite*, mais de livrer **mieux**.

## Slide 24 — Merci  ⏱️ ~10 s
Merci de votre attention. Je suis à votre disposition pour vos questions.

---

### Repères de timing
- Bloc 1 (slides 1-3) : ~1 min 45
- Bloc Organisation & budget (4-8) : ~3 min 35
- Bloc Technique (9-14) : ~5 min 20
- Bloc Qualité & tests (15-17) : ~2 min 05
- Bloc Produit/Client (18-20) : ~2 min
- Bloc Humain (21-22) : ~1 min
- Conclusion (23-24) : ~1 min
- **Total ≈ 17-19 min** de parole + marge pour les respirations → ~20 min. Garde du temps pour les questions.

👉 Pour les questions du jury, appuie-toi sur **../redaction/questions_sensibles_et_reponses.md** (pourquoi pas de QA dédié, pas de Kubernetes, VPS + Docker, etc.).
