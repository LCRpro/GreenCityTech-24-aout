# Partie 1 — Organisation et méthodologie DevOps

## 1. Intention de la partie

L'objectif de cette partie est de proposer une organisation DevOps réaliste pour GreenCity Tech, afin de passer d'un prototype développé rapidement à un mode de fonctionnement plus fiable, plus industrialisé et plus lisible pour la direction comme pour les équipes.

Le projet cumule plusieurs contraintes :

- plusieurs produits à maintenir : application mobile Android/iOS, portail web citoyen, interface d'administration et API partenaires ;
- une qualité encore insuffisante : bugs fréquents, faible couverture de tests, documentation incomplète ;
- une exploitation fragile : déploiements manuels, pas de préproduction stable, monitoring insuffisant ;
- des demandes métier évolutives de la part des collectivités ;
- des contraintes humaines à prendre en compte dans l'organisation de l'équipe.

L'objectif n'est donc pas de proposer une plateforme DevOps complexe ou théorique, mais une démarche progressive, crédible et adaptée à une petite structure qui doit améliorer sa qualité de livraison sans se doter d'une organisation disproportionnée.

---

## 2. Organisation cible des équipes

### 2.1. Principe général

Je proposerais une organisation légère articulée autour de trois fonctions :

- un **Product Owner** ;
- une **équipe de développement** composée des 4 développeurs existants ;
- un **pilotage DevOps / exploitation** porté par un profil senior.

Cette organisation est plus réaliste qu'une séparation forte entre développement, QA et exploitation. Elle permet de garder une équipe compacte tout en clarifiant les responsabilités.

Le contexte du sujet ne justifie pas, à ce stade, une structure très spécialisée avec plusieurs couches hiérarchiques ou des équipes complètement séparées. GreenCity Tech part d'un prototype construit rapidement par 4 développeurs. La priorité est donc moins de créer de nouveaux silos que de structurer le fonctionnement existant, d'introduire des rôles de coordination et de fiabiliser le cycle de livraison.

### 2.2. Product Owner

Le Product Owner représente les besoins des collectivités et priorise les évolutions.

Ses responsabilités principales :

- recueillir et formaliser les besoins ;
- prioriser le backlog ;
- arbitrer entre valeur métier, délai, coût et complexité technique ;
- valider les fonctionnalités en préproduction ;
- organiser les démonstrations avec le client.

### 2.3. Équipe de développement

Les 4 développeurs ayant réalisé le prototype peuvent être conservés, car ils connaissent déjà l'existant. En revanche, leur fonctionnement doit être mieux structuré.

Répartition possible :

- 1 ou 2 développeurs orientés web / portail citoyen ;
- 1 développeur orienté mobile ;
- 1 développeur orienté backend / API ;
- avec une polyvalence progressive pour éviter les silos.

Responsabilités :

- développer les fonctionnalités ;
- écrire les tests unitaires et d'intégration ;
- participer aux revues de code ;
- corriger les anomalies ;
- documenter les points techniques utiles.

Le fait de conserver l'équipe existante présente plusieurs avantages. D'abord, cela limite le risque de perte de connaissance sur un prototype déjà en fonctionnement. Ensuite, cela évite un coût de reconstitution d'équipe trop important. En revanche, cette conservation n'est pertinente que si le cadre de travail évolue : règles Git, revues de code, critères de qualité, tests et responsabilités doivent être clarifiés.

### 2.4. Qualité intégrée et organisation DevOps

Je ne proposerais pas, au départ, un QA dédié ni une équipe DevOps complète. Pour une structure de cette taille, cela serait coûteux et difficile à justifier.

Je proposerais plutôt :

- un **profil DevOps senior** chargé de mettre en place les fondations ;
- un **développeur de l'équipe identifié pour monter progressivement en compétence sur les sujets DevOps** ;
- une **responsabilité qualité portée collectivement par l'équipe**, avec un développeur expérimenté qui aide à structurer les pratiques sans créer un rôle séparé.

