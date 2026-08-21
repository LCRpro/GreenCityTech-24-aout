# Présentation GreenCity Tech

## Objectif du document

Ce document sert de conducteur de soutenance pour une présentation d'environ **20 minutes**.

Il ne remplace pas les parties de fond, mais permet de savoir :

- quelles slides afficher ;
- quel message faire passer ;
- quels assets ou livrables associer ;
- combien de temps consacrer à chaque partie.

L'idée générale est de garder un fil narratif simple :

1. partir d'un prototype fragile ;
2. montrer la cible d'organisation et d'industrialisation ;
3. expliquer comment la qualité et la sécurité sont intégrées ;
4. montrer comment le produit évolue sans se désorganiser ;
5. terminer sur la soutenabilité humaine et la trajectoire globale.

---

## Répartition globale du temps

| Bloc | Temps cible |
|---|---|
| Introduction | 2 min |
| Partie 1 - Organisation | 4 min |
| Partie 2 - Mise en œuvre technique DevOps | 5 min 30 |
| Partie 3 - Qualité, conformité, sécurité | 4 min |
| Partie 4 - Gestion produit et évolutions | 3 min 30 |
| Partie 5 - Inclusion et management | 1 min 30 |
| Conclusion | 30 sec |
| **Total** | **20 min** |

---

## Slide 1 - Couverture

### Fichier

- [01-couverture.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/01-couverture.html>)

### Temps cible

- **1 min**

### Message clé

GreenCity Tech doit passer d'un prototype fragile à une plateforme civic-tech plus fiable, plus industrialisée et plus soutenable.

### Points à dire

- rappeler brièvement le contexte ;
- dire qu'on ne propose pas une usine à gaz ;
- annoncer une démarche progressive et défendable ;
- poser le fil rouge : mieux livrer, mieux exploiter, mieux piloter.

### Visuels / assets

- fond d'ouverture :
  - [fond-pur-ouverture.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/base-assets/fond-pur-ouverture.png>)

### Livrables associés

- [01_note_cadrage_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/01_note_cadrage_devops.md>)

---

## Slide 2 - Fil rouge et plan

### Fichier

- [02-fil-rouge-plan.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/02-fil-rouge-plan.html>)

### Temps cible

- **1 min**

### Message clé

La transformation repose sur 5 blocs cohérents : organisation, technique DevOps, qualité, gestion produit, inclusion.

### Points à dire

- montrer que le sujet n'est pas seulement technique ;
- expliquer la logique d'enchaînement entre les parties ;
- insister sur la cohérence d'ensemble.

### Visuels / assets

- slide HTML elle-même ;
- éventuellement fond de contenu :
  - [fond-pur-contenu.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/base-assets/fond-pur-contenu.png>)

### Livrables associés

- [README.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/README.md>)

---

## Slide 3 - Organisation cible

### Fichier

- [03-organisation-equipe.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/03-organisation-equipe.html>)

### Temps cible

- **2 min**

### Message clé

L'équipe est structurée sans être surdimensionnée.

### Points à dire

- 4 développeurs existants conservés ;
- 1 Product Owner ;
- 1 DevOps senior ;
- montée en compétence progressive d'un développeur sur les sujets DevOps ;
- qualité portée collectivement ;
- pas de QA dédié ni d'équipe DevOps complète au démarrage.

### Visuels / assets

- slide HTML ;
- plus tard, asset organigramme si on le finalise :
  - [organigramme-equipe.html](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/assets/organigramme-equipe.html>)

### Livrables associés

- [01_note_cadrage_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/01_note_cadrage_devops.md>)

---

## Slide 4 - Méthode et rituels

### Fichier

- [04-methode-et-rituels.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/04-methode-et-rituels.html>)

### Temps cible

- **1 min**

### Message clé

L'équipe travaille en agile pragmatique avec des rituels courts, utiles et soutenables.

### Points à dire

- sprints de 2 semaines ;
- backlog unique priorisé par le PO ;
- Kanban séparé pour incidents et urgences ;
- démonstration de fin de sprint ;
- rétrospective courte ;
- point de pilotage régulier avec les collectivités pilotes ;
- importance de l'écrit et de l'asynchrone.

