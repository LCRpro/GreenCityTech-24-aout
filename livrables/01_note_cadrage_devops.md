# Note de cadrage DevOps

## Objet

Cette note de cadrage présente l'orientation DevOps retenue pour GreenCity Tech afin de transformer un prototype fragile en plateforme plus fiable, industrialisée et exploitable.

## Contexte

GreenCity Tech exploite une plateforme permettant aux citoyens de signaler des incidents urbains via :

- une application mobile Android/iOS ;
- un portail web citoyen ;
- une interface d'administration pour les services municipaux ;
- des API exposées aux collectivités partenaires.

Le contexte initial présente plusieurs fragilités :

- déploiements manuels ;
- absence de préproduction stable ;
- faible couverture de tests ;
- supervision insuffisante ;
- branches Git non standardisées ;
- demandes d'évolution nombreuses ;
- contraintes humaines et organisationnelles à intégrer.

## Objectifs

- industrialiser les livraisons ;
- réduire les régressions ;
- sécuriser les mises en production ;
- améliorer l'observabilité ;
- clarifier les rôles ;
- mieux piloter les évolutions produit ;
- rester réaliste sur les coûts et les compétences.

## Principes retenus

### Organisation

- 1 Product Owner ;
- 4 développeurs conservés ;
- 1 DevOps senior ;
- 1 montée en compétence progressive d'un développeur sur les sujets DevOps ;
- qualité portée collectivement par l'équipe.

### Hébergement et exploitation

- VPS ;
- Docker ;
- Docker Compose ;
- environnements `développement`, `préproduction`, `production`.

### Chaîne DevOps

- GitHub ;
- GitHub Actions ;
- pipeline CI/CD avec contrôles rapides, build, tests avancés, promotion et rollback ;
- stratégie Git simple avec `main`, `develop`, branches courtes et tags/releases.

### Qualité et sécurité

- ESLint ;
- Jest ;
- Cypress ;
- audit de dépendances ;
- scan d'images Docker ;
- GitHub Secrets ;
- Sentry ;
- Netdata ;
- UptimeRobot ou équivalent en supervision externe.

## Positionnement d'architecture

La cible retenue est volontairement sobre :

- pas de plateforme cloud complexe au démarrage ;
- pas de Kubernetes ;
- pas de QA dédié ;
- pas d'équipe DevOps complète.

Cette sobriété est défendue comme un arbitrage :

- meilleur ratio coût / maîtrise / fiabilité ;
- cohérence avec la taille de l'équipe ;
- montée en maturité progressive ;
- possibilité d'évolution ultérieure si la charge ou la complexité augmentent.

## Résultat attendu

À l'issue de la transformation initiale, GreenCity Tech doit disposer :

- d'une organisation plus claire ;
- d'une chaîne de livraison reproductible ;
- d'une préproduction stable ;
- d'une meilleure visibilité sur la qualité ;
- d'un cadre plus sain pour faire évoluer la plateforme.