La qualité doit être portée par l'équipe, avec une structuration minimale sur :

- les règles de revue de code ;
- le suivi de la couverture de tests ;
- la cohérence du cahier de recette ;
- les critères minimaux avant livraison.

Le DevOps senior porte :

- la CI/CD ;
- la stratégie de déploiement ;
- la gestion des environnements ;
- la supervision ;
- la gestion des secrets ;
- la formalisation de l'infrastructure.

Le développeur de l'équipe qui monte en compétence sur les sujets DevOps ne constitue pas une équipe DevOps autonome, mais un appui interne progressif. Il peut participer à :

- la maintenance des pipelines ;
- la préparation des déploiements ;
- le suivi des environnements ;
- la documentation d'exploitation ;
- la montée en autonomie de l'équipe.

Cette organisation est plus crédible qu'une équipe DevOps complète senior/junior ou qu'une spécialisation qualité trop précoce, tout en conservant l'idée importante d'un pilotage senior et d'un transfert progressif de compétences vers l'équipe.

Ce positionnement est important à défendre. Le sujet mentionne des besoins DevOps larges, mais cela ne signifie pas qu'il faut immédiatement multiplier les profils spécialisés. Une petite structure peut très bien démarrer avec un profil senior pour cadrer la trajectoire, puis organiser une montée en compétence interne afin de limiter la dépendance à une seule personne.

### 2.5. RACI simplifié

| Activité | Product Owner | Développeurs | DevOps senior |
|---|---|---|---|
| Priorisation backlog | Responsable | Consultés | Consulté |
| Développement | Informé | Responsables | Informé |
| Revue de code | Informé | Responsables collectivement | Consulté si impact technique |
| Pipeline CI/CD | Informé | Contributeurs | Responsable |
| Déploiement préproduction | Informé | Consultés | Responsable |
| Déploiement production | Valide | Consultés | Responsable |
| Tests de non-régression | Informé | Responsables collectivement | Consulté |
| Supervision / alertes | Informé | Consultés | Responsable |

---

## 3. Méthode de gestion de projet retenue

### 3.1. Agile pragmatique

Je proposerais une méthode agile simple, sans Scrum complet.

Le fonctionnement retenu serait :

- des **sprints de 2 semaines** ;
- un **backlog unique** priorisé par le Product Owner ;
- une **démonstration de fin de sprint** ;
- une **rétrospective courte** ;
- un **flux Kanban séparé** pour les incidents et urgences.

Cette approche est adaptée à une petite équipe qui doit à la fois produire de la valeur métier et stabiliser son socle technique.

Le choix d'une méthode agile légère est cohérent avec le contexte décrit dans le sujet. GreenCity Tech doit gérer des évolutions produit demandées par les collectivités, mais aussi corriger des fragilités internes importantes : faible couverture de tests, déploiements manuels, absence de préproduction stable, monitoring insuffisant. Un Scrum complet avec un formalisme trop lourd risquerait de consommer du temps sans traiter en priorité les causes de l'instabilité actuelle.

### 3.2. Pourquoi ne pas faire plus lourd

Un cadre trop formel serait contre-productif à ce stade. Les priorités sont d'abord :

- fiabiliser les livraisons ;
- réduire les déploiements manuels ;
- augmenter le niveau de test ;
- clarifier les responsabilités ;
- mieux gérer les demandes client.

### 3.3. Prise en compte des contraintes humaines

L'organisation doit aussi intégrer l'inclusion du développeur concerné par des troubles visuels et une fatigue cognitive accrue en réunion.

Je proposerais donc :

- des réunions courtes et préparées ;
- un ordre du jour écrit à l'avance ;
- des décisions formalisées par écrit ;
- un suivi asynchrone via l'outil projet ;
- une limitation des réunions longues et non structurées.

---

## 4. Outils DevOps retenus

### 4.1. Gestion du code source

Choix retenu : **GitHub**.