### Visuels / assets

- slide HTML

### Livrables associés

- [01_note_cadrage_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/01_note_cadrage_devops.md>)
- [09_plan_de_suivi_et_demonstrations.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/09_plan_de_suivi_et_demonstrations.md>)

---

## Slide 5 - Budget et arbitrages

### Fichier

- [04-budget-et-arbitrages.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/04-budget-et-arbitrages.html>)

### Temps cible

- **1 min**

### Message clé

Les choix retenus sont aussi justifiés économiquement.

### Points à dire

- montrer qu'on n'a pas cherché la solution la plus “impressionnante” ;
- expliquer les ordres de grandeur ;
- défendre les arbitrages :
  - pas de QA dédié ;
  - pas d'équipe DevOps complète ;
  - VPS + Docker ;
  - outils standards.

### Visuels / assets

- slide HTML ;
- éventuel futur asset budget si on le transforme en tableau visuel dédié.

### Livrables associés

- [11_budget_previsionnel.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/11_budget_previsionnel.md>)

---

## Slide 6 - Git et environnements

### Fichier

- [05-git-et-environnements.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/05-git-et-environnements.html>)

### Temps cible

- **1 min**

### Message clé

La stratégie Git et les environnements rendent les livraisons plus lisibles et plus sûres.

### Points à dire

- `main`, `develop`, branches courtes ;
- préproduction = environnement, pas branche permanente ;
- passage progressif jusqu'à la production ;
- meilleure traçabilité.

### Visuels / assets

- slide HTML ;
- asset overlay :
  - [git-environnements.html](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/assets/git-environnements.html>)

### Livrables associés

- [01_note_cadrage_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/01_note_cadrage_devops.md>)

---

## Slide 7 - Architecture technique

### Fichier

- [06-architecture-technique.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/06-architecture-technique.html>)

### Temps cible

- **2 min**

### Message clé

L'architecture cible repose sur une base sobre : VPS, Docker, API, base de données, stockage photo, supervision.

### Points à dire

- application mobile, portail web, dashboard, API ;
- déploiement sur VPS ;
- conteneurs Docker ;
- base de données séparée par environnement ;
- stockage photo ;
- choix sobre mais évolutif ;
- possibilité d'évolution future vers des services plus managés si besoin réel.

### Visuels / assets

- slide HTML actuelle ;
- futur vrai schéma d'architecture technique DevOps à produire ;
- fond recommandé :
  - [fond-pur-contenu-haut-gauche-bas-centre.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/base-assets/fond-pur-contenu-haut-gauche-bas-centre.png>)

### Livrables associés

- [02_schema_architecture_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/02_schema_architecture_devops.md>)

---

## Slide 8 - Architecture de déploiement

### Fichier

- [07-architecture-devops-deploiement.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/07-architecture-devops-deploiement.html>)

### Temps cible

- **1 min 30**

### Message clé

Le sujet attend un vrai schéma d’architecture technique : on montre donc où ça tourne, comment c’est déployé et comment c’est supervisé.

### Points à dire

- GitHub et GitHub Actions en entrée ;
- images Docker versionnées ;
- déploiement sur VPS via Docker Compose ;
- services applicatifs, base de données et stockage photo ;
- observabilité en 4 niveaux : Netdata, UptimeRobot, Sentry, logs ;
- architecture sobre mais exploitable.

### Visuels / assets

- slide HTML ;
- plus tard, version asset PNG dédiée si besoin.

### Livrables associés

- [02_schema_architecture_devops.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/02_schema_architecture_devops.md>)
- [05_proposition_outillage.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/05_proposition_outillage.md>)

---

## Slide 9 - Pipeline CI/CD

### Fichier

- [07-pipeline-cicd.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/07-pipeline-cicd.html>)

### Temps cible

- **2 min**

### Message clé

Le pipeline ne se limite pas à “tester puis déployer” : il distingue contrôles rapides, build, tests avancés et promotion.

### Points à dire

