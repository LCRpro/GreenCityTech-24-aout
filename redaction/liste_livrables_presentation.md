# Liste des livrables visuels pour la présentation GreenCity Tech

## 1. Objectif du document

Ce document recense les livrables visuels utiles à intégrer dans la présentation finale.  
L'idée n'est pas de tout transformer en visuel, mais d'identifier les éléments qui apportent une vraie valeur de compréhension à l'oral.

Chaque livrable devra ensuite pouvoir être produit dans un format propre, réutilisable et intégrable dans la présentation :

- version principale en **HTML/CSS** pour maîtriser le rendu ;
- export possible en **PNG** ;
- éventuellement version **SVG** pour certains schémas simples.

---

## 2. Principes de sélection

Les visuels à produire doivent répondre à au moins un des objectifs suivants :

- clarifier une organisation ou une architecture ;
- synthétiser un raisonnement long ;
- rendre visible une priorisation ou un arbitrage ;
- donner un rendu plus professionnel à la soutenance ;
- éviter des slides trop textuelles.

À l'inverse, il n'est pas utile de produire un visuel pour une idée qui s'explique mieux en 20 secondes à l'oral.

---

## 3. Livrables transverses

### 3.1. Slide d'ouverture / identité visuelle

Utilité :

- donner une identité cohérente à la présentation ;
- poser immédiatement le contexte GreenCity Tech.

Éléments à prévoir :

- titre du projet ;
- sous-titre éventuel ;
- nom du groupe ;
- visuel léger lié à la ville, au numérique ou au signalement citoyen ;
- palette couleur cohérente.

### 3.2. Fil rouge global du dossier

Format conseillé :

- frise ou schéma simple des 5 parties.

Contenu :

- organisation ;
- mise en oeuvre technique ;
- qualité / conformité / sécurité ;
- relation client et évolutions ;
- inclusion et management.

Utilité :

- montrer que tout le dossier suit une logique unique ;
- servir de repère visuel récurrent.

### 3.3. Charte visuelle minimale

À définir une fois pour toutes avant production :

- couleurs principales ;
- couleurs d'accent ;
- typographie ;
- style de cartes/blocs ;
- style des tableaux ;
- style des schémas ;
- style des icônes.

---

## 4. Livrables pour la partie 1

### 4.1. Organigramme cible de l'équipe

Format conseillé :

- organigramme simple ou schéma en blocs.

Contenu :

- Product Owner ;
- équipe de développement ;
- DevOps senior ;
- développeur relais DevOps ;
- référent qualité.

Utilité :

- visualiser rapidement l'organisation retenue ;
- éviter une longue explication purement textuelle.

### 4.2. Tableau RACI simplifié

Format conseillé :

- tableau visuel lisible sur une slide.

Contenu possible :

- backlog ;
- développement ;
- revue de code ;
- CI/CD ;
- recette ;
- déploiement ;
- supervision.

Utilité :

- montrer la répartition des responsabilités ;
- appuyer la crédibilité de l'organisation.

### 4.3. Schéma méthode de travail

Format conseillé :

- mini-cycle visuel.

Contenu :

- backlog priorisé ;
- sprint de 2 semaines ;
- développement ;
- revue ;
- démonstration ;
- rétrospective ;
- gestion séparée des urgences/incidents.

Utilité :

- rendre l'agilité pragmatique plus concrète.

### 4.4. Schéma Git + environnements

Format conseillé :

- schéma de branches reliées aux environnements.

Contenu :

- `feature/*` ;
- `develop` ;
- `main` ;
- tags/releases ;
- développement ;
- préproduction ;
- production.

Utilité :

- très utile car c'est un point qui se comprend mieux en visuel qu'en texte.

---

## 5. Livrables pour la partie 2

### 5.1. Architecture technique globale

Format conseillé :

- schéma d'architecture principal.

Contenu :

- application mobile ;
- portail web ;
- interface d'administration ;
- API backend ;
- base de données ;
- stockage photos ;
- VPS ;
- Docker ;
- supervision.

Utilité :

- probablement l'un des visuels les plus importants de toute la soutenance.

### 5.2. Schéma de pipeline CI/CD

Format conseillé :

- pipeline horizontal ou vertical.

Contenu :