Justification :

- gestion des branches ;
- pull requests ;
- protection des branches ;
- intégration native avec GitHub Actions ;
- bonne traçabilité des changements.

GitHub est ici un choix cohérent car il permet de centraliser dans une même plateforme le code source, les pull requests, les protections de branches, une partie du suivi de projet et les workflows CI/CD via GitHub Actions. Cette cohérence réduit la complexité d'outillage et facilite la montée en compétence de l'équipe.

### 4.2. CI/CD

Choix retenu : **GitHub Actions**.

Rôle :

- lancer les contrôles automatiques à chaque pull request ;
- construire les artefacts ;
- construire les images Docker ;
- déployer vers les environnements ;
- garder une trace des exécutions.

Ce choix reste volontairement simple. L'objectif n'est pas de construire une chaîne CI/CD très sophistiquée, mais d'automatiser les points où l'organisation actuelle est la plus fragile : vérification du code avant fusion, exécution des tests, construction des images Docker et déploiement contrôlé sur les environnements.

### 4.3. Conteneurisation

Choix retenu : **Docker**.

Le projet étant hébergé sur des **VPS**, Docker est pertinent pour :

- standardiser l'exécution ;
- éviter les écarts entre postes et serveurs ;
- faciliter le déploiement ;
- simplifier le redémarrage ou le rollback.

### 4.4. Infrastructure as Code

Le sujet impose de traiter l'Infrastructure as Code, mais il n'est pas nécessaire de proposer une solution trop complexe.

Je proposerais une approche simple :

- **Terraform** pour provisionner les VPS, le réseau de base et les règles minimales de sécurité si l'hébergeur le permet ;
- **Docker Compose** versionné dans le dépôt pour décrire les services applicatifs déployés sur les VPS.

Cette approche reste cohérente avec une infrastructure légère. Elle permet de réduire les manipulations manuelles sans introduire une stack d'administration trop lourde.

Le point important est de montrer que l'IaC n'est pas forcément synonyme d'infrastructure cloud complexe. Dans ce projet, on peut défendre une logique progressive :

- l'infrastructure de base des VPS peut être décrite si l'hébergeur propose des ressources pilotables ;
- la description des services applicatifs est versionnée ;
- la reconstruction d'un environnement devient plus reproductible ;
- les déploiements dépendent moins d'actions manuelles faites directement sur les serveurs.

Autrement dit, l'IaC est présente, mais dans un périmètre adapté au niveau de maturité du projet.

### 4.5. Qualité de code

Choix retenus :

- **ESLint** ;
- **SonarQube** éventuellement dans un second temps ;
- revue de code obligatoire ;
- suivi de la couverture de tests dans la CI.

Le but est de bloquer l'intégration d'un code non conforme ou manifestement instable.

### 4.6. Sécurité

Choix retenus :

- **Dependabot** pour la veille de dépendances ;
- audit automatique des dépendances ;
- scan des images Docker avec **Trivy** ;
- gestion des secrets dans **GitHub Secrets** ;
- variables d'environnement côté serveur ;
- interdiction des secrets stockés dans le dépôt.

Cette stratégie reste simple tout en couvrant les risques principaux du sujet.

### 4.7. Tests automatisés

Choix retenus :

- **Jest** pour les tests unitaires ;
- tests d'intégration backend ;
- tests API automatisés ;
- **Cypress** pour les tests end-to-end web ;
- pour le mobile, priorité aux tests unitaires et à une recette manuelle structurée.

Je ne recommanderais pas de partir immédiatement sur une automatisation mobile lourde de type Appium, car ce serait difficile à mettre en place et à maintenir pour ce niveau de maturité.

Il est plus réaliste de concentrer l'automatisation sur les tests apportant le meilleur retour sur effort :

- unitaires pour sécuriser les composants ;
- intégration pour sécuriser les échanges backend ;
- API pour valider les contrats de service ;
- end-to-end web pour couvrir les parcours critiques ;
- recette manuelle structurée pour compléter les limites des tests automatiques, notamment sur mobile.

