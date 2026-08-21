# Exemple de pipeline CI/CD

## Objectif

Présenter une chaîne CI/CD crédible et progressive pour GreenCity Tech.

## Principes

Le pipeline ne doit pas être présenté comme une simple suite linéaire de tests. Certains contrôles sont rapides et peu coûteux. D'autres nécessitent un environnement de test cohérent avec base de données, migrations et artefacts déjà construits.

## Stages retenus

### 1. Contrôles rapides

- `lint`
- `app_tests`
- `dependency_audit`

Ces jobs s'exécutent sur pull request pour bloquer rapidement un code non conforme ou manifestement instable.

### 2. Sécurité

- `secret_check`
- `image_scan`
- `accessibility_check`

L'objectif est de détecter tôt les erreurs grossières de sécurité et une partie des écarts de conformité/accessibilité.

### 3. Build

- `app_build`
- `docker_build`

Les artefacts et images versionnés servent de base aux tests avancés et aux déploiements.

### 4. Tests avancés

- `test_env_up`
- `db_migrate_seed`
- `e2e_tests`

Ces jobs supposent :

- une image déjà construite ;
- un environnement de test cohérent ;
- une base de test ;
- des migrations validées ;
- des données de test ou seeds.

### 5. Promotion

- `deploy_dev`
- `deploy_preprod`
- `deploy_prod` manuel

Le passage en production reste volontairement manuel.

## Chaîne mobile

La chaîne mobile est volontairement plus légère au démarrage :

- tests unitaires ;
- build de validation si possible ;
- recette manuelle structurée ;
- diffusion store hors périmètre d'automatisation avancée initiale.

## Exemple synthétique

```text
Pull Request
  -> contrôles rapides
  -> revue de code
  -> merge
  -> build
  -> tests avancés
  -> déploiement développement
  -> déploiement préproduction
  -> validation métier
  -> production manuelle
  -> smoke tests + supervision
```

## Justification

Cette structure est plus crédible qu'un pipeline trop simplifié :

- elle distingue bien les niveaux de contrôle ;
- elle reconnaît le coût réel des E2E ;
- elle reste compatible avec une petite équipe ;
- elle évite de surpromettre sur la chaîne mobile.