- pull request ;
- lint ;
- tests ;
- build ;
- audit dépendances ;
- scan sécurité ;
- build Docker ;
- déploiement dev ;
- validation préproduction ;
- déploiement production.

Utilité :

- montrer l'industrialisation ;
- rendre la logique DevOps concrète.

### 5.3. Tableau stack technique retenue

Format conseillé :

- tableau ou grille de cartes.

Colonnes possibles :

- besoin ;
- outil choisi ;
- justification courte.

Exemples :

- code source → GitHub ;
- CI/CD → GitHub Actions ;
- conteneurs → Docker ;
- qualité → ESLint ;
- tests → Jest / Cypress ;
- sécurité → Dependabot / Trivy / GitHub Secrets ;
- supervision → Netdata / Sentry.

### 5.4. Schéma de déploiement sur VPS

Format conseillé :

- vue infra simplifiée.

Contenu :

- VPS développement ;
- VPS préproduction ;
- VPS production ;
- conteneurs Docker ;
- secrets / variables d'environnement ;
- supervision.

Utilité :

- clarifier le choix d'hébergement ;
- montrer qu'on reste simple mais structuré.

### 5.5. Visuel rollback / reprise

Format conseillé :

- mini-schéma ou carte processus.

Contenu :

- détection incident ;
- rollback version précédente ;
- vérification ;
- communication ;
- analyse post-incident.

Utilité :

- intéressant pour crédibiliser l'exploitation.

---

## 6. Livrables pour la partie 3

### 6.1. Pyramide de tests

Format conseillé :

- schéma pyramidal.

Contenu :

- tests unitaires ;
- tests d'intégration ;
- tests E2E ;
- recette manuelle complémentaire.

Utilité :

- très utile car visuel classique et immédiatement compréhensible.

### 6.2. Check-list visuelle de Definition of Done

Format conseillé :

- carte checklist.

Contenu :

- code relu ;
- lint OK ;
- tests OK ;
- documentation mise à jour ;
- sécurité vérifiée ;
- recette prévue ;
- déployable.

Utilité :

- très bon visuel de maturité projet.

### 6.3. Carte sécurité / conformité

Format conseillé :

- tableau ou cartes thématiques.

Blocs possibles :

- secrets ;
- dépendances ;
- images Docker ;
- données personnelles ;
- permissions mobiles ;
- RGPD ;
- journalisation ;
- sauvegardes.

Utilité :

- éviter d'éparpiller la sécurité dans trop de slides.

### 6.4. Tableau qualité des données

Format conseillé :

- tableau simple.

Contenu :

- cohérence des statuts ;
- géolocalisation ;
- rattachement photos ;
- doublons ;
- historisation ;
- traçabilité des actions.

Utilité :

- bon visuel métier, pas seulement technique.

### 6.5. Carte accessibilité et conformité mobile

Format conseillé :

- bloc de synthèse.

Contenu :

- accessibilité ;
- permissions ;
- crash reporting ;
- validation manuelle ;
- conformité stores.

---

## 7. Livrables pour la partie 4

### 7.1. Processus de traitement d'une demande client

Format conseillé :

- flowchart.

Contenu :

- expression du besoin ;
- cadrage ;
- analyse impact ;
- arbitrage ;
- acceptation / report / refus / recadrage ;
- backlog ;
- livraison ;
- retour client.

Utilité :

- très utile pour montrer que la demande n'entre pas automatiquement en développement.

### 7.2. Matrice valeur / effort / risque

Format conseillé :

- matrice 2D ou tableau de scoring.

Utilité :

- montrer la logique de priorisation ;
- rendre la décision plus crédible.

### 7.3. Cartes d'analyse des évolutions futures

Une carte par évolution :

- cartographie temps réel ;
- photos HD ;
- chatbot citoyen.

Contenu de chaque carte :

- valeur métier ;
- impacts techniques ;
- risques ;
- coût ;
- niveau de priorité.

Utilité :

- très bon support oral ;
- permet de comparer les trois évolutions visuellement.

### 7.4. Roadmap par lots

Format conseillé :

- frise ou timeline simple.

Contenu :

- lot 1 : stabilisation ;
- lot 2 : optimisation ;
- lot 3 : nouvelles fonctionnalités.

Utilité :

- visualiser la montée en charge progressive.

### 7.5. Tableau backlog priorisé exemple