### 4.8. Supervision et logs

Choix retenu : **Netdata** dans un premier temps.

Ce choix est cohérent avec un hébergement sur VPS et une volonté de rester simple :

- supervision système ;
- métriques de base ;
- alertes ;
- tableaux de bord rapides à mettre en place.

Pour les logs applicatifs, il faudra centraliser a minima les journaux des conteneurs et des applications, sans forcément partir dès le départ sur une stack ELK complète.

En complément, un outil de supervision externe de disponibilité comme **UptimeRobot** peut être pertinent pour vérifier que le portail web et l'API sont réellement accessibles depuis Internet. Cela complète Netdata sans le remplacer.

Ce point est important, car beaucoup de propositions DevOps deviennent artificiellement complexes sur la supervision. Dans ce cas, une supervision simple mais réellement exploitable vaut mieux qu'une stack trop ambitieuse qui ne serait ni maîtrisée ni maintenue correctement.

### 4.9. Suivi des erreurs applicatives

En complément de la supervision système, je proposerais d'ajouter **Sentry** pour suivre les erreurs applicatives sur le portail web, l'API et, si possible, l'application mobile.

Netdata permet surtout de surveiller l'état des serveurs et des ressources système, tandis que Sentry permet d'identifier les erreurs réellement rencontrées par les utilisateurs :

- exceptions applicatives ;
- stack traces ;
- fréquence d'apparition ;
- version concernée ;
- impact réel sur les parcours utilisateurs.

Cette complémentarité entre supervision système et suivi d'erreurs applicatives est plus pertinente qu'un outil unique censé tout couvrir.

### 4.10. Gestion projet et documentation

Choix retenus :

- **GitHub Projects** pour le backlog ;
- **Markdown dans le dépôt** pour la documentation technique ;
- un espace de documentation partagé pour les comptes rendus et le cahier de recette ;
- **Swagger / OpenAPI** pour la documentation API.

---

## 5. Stratégie Git retenue

### 5.1. Principe

Je proposerais une stratégie Git simple avec :

- `main` pour la production ;
- `develop` pour l'intégration ;
- des `tags` ou `releases` pour identifier les versions candidates à déployer en préproduction ;
- des branches courtes `feature/*`, `fix/*`, `hotfix/*`.

Cette stratégie est plus simple qu'un GitFlow complet, tout en étant suffisamment structurée pour une petite équipe.

Elle répond directement à un problème mentionné dans le sujet : les branches Git ne sont pas standardisées. L'enjeu n'est donc pas seulement technique, mais organisationnel. Une stratégie simple permet de rendre le travail de chacun plus lisible, de limiter les erreurs de fusion et de mieux relier les branches aux environnements.

Je ne multiplierais pas les branches longues. La préproduction doit être considérée comme un environnement de validation, pas nécessairement comme une branche permanente. L'usage de tags ou de releases pour identifier les versions candidates évite de créer une branche `preprod` qui risquerait de dériver et d'accumuler des écarts avec la production.

### 5.2. Cycle de vie

1. Une branche `feature/*` est créée depuis `develop`.
2. Le développement se fait avec tests associés.
3. Une pull request est ouverte vers `develop`.
4. La CI exécute lint, tests, build et contrôles de sécurité.
5. Une revue de code est réalisée.
6. La branche est fusionnée si les contrôles sont validés.
7. `develop` est déployée en environnement de développement.
8. Une version validée est identifiée par un tag ou une release, puis déployée en préproduction avant passage en production après validation manuelle.

### 5.3. Règles de protection

Les branches principales doivent être protégées :

- pas de push direct sur `main` ;
- pull request obligatoire ;
- pipeline vert obligatoire ;
- revue de code obligatoire ;
- validation manuelle avant production.

---

## 6. Gestion des environnements

### 6.1. Environnements proposés

Je proposerais trois environnements :

