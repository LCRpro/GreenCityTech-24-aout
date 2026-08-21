# Plan qualité, tests et conformité

## Objectif

Définir les règles minimales permettant de livrer un produit plus fiable, plus conforme et plus stable.

## Principes

- prioriser les parcours critiques ;
- combiner contrôles automatiques et validation humaine ;
- ne pas promettre une automatisation totale si elle n'est pas réaliste ;
- intégrer la sécurité et la conformité au cycle de livraison.

## Parcours critiques à couvrir

- création de signalement ;
- ajout de photo ;
- géolocalisation ;
- consultation de la carte ;
- changement de statut d'un incident ;
- échanges API partenaires.

## Stratégie de tests

### Web / backend

- tests unitaires ;
- tests d'intégration ;
- tests API ;
- tests E2E sur les parcours critiques.

### Mobile

- tests unitaires ;
- build de validation si possible ;
- recette manuelle structurée ;
- suivi des crashs.

## Definition of Done

Une fonctionnalité n'est considérée terminée que si :

- le code est relu ;
- les tests attendus sont passés ;
- la CI est verte ;
- les impacts sécurité sont revus ;
- la documentation utile est mise à jour ;
- la version est déployable ;
- la recette préproduction est faisable.

## Conformité

### Web

- responsive ;
- messages d'erreur compréhensibles ;
- navigation clavier ;
- contrastes suffisants ;
- référentiel d'accessibilité de type RGAA.

### Mobile

- permissions correctement justifiées ;
- compatibilité de base avec les contraintes stores ;
- bonne gestion du réseau mobile et des erreurs terrain.

### Données

- minimisation ;
- séparation des environnements ;
- absence de données sensibles inutiles dans les logs ;
- règles de conservation à définir.

## Sécurité intégrée

- audit dépendances ;
- scan images Docker ;
- secrets hors dépôt ;
- surveillance des erreurs applicatives ;
- règles minimales de gestion des accès.
