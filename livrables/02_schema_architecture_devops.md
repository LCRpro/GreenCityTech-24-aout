# Schéma d'architecture DevOps cible

## Objectif

Décrire l'architecture DevOps cible de GreenCity Tech de façon simple, lisible et cohérente avec la maturité actuelle du projet.

## Vue fonctionnelle

La plateforme s'appuie sur quatre blocs principaux :

- application mobile citoyenne ;
- portail web citoyen ;
- interface d'administration ;
- API backend.

## Vue technique simplifiée

```text
Citoyens
  -> application mobile
  -> portail web

Collectivités / agents
  -> interface d'administration
  -> API partenaires

Canaux applicatifs
  -> API backend
     -> base de données
     -> stockage photos
     -> journalisation applicative
     -> supervision / observabilité
```

## Infrastructures et environnements

### Hébergement

- VPS pour les environnements applicatifs ;
- services packagés dans des conteneurs Docker ;
- orchestration légère via Docker Compose.

### Environnements

- `développement` : intégration continue ;
- `préproduction` : recette et démonstration ;
- `production` : usage réel.

## Observabilité

L'observabilité est répartie en quatre niveaux :

- `Netdata` pour la santé système des VPS ;
- `UptimeRobot` ou équivalent pour la disponibilité externe ;
- `Sentry` pour les erreurs applicatives ;
- logs structurés pour le diagnostic.

## Sécurité de base

- secrets hors dépôt ;
- variables séparées par environnement ;
- accès SSH restreints ;
- images Docker versionnées ;
- séparation stricte entre préproduction et production ;
- sauvegardes avant déploiement sensible.

## Points d'évolution future

L'architecture devra être réévaluée si :

- la volumétrie augmente fortement ;
- plusieurs collectivités imposent des exigences de disponibilité plus fortes ;
- les modules `cartographie temps réel`, `photos HD` ou `chatbot` deviennent centraux ;
- les coûts d'exploitation des VPS deviennent moins avantageux qu'une cible plus managée.
