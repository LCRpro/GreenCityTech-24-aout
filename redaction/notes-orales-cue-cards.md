# Cue-cards — GreenCity Tech (Liam Cariou)

> Antisèche : 3-5 puces par slide, juste les points à ne pas oublier.
> **Fil rouge** : prototype fragile → plateforme fiable, industrialisée, sécurisée, observable, évolutive — sans surdimensionner l'équipe.
> **Mantra de fin** : « livrer mieux, pas seulement plus vite ».

---

**1 · Couverture**
- Se présenter : Liam Cariou, Master Manager de l'ingénierie numérique, NWS.
- Sujet : organisation & pilotage DevOps de GreenCity Tech.
- Angle : prototype → plateforme, progressif & réaliste.

**2 · Intro (intercalaire)** → « le contexte et l'objectif ».

**3 · Contexte**
- App de signalement citoyen (mobile + web + API), faite dans l'urgence.
- Manques : pas d'auto, déploiements manuels, pas de tests/monitoring/orga.
- Mon rôle : consultant DevOps → industrialiser, pas tout réécrire.
- 3 objectifs : **mieux livrer / mieux exploiter / mieux piloter**.

**4 · Organisation & méthode (intercalaire)** → « la fondation : équipe + méthode ».

**5 · Organisation d'équipe**
- Pilotage : PO (vision/arbitrage) + DevOps senior (CI/CD, envs, supervision).
- Dev : **garder les 4 devs** du prototype + Lead Developer.
- Arbitrage assumé : équipe resserrée, coûts maîtrisés, montée en compétence.

**6 · Méthode & rituels**
- Agile pragmatique : sprints 2 sem., backlog PO, Kanban incidents.
- « Structurer sans alourdir » (équipe petite, socle fragile).
- Rituels : point dev /2j, suivi hebdo, démo + rétro, pilotage mensuel.

**7 · Arbitrages & budget**
- **Budget projet** (ordres de grandeur) : ~30 k€/mois → **~120 k€ sur ~4 mois**.
- RH ~95 %, **coûts/j différenciés** : dev ~225 € · PO ~250 € · DevOps senior ~300 €.
- Arbitrages : capitaliser sur l'équipe, DevOps senior, infra simple, pas de QA dédié.
- (Chiffrage → le **pilotage** vient juste après, slide 8.)

**8 · Suivi budgétaire & maîtrise des écarts**
- Tableau de bord **projet** : prévu / consommé / reste, **par poste** (RH, infra, outils).
- Ex. à mi-parcours : 63 k€ / 120 ; **infra +31 %** (VPS ajouté) = écart détecté.
- Seuils : 🟢 < 5 % · 🟠 5-10 % · 🔴 > 10 %. Plan : analyse cause → réallocation/arbitrage → **reporting contrôle de gestion + alerte direction financière**.

**9 · Mise en œuvre DevOps (intercalaire)** → « place au concret technique ».

**10 · Versioning & environnements**
- `main` (prod, via merge) ← `develop` (intégration) ← `feature/hotfix/doc`.
- 3 envs : **prod** (déploiement manuel), **préprod** (recette client), **dev** (auto).
- Bases isolées par environnement.

**11 · Architecture technique**
- Portail web + app mobile (citoyens), interface admin (mairie), API partenaires.
- BDD métier isolée + stockage S3 + **Docker partout** (sauf mobile).
- Images versionnées → rollback facile.

**12 · Supervision & logs**
- Niveaux distincts : **Netdata** (serveurs, sur VPS séparé), **UptimeRobot** (externe), **Sentry** (erreurs appli), **logs structurés**.
- Alertes temps réel : dispo, temps de réponse, erreurs, charge.
- **Gestion d'incident** : détection → priorité → résolution (astreinte) → communication → **post-mortem (REX)**.

**13 · Architecture déploiement**
- GitHub → registry → **VPS Production** (Docker : front, back/API, BDD, Traefik, Netdata child).
- Bucket S3 + backup BDD ; **VPS Monitoring** dédié ; UptimeRobot externe.
- Pointillés = flux CI/CD & monitoring · pleines = échanges internes.

**14 · Pipeline CI/CD**
- Stages, du + rapide au + coûteux (échouer vite).
- S1 contrôles (lint, types, tests, audit deps, Trivy, a11y) · S2 build · S3 E2E · S4 déploiement.
- **Prod = déclenchement MANUEL** (garde-fou) + smoke test. Secrets = GitHub Secrets.

**15 · Qualité/conformité/sécurité (intercalaire)** → « livrer bien, pas juste vite ».

**16 · Qualité, sécurité & conformité**
- **Definition of Done** : relu, testé, documenté, sécurisé, recette OK, déployable, revue Lead.
- Sécu intégrée : audit deps, Trivy, secrets, OWASP, revues, veille.
- Conformité collectivités : **RGPD**, **RGAA**, stores mobile.