| Environnement | Usage |
|---|---|
| Développement | intégration continue des fonctionnalités |
| Préproduction | recette interne et démonstration client |
| Production | service réel utilisé par les clients |

### 6.2. Principes de gestion

Chaque environnement doit avoir :

- sa configuration propre ;
- ses variables d'environnement ;
- ses secrets propres ;
- ses bases ou jeux de données adaptés ;
- ses déploiements tracés.

### 6.3. Déploiement sur VPS

Dans cette cible, les applications seraient déployées sur des **VPS** :

- un environnement de développement sur VPS ;
- un environnement de préproduction proche de la production ;
- un environnement de production isolé et mieux protégé.

Les services applicatifs seraient lancés via **Docker Compose**, ce qui permet de garder une logique de déploiement homogène entre les environnements.

Le choix des VPS est pertinent si l'on cherche un compromis entre simplicité, coût maîtrisé et contrôle technique. Il reste plus simple à expliquer et à opérer qu'une plateforme d'orchestration plus avancée, tout en étant suffisant pour héberger les composants décrits dans le sujet.

---

## 7. Principes d'automatisation retenus

### 7.1. Contrôles automatiques à chaque pull request

À chaque pull request, la CI doit lancer :

- installation des dépendances ;
- lint `ESLint` ;
- exécution des tests `Jest` ;
- build ;
- audit de dépendances ;
- scan de l'image Docker si nécessaire.

### 7.2. Automatisation des tests

Les tests à automatiser en priorité sont :

- tests unitaires ;
- tests d'intégration ;
- tests API ;
- tests end-to-end web sur les parcours critiques.

Parcours critiques à couvrir :

- création d'un signalement ;
- ajout de photo ;
- géolocalisation ;
- consultation côté collectivité ;
- changement de statut d'un incident.

### 7.3. Automatisation des déploiements

Je proposerais :

- déploiement automatique vers l'environnement de développement ;
- déploiement semi-automatique vers la préproduction ;
- déploiement en production avec validation manuelle.

### 7.4. Automatisation de la sécurité

Les contrôles minimaux à automatiser sont :

- audit des dépendances ;
- scan des images Docker ;
- contrôle de l'absence de secrets dans le dépôt ;
- gestion centralisée des secrets via GitHub.

### 7.5. Automatisation de l'exploitation

Au-delà du pipeline, certains points d'exploitation doivent aussi être anticipés :

- validation des migrations de base de données en développement et en préproduction avant tout passage en production ;
- planification automatique des sauvegardes ;
- contrôle régulier de la bonne exécution des sauvegardes ;
- tests ponctuels de restauration.

### 7.6. Automatisation documentaire

La documentation peut aussi être partiellement automatisée :

- génération de documentation API ;
- historique des déploiements ;
- publication des notes de version ;
- mise à jour du cahier de recette à chaque version importante.

---

## 8. Indicateurs de pilotage projet

Il faut rester sur un nombre limité d'indicateurs, compréhensibles et utiles. Le but n'est pas de produire un tableau de bord trop chargé, mais de suivre quelques indicateurs réellement exploités dans le pilotage du projet.

### 8.1. Indicateurs DevOps

- fréquence de déploiement ;
- lead time entre demande validée et mise en production ;
- taux d'échec des déploiements ;
- MTTR en cas d'incident.

### 8.2. Indicateurs qualité

- couverture de tests ;
- nombre de bugs détectés en préproduction ;
- nombre de bugs détectés en production ;
- taux de réussite des pipelines.

### 8.3. Indicateurs d'exploitation

- disponibilité de la plateforme ;
- temps de réponse API ;
- nombre d'alertes critiques ;
- temps moyen de traitement d'une alerte.

### 8.4. Indicateurs client et organisation

- satisfaction des collectivités ;
- respect des délais annoncés ;
- nombre de demandes d'évolution en attente ;
- part du temps passée sur incidents par rapport aux évolutions.

