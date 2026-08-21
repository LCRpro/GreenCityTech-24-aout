# Stratégie de déploiement et de rollback

## Objectif

Définir une méthode de déploiement reproductible, traçable et sécurisée pour GreenCity Tech.

## Principes

- aucun déploiement manuel depuis un poste développeur ;
- images Docker versionnées ;
- préproduction obligatoire avant production ;
- validation métier hors CI avant passage en production ;
- rollback prévu à l'avance.

## Déploiement cible

### Développement

- déploiement automatique après intégration validée ;
- objectif : vérifier rapidement la cohérence de l'environnement.

### Préproduction

- déploiement d'une version candidate via release/tag ;
- exécution des vérifications finales ;
- recette interne et démonstration si nécessaire.

### Production

- validation manuelle obligatoire ;
- sauvegarde préalable si changement sensible ;
- déploiement de l'image validée ;
- smoke tests après mise en ligne ;
- contrôle de supervision immédiat.

## Rollback

Le rollback repose sur :

- images Docker versionnées ;
- conservation de la version précédente ;
- procédure documentée ;
- seuil clair de retour arrière en cas d'incident critique.

## Déclencheurs de rollback

- indisponibilité du portail ou de l'API ;
- erreur bloquante sur un parcours critique ;
- échec de migration ;
- hausse anormale des erreurs applicatives ;
- alerte critique après release.

## Étapes de rollback

1. stopper la promotion de la version en cours ;
2. redéployer l'image N-1 ;
3. vérifier les logs et la supervision ;
4. confirmer le retour à un état stable ;
5. ouvrir une analyse post-incident.

## Justification

Le rollback n'est pas un luxe :

- il réduit le temps de rétablissement ;
- il sécurise les mises en production ;
- il évite une dépendance totale au diagnostic à chaud ;
- il rend la stratégie de déploiement défendable.