Format conseillé :

- tableau compact.

Colonnes possibles :

- évolution ;
- valeur ;
- complexité ;
- risque ;
- dépendances ;
- décision.

---

## 8. Livrables pour la partie 5

### 8.1. Schéma inclusion et performance collective

Format conseillé :

- carte conceptuelle.

Contenu :

- inclusion ;
- organisation du travail ;
- réduction des interruptions ;
- documentation ;
- asynchrone ;
- qualité ;
- performance collective.

Utilité :

- montrer que l'inclusion n'est pas un sujet RH isolé.

### 8.2. Tableau des adaptations concrètes

Format conseillé :

- tableau lisible.

Colonnes possibles :

- difficulté possible ;
- adaptation proposée ;
- bénéfice individuel ;
- bénéfice collectif.

Exemples :

- fatigue cognitive en réunion ;
- trouble visuel ;
- interruptions fréquentes ;
- surcharge informationnelle.

### 8.3. Visuel management de proximité

Format conseillé :

- schéma de répartition des rôles.

Contenu :

- PO ;
- manager de proximité ;
- DevOps senior ;
- référent qualité ;
- équipe.

Utilité :

- clarifier qui protège quoi :
- relation client ;
- charge de travail ;
- qualité ;
- exploitation.

### 8.4. Tableau inclusion et outillage

Format conseillé :

- tableau croisé.

Contenu :

- GitHub ;
- GitHub Projects ;
- documentation Markdown ;
- Netdata ;
- Sentry ;
- terminal ;
- dashboards.

Utilité :

- raccorder l'inclusion à la stack réellement retenue.

---

## 9. Livrables de conclusion

### 9.1. Slide de synthèse finale

Format conseillé :

- 4 à 6 blocs maximum.

Contenu possible :

- équipe clarifiée ;
- chaîne de livraison fiabilisée ;
- qualité et sécurité renforcées ;
- relation client cadrée ;
- inclusion intégrée au fonctionnement.

### 9.2. Tableau des KPI prioritaires

Format conseillé :

- tableau simple ou grille de cartes.

KPI possibles :

- fréquence de déploiement ;
- taux d'échec des déploiements ;
- bugs production ;
- temps de réponse API ;
- taux de crash mobile ;
- satisfaction des collectivités.

Utilité :

- clôturer avec une vision pilotable et concrète.

---

## 10. Priorisation des visuels à produire

### 10.1. Priorité haute

- identité visuelle / slide d'ouverture ;
- fil rouge global ;
- organigramme cible ;
- schéma Git + environnements ;
- architecture technique globale ;
- pipeline CI/CD ;
- pyramide de tests ;
- processus de demande client ;
- cartes des 3 évolutions futures ;
- slide de synthèse finale.

### 10.2. Priorité moyenne

- RACI simplifié ;
- tableau stack technique ;
- schéma de déploiement VPS ;
- Definition of Done ;
- carte sécurité / conformité ;
- roadmap par lots ;
- tableau adaptations inclusion.

### 10.3. Priorité basse

- rollback ;
- backlog exemple ;
- tableau qualité des données ;
- tableau inclusion et outillage ;
- KPI détaillés.

---

## 11. Format de production recommandé

Pour chaque visuel important, produire :

1. une version source en **HTML/CSS** ;
2. une version exportée en **PNG** ;
3. éventuellement une variante compacte pour intégration sur slide.

Convention utile à prévoir :

- un dossier par visuel ;
- un `index.html` ;
- un `style.css` ;
- un export image ;
- un nom explicite.

Exemple :

- `visuels/01-ouverture/`
- `visuels/02-fil-rouge/`
- `visuels/03-organigramme/`
- `visuels/04-git-environnements/`
- `visuels/05-architecture-devops/`

---

## 12. Ordre conseillé de création

Pour être efficace, je proposerais de produire les visuels dans cet ordre :

1. charte visuelle minimale ;
2. slide d'ouverture ;
3. fil rouge global ;
4. organigramme ;
5. schéma Git + environnements ;
6. architecture technique ;
7. pipeline CI/CD ;
8. pyramide de tests ;
9. processus de demande client ;
10. cartes des évolutions futures ;
11. slide de synthèse finale.

Cet ordre permet de fabriquer d'abord les éléments structurants, puis les visuels de détail.