### 8.5. Lecture budgétaire rapide

Il est utile d'ajouter une lecture budgétaire simple pour justifier les choix d'organisation et d'outillage. L'objectif n'est pas de produire un budget détaillé, mais de montrer que la solution retenue reste cohérente économiquement.

#### Coûts principaux à anticiper

- renfort humain sur le pilotage DevOps senior ;
- temps de montée en compétence d'un développeur de l'équipe sur les sujets DevOps ;
- hébergement des VPS ;
- stockage des images Docker, sauvegardes et journaux ;
- temps passé sur les tests, la revue de code et la structuration documentaire ;
- éventuels coûts supplémentaires liés aux futures évolutions : photos HD, trafic, supervision renforcée.

#### Tableau simplifié des coûts

| Poste | Niveau de coût estimatif | Justification | Intérêt attendu |
|---|---|---|---|
| DevOps senior au démarrage | Élevé | profil expérimenté nécessaire pour poser rapidement des bases fiables | réduction des erreurs de déploiement, structuration de la chaîne CI/CD |
| Montée en compétence d'un développeur | Faible à moyen | coût surtout en temps de formation et d'accompagnement | autonomie progressive de l'équipe, dépendance réduite au senior |
| Structuration qualité interne | Faible | pratiques portées par l'équipe avec appui d'un développeur expérimenté | meilleure cohérence des revues, tests et recette |
| Hébergement VPS | Faible à moyen | solution plus simple et moins coûteuse qu'une plateforme plus avancée | environnement stable, coût maîtrisé, exploitation compréhensible |
| GitHub / GitHub Actions / registre d'images | Faible à moyen | outillage standard, intégré et largement documenté | faible coût d'adoption, traçabilité, automatisation |
| Tests automatisés supplémentaires | Moyen | temps de conception, maintenance des tests et préparation des jeux de données | baisse des régressions, livraisons plus fiables |
| Supervision et journalisation | Faible à moyen | mise en place de Netdata, Sentry et stockage minimum des logs | détection plus rapide des incidents, diagnostic facilité |
| Futurs besoins photos HD / trafic / stockage | Variable, potentiellement croissant | dépend du volume d'usage réel et des évolutions retenues | meilleure anticipation des coûts d'exploitation à moyen terme |

#### Estimation globale par chantier

Les montants ci-dessous restent des ordres de grandeur indicatifs pour une phase initiale de transformation de **3 à 6 mois**, hors développement fonctionnel majeur des futures évolutions produit.

| Chantier | Contenu principal | Estimation initiale |
|---|---|---|
| Partie 1 - Organisation et méthodologie | cadrage, gouvernance, structuration des rôles, accompagnement de l'équipe | **8 k€ à 15 k€** |
| Partie 2 - Mise en œuvre technique DevOps | CI/CD, conteneurisation, environnements, déploiement, supervision de base | **18 k€ à 35 k€** |
| Partie 3 - Qualité, conformité et sécurité | stratégie de tests, sécurisation de la chaîne, conformité web/mobile/RGPD | **10 k€ à 20 k€** |
| Partie 4 - Relation client et évolutions | cadrage des demandes, priorisation, roadmap, analyse d'impact des évolutions | **4 k€ à 8 k€** |
| Partie 5 - Inclusion et management humain | adaptation du fonctionnement d'équipe, accompagnement managérial, documentation des pratiques | **3 k€ à 7 k€** |

#### Estimation globale du projet de transformation

En regroupant ces chantiers, on peut défendre une enveloppe globale de l'ordre de :

- **43 k€ à 85 k€** pour la transformation initiale ;
- hors développement de nouvelles fonctionnalités lourdes comme le chatbot, la cartographie temps réel avancée ou un traitement massif de photos HD ;
- avec une montée en charge progressive plutôt qu'un investissement massif immédiat.

#### Coûts d'exploitation récurrents à anticiper

Au-delà de la mise en place initiale, il faut aussi anticiper des coûts récurrents :

