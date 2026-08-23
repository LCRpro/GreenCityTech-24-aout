# Cue-cards — GreenCity Tech (Liam Cariou)

> Antisèche : 3-5 puces par slide, juste les points à ne pas oublier.
> **Fil rouge** : prototype fragile → plateforme fiable, industrialisée, sécurisée, observable, évolutive — sans surdimensionner l'équipe.
> **Mantra de fin** : « livrer mieux, pas seulement plus vite ».

---

**1 · Couverture**
- Se présenter : Liam Cariou, Master Lead Dev Full Stack, NWS.
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
- Exemples : carto temps réel (WebSocket), photos HD (RGPD), chatbot (effet de mode).
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
- **Pas assez de collectivités ?** → dimensionné sobre (point mort bas) · plateforme **multi-collectivités** (coût marginal faible) · **jalons go/no-go** pour réduire la voilure · suivi revenus vs budget avec la direction financière.
- **Budget dépassé ?** → détecté tôt (seuils) → analyse cause → **re-prioriser / réallouer / ajuster le périmètre** (protéger le « must have ») / arbitrer ; si structurel → réviser le plan avec la direction.