- contrôles rapides sur pull request ;
- sécurité et accessibilité ;
- build applicatif et Docker ;
- tests avancés avec environnement cohérent ;
- promotion vers dev / préprod / prod ;
- production manuelle ;
- mobile traité plus progressivement que le web/backend.

### Visuels / assets

- slide HTML ;
- asset overlay :
  - [pipeline-cicd.html](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/assets/pipeline-cicd.html>)
  - [pipeline-cicd.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/assets/pipeline-cicd.png>)

### Livrables associés

- [03_exemple_pipeline_ci_cd.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/03_exemple_pipeline_ci_cd.md>)
- [04_strategie_deploiement_et_rollback.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/04_strategie_deploiement_et_rollback.md>)

---

## Slide 10 - Supervision et logs

### Fichier

- [08-supervision-et-logs.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/08-supervision-et-logs.html>)

### Temps cible

- **1 min**

### Message clé

L'observabilité est séparée en couches : système, disponibilité externe, applicatif, logs.

### Points à dire

- `Netdata` pour les VPS ;
- `UptimeRobot` pour la disponibilité externe ;
- `Sentry` pour les erreurs applicatives ;
- logs structurés pour le diagnostic ;
- intérêt d'une approche simple mais lisible.

### Visuels / assets

- slide HTML ;
- fond recommandé :
  - [fond-pur-contenu-accent-gauche.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/base-assets/fond-pur-contenu-accent-gauche.png>)

### Livrables associés

- [05_proposition_outillage.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/05_proposition_outillage.md>)

---

## Slide 11 - Qualité, sécurité, conformité

### Fichier

- [09-qualite-securite.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/09-qualite-securite.html>)

### Temps cible

- **2 min**

### Message clé

La qualité ne se limite pas aux tests : elle inclut sécurité, conformité, données et conditions de livraison.

### Points à dire

- Definition of Done ;
- audit dépendances ;
- scan d'images ;
- séparation des environnements ;
- cohérence entre code, pipeline, déploiement et données ;
- RGPD et sécurité des photos.

### Visuels / assets

- slide HTML

### Livrables associés

- [06_plan_qualite_tests_conformite.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/06_plan_qualite_tests_conformite.md>)

---

## Slide 12 - Tests et accessibilité

### Fichier

- [10-tests-et-accessibilite.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/10-tests-et-accessibilite.html>)

### Temps cible

- **2 min**

### Message clé

Les tests doivent prioriser les parcours critiques, et l'accessibilité ne peut pas être seulement automatisée.

### Points à dire

- Jest + Cypress sur le web ;
- stratégie mobile progressive ;
- recette manuelle structurée ;
- accessibilité : automatique + validation humaine ;
- parcours critiques : signalement, photo, géolocalisation, traitement.

### Visuels / assets

- slide HTML

### Livrables associés

- [06_plan_qualite_tests_conformite.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/06_plan_qualite_tests_conformite.md>)
- [07_indicateurs_qualite_et_pilotage.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/07_indicateurs_qualite_et_pilotage.md>)

---

## Slide 13 - Gestion produit

### Fichier

- [11-relation-client-priorisation.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/11-relation-client-priorisation.html>)

### Temps cible

- **1 min 30**

### Message clé

On pilote une plateforme multi-collectivités, on n'empile pas des demandes locales sans arbitrage.

### Points à dire

- remontée du besoin ;
- cadrage produit ;
- analyse d'impact ;
- arbitrage interne ;
- roadmap, report ou refus ;
- intérêt multi-collectivités comme critère important.

### Visuels / assets

- slide HTML

### Livrables associés

- [08_gestion_produit_et_evolutions.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/08_gestion_produit_et_evolutions.md>)

---

## Slide 14 - Évolutions et roadmap

### Fichier

- [12-evolutions-et-roadmap.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/12-evolutions-et-roadmap.html>)

### Temps cible

- **1 min 30**

### Message clé

Cartographie temps réel, photos HD et chatbot sont pertinentes, mais doivent être qualifiées avant d'être intégrées.

### Points à dire