| Poste récurrent | Ordre de grandeur |
|---|---|
| VPS, sauvegardes, registre, stockage technique | **300 € à 1 000 € / mois** |
| Supervision, journalisation, outillage complémentaire | **100 € à 500 € / mois** selon volumétrie |
| Temps d'exploitation, maintenance pipeline, revue qualité | intégré au fonctionnement de l'équipe, avec charge récurrente non nulle |

L'intérêt de cette estimation n'est pas de prétendre à un budget figé, mais de montrer que la trajectoire proposée reste économiquement crédible et progressive.

#### Arbitrages retenus pour contenir les coûts

- ne pas créer immédiatement une équipe DevOps complète ;
- ne pas recruter de QA dédié au démarrage ;
- conserver les 4 développeurs du prototype pour éviter une perte de connaissance et un coût de reconstitution ;
- choisir des outils cohérents et largement connus : GitHub, GitHub Actions, Docker, ESLint, Jest, Cypress ;
- rester sur une infrastructure VPS simple plutôt que sur une plateforme plus complexe à opérer ;
- mettre en place une supervision raisonnable plutôt qu'une stack d'observabilité trop lourde dès le départ.

#### Justification économique des choix d'équipe

Le choix d'un DevOps senior avec montée en compétence progressive d'un développeur est plus défendable qu'un dispositif plus lourd :

- il réduit le coût salarial initial par rapport à une équipe DevOps complète ;
- il permet de poser rapidement un cadre technique solide ;
- il évite une dépendance durable à des profils très spécialisés si le transfert de compétences est organisé ;
- il reste compatible avec la taille actuelle de l'équipe et le niveau de maturité du projet.

#### Idée forte à défendre

L'organisation proposée ne cherche pas le coût minimal absolu, mais le meilleur compromis entre :

- coût de mise en place ;
- réduction des incidents ;
- amélioration de la qualité ;
- capacité à livrer plus régulièrement ;
- maîtrise progressive de la dette technique et des risques d'exploitation.

---

## 9. Justification globale des choix

Les choix retenus sont volontairement pragmatiques.

Ils répondent au sujet sans surdimensionner la solution :

- l'équipe reste compacte ;
- les outils sont connus et cohérents entre eux ;
- l'hébergement sur VPS reste compatible avec Docker et une CI/CD simple ;
- la sécurité est traitée à un niveau réaliste ;
- l'IaC est présente, mais sous une forme progressive et maîtrisable ;
- la supervision reste simple au démarrage ;
- l'organisation tient compte des contraintes humaines.

L'idée n'est pas de viser immédiatement une plateforme DevOps avancée, mais d'obtenir rapidement une chaîne de livraison plus fiable, plus traçable et plus facile à maintenir.

Cette logique vaut aussi pour l'infrastructure : le choix d'une base simple sur VPS n'empêche pas une évolution ultérieure vers des services cloud plus managés si la charge, la disponibilité attendue ou la complexité d'exploitation l'exigent. Le point important est de ne pas surdimensionner la cible avant que le besoin réel soit établi.

---

## 10. Points d'appui pour la suite

Ce document a vocation à servir de base de travail pour construire ensuite l'oral et les autres livrables. Les points les plus structurants à réutiliser dans la suite seront :

- l'organisation cible de l'équipe et la répartition des responsabilités ;
- la justification d'une méthode agile légère ;
- le choix d'une stack simple et cohérente autour de GitHub, Docker et VPS ;
- la formalisation d'une stratégie Git liée aux environnements ;
- la définition de contrôles automatiques minimaux mais systématiques ;
- un nombre limité d'indicateurs de pilotage réellement exploitables.

La logique générale à conserver est la suivante : proposer une démarche DevOps complète sur le principe, mais volontairement progressive dans sa mise en œuvre, afin qu'elle reste crédible au regard de la taille de l'équipe, du niveau de maturité initial et des contraintes du sujet.
