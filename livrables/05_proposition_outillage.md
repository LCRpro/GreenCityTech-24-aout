# Proposition d'outillage

## Objectif

Présenter une stack outillage cohérente avec les contraintes de GreenCity Tech.

## Outils retenus

| Besoin | Outil retenu | Justification |
|---|---|---|
| Gestion de code | GitHub | centralisation, pull requests, protections de branches |
| CI/CD | GitHub Actions | cohérent avec GitHub, simple à déployer |
| Conteneurisation | Docker | standard d'exécution, reproductibilité |
| Déploiement | Docker Compose + SSH sécurisé | adapté à des VPS |
| Lint | ESLint | outillage simple et déjà envisagé |
| Tests unitaires | Jest | cohérent avec la stack retenue |
| Tests E2E web | Cypress | bon compromis simplicité / couverture |
| Tests API | Supertest ou Postman/Newman | validation du backend et des API |
| Audit dépendances | npm audit / Dependabot | détection des vulnérabilités connues |
| Scan image Docker | Trivy | sécurité de la chaîne de build |
| Secrets | GitHub Secrets | séparation claire des secrets |
| Supervision système | Netdata | rapide à mettre en place sur VPS |
| Disponibilité externe | UptimeRobot ou équivalent | vérification depuis Internet |
| Erreurs applicatives | Sentry | visibilité sur les erreurs réelles |
| Documentation API | Swagger / OpenAPI | utile pour les partenaires |

## Outils volontairement non retenus au démarrage

- Kubernetes ;
- stack d'observabilité complète type Prometheus + Grafana + Loki dès le départ ;
- automatisation mobile lourde ;
- QA spécialisé ;
- plateforme cloud complexe.

## Justification globale

La proposition d'outillage vise :

- la cohérence ;
- la simplicité d'adoption ;
- la maîtrise technique ;
- un coût d'exploitation modéré ;
- une trajectoire progressive.

Le bon critère n'est pas le nombre d'outils, mais le fait qu'ils répondent aux problèmes réels du projet.