- impacts techniques et budgétaires ;
- logique de lot :
  - stabiliser ;
  - qualifier ;
  - étendre ;
- une idée utile localement n'entre pas forcément dans la plateforme.

### Visuels / assets

- slide HTML

### Livrables associés

- [08_gestion_produit_et_evolutions.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/08_gestion_produit_et_evolutions.md>)
- [09_plan_de_suivi_et_demonstrations.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/09_plan_de_suivi_et_demonstrations.md>)

---

## Slide 15 - Suivi, démonstrations et satisfaction

### Fichier

- [13-suivi-demonstrations-satisfaction.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/13-suivi-demonstrations-satisfaction.html>)

### Temps cible

- **1 min**

### Message clé

La relation avec les collectivités doit être structurée par des démonstrations, des points d’étape et des indicateurs simples.

### Points à dire

- démonstrations régulières ;
- validation en préproduction ;
- point mensuel de pilotage ;
- roadmap partagée ;
- satisfaction des collectivités ;
- suivi des demandes ouvertes, reportées ou qualifiées.

### Visuels / assets

- slide HTML

### Livrables associés

- [09_plan_de_suivi_et_demonstrations.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/09_plan_de_suivi_et_demonstrations.md>)

---

## Slide 16 - Inclusion et management

### Fichier

- [13-inclusion-et-management.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/13-inclusion-et-management.html>)

### Temps cible

- **2 min**

### Message clé

La transformation DevOps ne sera pas soutenable si l'organisation de travail n'est pas inclusive.

### Points à dire

- réunions plus courtes et préparées ;
- écrit et asynchrone ;
- adaptations visuelles ;
- réduction de la charge cognitive ;
- indicateurs humains lus au niveau collectif ;
- inclusion = amélioration globale de l'organisation, pas traitement à part.

### Visuels / assets

- slide HTML

### Livrables associés

- [10_inclusion_et_management.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/10_inclusion_et_management.md>)

---

## Slide 17 - Conclusion

### Fichier

- [14-conclusion.html](</c:/Users/chris/Desktop/Partiels 8 juin/Slides/14-conclusion.html>)

### Temps cible

- **1 min**

### Message clé

L'objectif n'est pas de livrer plus vite à tout prix, mais de livrer mieux avec une trajectoire soutenable.

### Points à dire

- rappeler la progression :
  - organisation ;
  - technique ;
  - qualité ;
  - produit ;
  - humain ;
- insister sur la cohérence des arbitrages ;
- conclure sur la transformation progressive plutôt que spectaculaire.

### Visuels / assets

- slide HTML ;
- fond de conclusion / ouverture si besoin :
  - [fond-pur-intercalaire.png](</c:/Users/chris/Desktop/Partiels 8 juin/visuels/base-assets/fond-pur-intercalaire.png>)

### Livrables associés

- [README.md](</c:/Users/chris/Desktop/Partiels 8 juin/livrables/README.md>)

---

## Slides optionnelles ou de secours

Ces slides ou assets peuvent être gardés en réserve selon le temps ou les questions du jury :

- budget détaillé ;
- vrai schéma d'architecture technique DevOps d'hébergement ;
- asset Git/environnements ;
- asset pipeline CI/CD en PNG ;
- questions sensibles / réponses courtes.

Documents utiles :

- [questions_sensibles_et_reponses.md](</c:/Users/chris/Desktop/Partiels 8 juin/questions_sensibles_et_reponses.md>)
- [synthese_orale_greencity_tech.md](</c:/Users/chris/Desktop/Partiels 8 juin/synthese_orale_greencity_tech.md>)

---

## Ordre conseillé si le temps manque

Si la présentation doit être un peu raccourcie, les slides à condenser en priorité sont :

1. `slide 5` budget
2. `slide 10` supervision
3. `slide 15` suivi projet
4. `slide 14` évolutions

Les slides à préserver presque quoi qu'il arrive sont :

1. couverture
2. fil rouge
3. organisation
4. méthode projet
5. architecture
6. architecture de déploiement
7. pipeline CI/CD
8. qualité / tests
9. gestion produit
10. inclusion
11. conclusion
