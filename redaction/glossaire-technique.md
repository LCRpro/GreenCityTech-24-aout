# 📖 Glossaire technique & outils

> Les termes et outils cités dans la présentation, expliqués simplement — pour comprendre et **défendre** chaque choix à l'oral.

## DevOps & CI/CD

- **DevOps** — culture + pratiques qui rapprochent le développement (*Dev*) et l'exploitation (*Ops*) pour livrer plus vite **et** plus fiablement.
- **CI/CD** — *Intégration Continue / Déploiement Continu* : automatiser le build, les tests et la mise en production.
- **Pipeline** — la suite d'étapes automatisées déclenchées à chaque `push`.
- **Stage** — une étape du pipeline (contrôles, build, tests, déploiement…).
- **Lint** — analyse automatique du code (style, erreurs de syntaxe).
- **Build** — compilation/assemblage de l'application prête à déployer.
- **Infrastructure as Code (IaC)** — décrire l'infrastructure dans des fichiers versionnés → reproductible et traçable.
- **Rollback** — revenir à la version précédente en cas de problème.
- **Smoke test** — test rapide après déploiement pour vérifier que l'essentiel fonctionne.
- **GitHub Actions** — l'outil de CI/CD intégré à GitHub. **GitHub Secrets** — stockage sécurisé des clés/mots de passe pour le pipeline.

## Conteneurs & déploiement

- **Docker** — empaquette une app + ses dépendances dans un **conteneur** (tourne pareil partout).
- **Image / Conteneur** — l'*image* est le modèle figé ; le *conteneur* est une instance qui tourne.
- **Docker Compose** — décrit et lance plusieurs conteneurs ensemble.
- **Registry** — dépôt d'images Docker versionnées.
- **VPS** — *Virtual Private Server* : serveur virtuel loué.
- **Traefik** — *reverse-proxy* : aiguille le trafic vers les bons services et gère le HTTPS.
- **Bucket S3** — stockage d'objets (fichiers, photos) dans le cloud.

## Git & environnements

- **main / develop / feature** — branches Git : production / intégration / fonctionnalité en cours.
- **Environnement** — instance isolée : **dev**, **préproduction**, **production**.
- **Préproduction iso-prod** — un environnement **identique à la prod** pour valider avant de livrer.

## Tests

- **Test unitaire** — teste une fonction isolée.
- **Test d'intégration** — teste plusieurs composants ensemble.
- **Test E2E** (*end-to-end*) — simule un **parcours utilisateur complet**.
- **Jest** — framework de tests JavaScript (unitaires/intégration).
- **Cypress** — outil de tests E2E dans le navigateur.
- **Test de charge / performance** — vérifie le comportement sous **fort trafic**.
- **Recette** — validation fonctionnelle avant mise en production.
- **TestFlight** — plateforme Apple pour distribuer une **bêta iOS**.
- **Pre-launch report (Play Console)** — rapport automatique de Google qui teste l'app Android sur de **vrais appareils** avant publication.
- **Devices réels** — vrais téléphones/tablettes (≠ émulateurs).

## Supervision & observabilité

- **Supervision / Monitoring** — surveiller l'état des serveurs et services.
- **Observabilité** — comprendre l'état interne d'un système via ses données (métriques, logs, traces).
- **Netdata** — monitoring **temps réel** de la santé des serveurs (CPU, RAM, disque…).
- **UptimeRobot** — vérifie la **disponibilité** d'un site depuis l'extérieur.
- **Sentry** — remonte les **erreurs applicatives** (exceptions, fréquence).
- **Logs structurés** — journaux formatés (horodatage, niveau, ID) faciles à analyser.
- **Alerting** — notifications automatiques quand un seuil est dépassé.
- **Astreinte** — la personne prête à intervenir en cas d'incident.
- **Post-mortem / REX** — analyse après incident (*Retour d'EXpérience*) pour éviter la récidive.

## Qualité, sécurité, conformité

- **Definition of Done (DoD)** — les critères qui définissent quand une tâche est **vraiment terminée**.
- **Trivy** — scanner de **vulnérabilités** pour images Docker et dépendances.
- **OWASP** — référentiel des principales failles de sécurité web + bonnes pratiques.
- **Audit de dépendances** — vérifier les failles connues des librairies utilisées.
- **RGPD** — règlement européen sur la **protection des données personnelles**.
- **RGAA / WCAG** — référentiels d'**accessibilité** numérique (RGAA = français, WCAG = international).

## Produit & gestion de projet

- **Backlog** — la liste **priorisée** des tâches/fonctionnalités à faire.
- **Sprint** — un cycle de travail court (ici 2 semaines).
- **Kanban** — tableau visuel de suivi des tâches (utile pour les incidents/urgences).
- **Product Owner (PO)** — porte la vision produit, priorise, fait le lien avec le client.
- **Roadmap** — le plan des évolutions dans le temps.
- **MoSCoW / « must-have »** — méthode de priorisation (*Must / Should / Could / Won't*).
- **WebSocket** — connexion **temps réel** bidirectionnelle (ex. carte live).
- **API** — interface qui permet à des applications de communiquer.

## Budget & pilotage

- **TJM** (*Taux Journalier Moyen*) — tarif **facturé** par jour pour un profil (modèle prestation).
- **Coût journalier chargé** — coût **réel** d'un salarié par jour (salaire + charges). ≠ TJM (qui inclut une marge).
- **Écart budgétaire** — la différence entre le prévu et le réel.
- **Burn rate** — la vitesse de consommation du budget.
- **Contrôle de gestion / direction financière** — suivent et arbitrent les budgets.
- **Point mort** (*break-even*) — le seuil où les revenus couvrent les coûts.
- **Coût marginal** — le coût d'un client/d'une unité supplémentaire.
- **Multi-collectivités** — un seul socle logiciel sert plusieurs clients (mutualisation → coût marginal faible).