**17 · Tests & conformité produit**
- Unit + intégration (logique métier) ; E2E **parcours critiques** ; pas de 100 % inutile.
- **Tests en situation** : recette préprod iso-prod, **charge/perf**, **devices réels**, avant chaque release.
- **Conformité stores** : pre-launch report Play Console, TestFlight, guidelines Apple/Google, signatures ; Web : perf/sécu/**RGAA** + checklist.
- A11y : scans auto **+ audit humain RGAA** (obligation collectivités).

**18 · Gestion produit / relation client (intercalaire)** → « la plateforme vit ».

**19 · Gestion produit & évolutions**
- Process : retour terrain → cadrage → analyse d'impact → arbitrage → roadmap/report/refus.
- Priorisation : valeur multi-collectivités, effort, risques, capacité, coût.
- Les 3 demandes = les 3 issues : **carto temps réel → ROADMAP** (refresh 30 s d'abord, WebSocket au lot suivant) · **photos HD → INTÉGRÉ** (compression + taille limitée + durée de conservation RGPD) · **chatbot → REPORTÉ** (valeur incertaine, coût récurrent, RGPD → une **FAQ dynamique** suffit).
- « Une bonne idée doit être **cadrée** ».

**20 · Suivi, démonstrations & satisfaction**
- **Point d'entrée unique = le PO** ; devs non sollicités ; décisions tracées.
- Points réguliers, démo par cycle, COPIL mensuel.
- Préprod = validation avant livraison. Indicateurs simples (satisf, délais, roadmap, incidents, budget).

**21 · Inclusion et management (intercalaire)** → « l'humain, pour durer ».

**22 · Inclusion & management**
- Charge cognitive : réunions courtes/préparées, écrit, async, canaux clairs (via PO).
- Handicap : matériel adapté, outils accessibles/configurables.
- Efficacité collective : suivi moral/motivation/vélocité, lecture **collective**.
- Clé : l'inclusion **améliore aussi l'organisation**.

**23 · Conclusion**
- Prototype → plateforme multi-collectivités fiable/lisible/soutenable.
- **Mieux livrer** (équipe, versioning, CI/CD) · **Mieux exploiter** (envs, supervision, sécu) · **Mieux piloter** (PO, arbitrages, roadmap).
- Progressif, défendable, réaliste. → « livrer **mieux** ».

**24 · Merci** → remercier + ouvrir les questions.

---

### Réflexes Q&A (voir ../redaction/questions_sensibles_et_reponses.md)
- **Pas de QA dédié ?** → trop tôt vu la taille ; qualité portée par DoD, revues, tests auto, recette. QA possible plus tard.
- **Pas de Kubernetes / cloud managé ?** → complexité prématurée ; VPS + Docker = sobre, économique, maîtrisé. Évolution possible si la charge l'exige.
- **Garder les 4 devs ?** → ils connaissent l'existant ; on structure le fonctionnement, on ne reconstruit pas l'équipe.
- **Prod manuelle ?** → choix volontaire : garde-fou sur l'environnement sensible.
- **Suivi budgétaire concret ?** → tableau de bord prévu/consommé par poste, seuils d'écart (5/10 %), reporting mensuel au contrôle de gestion, alerte direction financière au rouge.
- **Plan d'action en cas d'incident ?** → détection (alerte) → priorité → résolution (astreinte) → communication → post-mortem. Côté budget : analyse de cause → re-priorisation / réallocation / arbitrage.
- **Tests « en situation » ?** → recette préprod iso-prod, tests de charge/perf, devices réels ; conformité stores (pre-launch report, TestFlight, guidelines) avant publication.
- **Où sont les BDD ?** → **une par environnement, sur son propre VPS** (prod sur VPS prod, etc.) → isolation totale ; données réelles jamais en dev (sinon **anonymisées**). 1re évolution = sortir la BDD de prod sur son serveur.
- **Où vont les sauvegardes ?** → **JAMAIS sur le serveur sauvegardé** (VPS perdu/ransomware = base + copie perdues). Dump quotidien **chiffré + externalisé**, rétention quotidien→hebdo. Et **test de restauration** régulier (« une sauvegarde jamais restaurée n'est pas une sauvegarde »).
- **Un seul S3 pour tous les envs ?** → **Non** : **un bucket par environnement**. ① technique : un script en dev pourrait écraser des fichiers de prod · ② **RGPD** : photos = données perso (visages, plaques) → jamais accessibles depuis dev. Clés d'accès distinctes par env.
- **Quelle stack ?** → **TypeScript partout** : **React** (portail + admin), **React Native** (mobile), **Node.js** (back/API), **PostgreSQL + PostGIS** (géoloc des signalements). ⚠️ « Ce n'est pas un choix que j'impose, **c'est l'existant que je consolide** » — on n'a pas à réécrire le prototype. Atout : **un seul langage** → les 4 devs interviennent partout, outillage unique sur toute la chaîne.
- **Pourquoi Postgres et pas MySQL ?** → **PostGIS** ! App de signalement **géolocalisé** → « signalements dans un rayon de 500 m », index spatiaux, regroupement sur carte. MySQL = fonctions spatiales bien plus limitées. + **JSONB** (métadonnées variables indexables), robustesse SQL, **licence 100 % open source** (MySQL = Oracle). Nuance : « MySQL n'est pas mauvais, c'est le **besoin géo** qui tranche — et si le prototype est en MySQL, je ne migre pas par principe. »
- **Combien d'applis ?** → **3 interfaces + 1 backend** : portail citoyen (React) · mobile (React Native) · admin (React) · API (Node.js). **Portail ≠ admin** car publics différents + **l'admin n'est pas exposée publiquement** + déploiements indépendants. Mutualisé entre web et mobile : **logique métier, types TS, appels API** (l'UI diffère).
- **Un ou plusieurs dépôts ?** → **Monorepo** (1 dépôt, 1 dossier par app + dossier partagé types/logique). Pourquoi : ajouter un champ = **1 seule PR cohérente** au lieu de 4 à synchroniser ; plus simple pour 4 devs. Contrepartie assumée : **filtres par chemin** dans le pipeline (si seule l'API change → on ne redéploie que l'API).
- **Comment ça se déploie sur le VPS ?** → **Web** (portail + admin + API) = **dockerisé** → image par app → registry → **Docker Compose** sur le VPS ; **Traefik** aiguille par domaine (admin sur sous-domaine restreint). **Mobile = PAS sur le VPS** → **stores** (TestFlight / Play Console) + **validation Apple/Google** (heures→jours). ⚠️ Conséquence : web corrigé en 1 h, mobile non → **l'API doit rester compatible avec les anciennes versions de l'app**.
- **Outils du pipeline ?** → **GitHub Actions** · lint **ESLint/Prettier** · typage **TypeScript** · tests **Jest** · E2E **Cypress** · deps **npm audit + Dependabot** · image **Trivy** · a11y **axe-core/Lighthouse** · build **Docker** + **Docker Compose**. Standards, gratuits, sans coût de licence. Plus tard : **SonarQube**, **Fastlane** (mobile).
- **Si le moral ne remonte pas pour qqn ?** → ① **entretien individuel** (écouter, sans juger, jamais en public) · ② **agir sur mon périmètre** (charge, tâches, horaires, télétravail, matériel) · ③ **passer la main** : RH, **médecine du travail**, référent handicap → aménagement de poste, RQTH **avec son accord**, temps partiel thérapeutique. Principes : **ne pas laisser s'installer** · tracer **les actions, pas la santé** · indicateurs **collectifs** (non-discrimination). « Un manager n'est ni médecin ni psychologue. »
- **Pas assez de collectivités ?** → point mort ≈ **40 clients** (30 k€/mois ÷ ~600 €). À 6 mois : **≥8** on continue · **3-7** on allonge la phase (DevOps à temps partiel, évolutions repoussées) · **≤2** go/no-go → réduire au socle, viser les intercommunalités ou arrêt maîtrisé. Amortisseurs : multi-collectivités (coût marginal faible) + socle réutilisable.
- **Budget dépassé ?** → chaque seuil a **une action + un décideur** : **<5 %** moi (suivi) · **5-10 %** moi+PO (analyse 48 h, re-priorisation du sprint) · **>10 %** direction+DAF (2-3 options chiffrées). Leviers dans l'ordre : **1) réallouer entre postes · 2) réduire le périmètre** (protéger le must-have) **· 3) étaler dans le temps · 4) rallonge** (dernier recours, si justifiée par de la valeur). Distinguer **ponctuel** (on résorbe) et **structurel** (on révise le plan).
- **Et à 100 collectivités ? Plusieurs VPS ?** → **oui, en 3 étapes** : ① **agrandir** le VPS (simple, mais si il tombe tout tombe) → ② **séparer la BDD** sur son VPS (elle sature en premier) *« on sépare la salle de la cuisine »* + photos sur S3/CDN → ③ **dupliquer** l'applicatif en 2-3 VPS identiques + **load balancer** devant *« le maître d'hôtel répartit les clients »* = plus de coupure si un tombe. Possible **grâce à Docker**. Parc : 1 → +1 BDD → 2-3 + LB → orchestré (60-100+).
  ↳ Goulot réel à 100 = **humain, pas technique** → **onboarding self-service** dès ~30 · **cloisonnement des données dès le départ** (non rattrapable) · passage aux **SLA** + astreinte. Et j'assume de **ne pas le construire aujourd'hui** : l'archi actuelle ne bloque aucune étape.
