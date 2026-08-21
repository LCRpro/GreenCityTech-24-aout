# Synthèse orale — Présentation GreenCity Tech

## 1. Objectif de ce document

Ce document sert de base pour préparer la présentation orale de 20 minutes sur GreenCity Tech.

Les cinq parties de fond ont déjà été structurées :

1. Organisation et méthodologie DevOps ;
2. Mise en œuvre technique DevOps ;
3. Qualité, conformité et sécurité applicative ;
4. Relation client, gestion des évolutions et priorisation ;
5. Inclusion, management d'équipe et accompagnement humain.

L'objectif n'est plus d'ajouter du contenu, mais de construire un fil conducteur clair, cohérent et défendable à l'oral.

La présentation doit montrer comment GreenCity Tech peut passer d'un prototype fragile à une plateforme fiable, industrialisée, sécurisée, observable et capable d'évoluer avec les collectivités, tout en restant réaliste par rapport à la taille de l'équipe.

---

## 2. Fil rouge de la présentation

Le fil rouge proposé est le suivant :

> GreenCity Tech doit passer d'un prototype fragile à une plateforme industrialisée, fiable, sécurisée, observable et capable d'évoluer avec les collectivités, sans surdimensionner l'organisation ni négliger les contraintes humaines.

Cette phrase doit guider toute la présentation.

Elle permet d'éviter deux erreurs :

- proposer une solution trop théorique ou trop lourde ;
- se limiter à une réponse purement technique sans parler d'organisation, de client, de qualité ou d'inclusion.

La logique générale est :

```text
Prototype fragile
    ↓
Organisation clarifiée
    ↓
Chaîne DevOps automatisée
    ↓
Qualité et sécurité intégrées
    ↓
Demandes client maîtrisées
    ↓
Équipe soutenable et inclusive
```

---

## 3. Positionnement général

La posture à adopter est celle d'un consultant ou responsable DevOps pragmatique.

L'idée n'est pas de dire :

> Il faut tout refaire avec une grosse plateforme cloud, Kubernetes, une équipe QA complète et une organisation Scrum très lourde.

L'idée est plutôt de dire :

> GreenCity Tech doit industrialiser progressivement son fonctionnement, en commençant par les points les plus risqués : déploiements manuels, absence de préproduction stable, manque de tests, monitoring insuffisant, demandes client non cadrées et contraintes humaines mal prises en compte.

La proposition doit donc rester :

- progressive ;
- réaliste ;
- adaptée à une petite équipe ;
- orientée qualité ;
- centrée sur la valeur client ;
- compatible avec les contraintes humaines.

---

## 4. Introduction générale proposée

GreenCity Tech dispose aujourd'hui d'un prototype fonctionnel, mais fragile.

La plateforme répond à un besoin réel : permettre aux citoyens de signaler des incidents urbains et aux collectivités de les suivre et les traiter. Cependant, le fonctionnement actuel présente plusieurs limites : déploiements manuels, faible couverture de tests, absence de préproduction stable, monitoring insuffisant, documentation incomplète et demandes client qui se multiplient.

Dans ce contexte, l'enjeu n'est pas seulement d'ajouter des outils DevOps. Il faut mettre en place une transformation globale : structurer l'équipe, automatiser les livraisons, renforcer la qualité, sécuriser les données, cadrer les demandes client et intégrer les contraintes humaines dans l'organisation du travail.

Ma proposition consiste donc à faire évoluer GreenCity Tech vers une organisation DevOps progressive, capable de fiabiliser le produit sans créer une structure disproportionnée par rapport à la taille actuelle de l'équipe.

---

## 5. Plan général de l'oral

La présentation peut suivre le plan suivant :

| Partie | Question traitée |
|---|---|
| 1. Organisation et méthodologie DevOps | Comment organiser l'équipe et la méthode de travail ? |
| 2. Mise en œuvre technique DevOps | Comment industrialiser techniquement les livraisons ? |
| 3. Qualité, conformité et sécurité | Comment garantir que le produit livré est fiable, sécurisé et conforme ? |
| 4. Gestion produit et évolutions | Comment faire évoluer une plateforme multi-collectivités sans désorganiser le projet ? |
| 5. Inclusion et management humain | Comment rendre la transformation soutenable pour l'équipe ? |

---

# Partie 1 — Organisation et méthodologie DevOps

## 6. Idées fortes à défendre

### 6.1. Structurer sans surdimensionner

GreenCity Tech part d'un prototype développé rapidement par 4 développeurs. Il ne faut donc pas créer immédiatement une organisation trop lourde avec plusieurs équipes spécialisées.

Le choix retenu est une organisation légère :

- un Product Owner au centre ;
- les 4 développeurs existants conservés ;
- un DevOps senior pour poser les fondations ;
- un développeur de l'équipe qui monte progressivement en compétence sur les sujets DevOps ;
- une qualité portée collectivement par l'équipe, avec appui d'un développeur expérimenté pour structurer les pratiques de validation.

L'objectif est de clarifier les responsabilités sans créer de nouveaux silos.

### 6.2. Product Owner comme point d'entrée

Le Product Owner doit centraliser les besoins des collectivités, prioriser le backlog et éviter que les demandes arrivent directement aux développeurs.

Il joue un rôle clé pour :

- recueillir les besoins ;
- arbitrer les priorités ;
- organiser les validations ;
- protéger l'équipe des interruptions client directes ;
- maintenir une vision produit cohérente.

### 6.3. Agile pragmatique

La méthode proposée est agile, mais sans formalisme excessif.

Fonctionnement retenu :

- cycles de travail courts ;
- backlog priorisé ;
- démonstrations régulières ;
- rétrospectives courtes ;
- Kanban séparé pour les incidents.

L'objectif est d'améliorer la visibilité et la capacité d'adaptation, sans imposer un Scrum complet trop lourd pour la taille de l'équipe.

### 6.4. Stratégie Git et environnements

La stratégie Git repose sur :

- `main` pour la production ;
- `develop` pour l'intégration ;
- branches courtes `feature/*`, `fix/*`, `hotfix/*` ;
- releases ou tags pour identifier les versions candidates.

Les environnements retenus :

- intégration ;
- préproduction ;
- production.

La préproduction est considérée comme un environnement de validation, pas forcément comme une branche permanente.

### 6.5. Lecture budgétaire rapide

Les choix d'organisation et d'outillage doivent aussi être défendus économiquement :

- pas d'équipe DevOps complète dès le départ ;
- pas de QA dédié au démarrage ;
- conservation des 4 développeurs du prototype ;
- un DevOps senior pour cadrer, avec montée en compétence progressive d'un développeur ;
- outils simples et connus pour limiter les coûts d'adoption et d'exploitation.

L'idée à faire passer est que la solution retenue cherche le meilleur compromis entre coût, fiabilité, qualité de livraison et capacité de montée en maturité.

## 7. Exemple concret à citer

Aujourd'hui, si une collectivité demande une évolution, le risque est qu'elle arrive directement à un développeur, sans cadrage ni arbitrage.

Avec l'organisation proposée :

1. la demande passe par le Product Owner ;
2. elle est qualifiée ;
3. elle est estimée ;
4. elle est priorisée ;
5. elle est intégrée au backlog si elle est validée.

Cela évite les changements de priorité permanents et permet de protéger la stabilité du projet.

## 8. Transition vers la partie 2

Une fois l'organisation clarifiée, il faut mettre en place la chaîne technique qui permet de livrer de façon fiable. C'est l'objet de la mise en œuvre DevOps : automatiser les contrôles, les builds, les déploiements et le suivi en production.

---

# Partie 2 — Mise en œuvre technique DevOps

## 9. Idées fortes à défendre

### 9.1. Supprimer les déploiements manuels

Le développeur ne doit plus déployer directement depuis son poste.

Toute modification doit passer par :

- GitHub ;
- une pull request ;
- des contrôles automatisés ;
- une revue de code ;
- un build Docker ;
- un déploiement contrôlé vers les environnements.

Cela rend les déploiements plus fiables, plus traçables et plus reproductibles.

### 9.2. Pipeline CI/CD détaillé

La CI/CD doit couvrir plusieurs jobs, mais pas tous au même moment ni au même coût :

- contrôles rapides sur pull request : lint, tests applicatifs, audit dépendances, accessibilité ;
- build applicatif et build Docker ;
- mise en place d'un environnement de test pour les contrôles plus complets ;
- tests E2E web sur environnement cohérent ;
- déploiement intégration ;
- déploiement préproduction ;
- validation métier hors CI ;
- sauvegarde ;
- déploiement production manuel ;
- smoke tests ;
- monitoring check ;
- rollback si incident critique.

L'intérêt est de montrer que la CI/CD ne se limite pas à "tester et déployer", mais constitue une vraie chaîne de sécurisation. Il faut aussi préciser que la chaîne principale concerne surtout le web, le dashboard et l'API, tandis que le mobile reste plus progressif au départ : tests unitaires, build de validation si possible, puis recette manuelle structurée.

Cette différence n'est pas un manque d'ambition, mais un choix de réalisme. Le mobile impose des contraintes spécifiques de build, de diffusion et de validation qui justifient une montée en automatisation plus progressive.

### 9.3. Architecture simple et progressive

La stack proposée reste adaptée à une petite structure :

- GitHub ;
- GitHub Actions ;
- Docker ;
- Docker Compose ;
- VPS ;
- GitHub Container Registry ou Docker Hub privé ;
- Netdata ;
- Sentry ;
- logs Docker puis centralisation progressive ;
- Terraform ou Ansible uniquement si le besoin se confirme.

L'objectif n'est pas de proposer Kubernetes dès le départ, mais de poser un socle simple et maîtrisable.

Il faut aussi préciser que ce choix n'interdit pas une trajectoire future vers des services cloud plus managés. Cette évolution ne serait justifiée que si la charge, la disponibilité attendue ou les contraintes d'exploitation augmentaient réellement.

### 9.4. Observabilité et rollback

La production doit être observable :

- supervision système avec Netdata ;
- supervision externe de disponibilité avec UptimeRobot ou équivalent ;
- erreurs applicatives avec Sentry ;
- logs structurés ;
- indicateurs métier ;
- alertes utiles.

Il faut bien distinguer ces niveaux : Netdata répond à la santé système, UptimeRobot à la disponibilité vue depuis l'extérieur, Sentry aux erreurs applicatives réelles, et les logs au diagnostic détaillé. Cette séparation évite de promettre une observabilité trop large avec des outils mal adaptés au niveau de maturité actuel.

Le rollback doit être prévu :

- images Docker versionnées ;
- conservation de la version précédente ;
- sauvegarde avant release sensible ;
- smoke tests après déploiement ;
- retour rapide à l'image N-1 si incident critique.

## 10. Exemple concret à citer

Lorsqu'une nouvelle version est prête :

1. elle est construite sous forme d'image Docker ;
2. elle est déployée en préproduction ;
3. les migrations sont testées ;
4. les parcours critiques sont rejoués ;
5. le Product Owner valide ;
6. la production est déployée avec sauvegarde préalable ;
7. des smoke tests et contrôles de monitoring sont lancés ;
8. un rollback est possible si une anomalie critique apparaît.

## 11. Transition vers la partie 3

Automatiser les livraisons ne suffit pas. Il faut aussi garantir que ce qui est livré est fiable, sécurisé, conforme et utilisable. C'est l'objet de la stratégie qualité, conformité et sécurité applicative.

---

# Partie 3 — Qualité, conformité et sécurité applicative

## 12. Idées fortes à défendre

### 12.1. La qualité est globale

La qualité ne se limite pas aux tests.

Elle couvre :

- la qualité fonctionnelle ;
- la qualité technique ;
- la qualité d'usage ;
- la qualité d'exploitation.

Pour GreenCity Tech, cela signifie que le produit doit être fiable pour les citoyens, utile pour les collectivités, maintenable pour l'équipe et exploitable en production.

### 12.2. Prioriser les parcours critiques

Il ne faut pas chercher à tout automatiser immédiatement.

Les tests doivent d'abord couvrir les parcours critiques :

- création de compte ;
- connexion ;
- création d'un signalement ;
- ajout de photo ;
- géolocalisation ;
- consultation de la carte ;
- traitement municipal ;
- API partenaire.

Ces parcours portent la valeur principale du produit.

### 12.3. Definition of Done

Une fonctionnalité n'est pas terminée lorsqu'elle est simplement codée.

Elle doit être :

- comprise ;
- développée ;
- testée ;
- relue ;
- validée par la CI ;
- documentée si nécessaire ;
- vérifiée en préproduction ;
- validée par le Product Owner ;
- contrôlée sur les impacts sécurité ou RGPD si besoin.

La Definition of Done transforme la qualité en condition concrète de livraison.

### 12.4. Sécurité et RGPD

GreenCity Tech manipule des données sensibles :

- comptes citoyens ;
- géolocalisation ;
- photos ;
- historique des signalements ;
- données des collectivités ;
- futurs échanges avec un chatbot.

Il faut donc prévoir :

- minimisation des données ;
- permissions claires pour caméra et géolocalisation ;
- durée de conservation ;
- accès limités ;
- suppression des métadonnées EXIF inutiles ;
- pas de données personnelles dans les logs ;
- séparation des données réelles et des données de préproduction.

### 12.5. Accessibilité

La plateforme est citoyenne. Elle doit donc être utilisable par des profils variés :

- personnes âgées ;
- utilisateurs peu à l'aise avec le numérique ;
- personnes avec troubles visuels ;
- utilisateurs mobiles ;
- utilisateurs avec réseau faible.

Le RGAA peut servir de référentiel pour cadrer l'accessibilité web.

## 13. Exemple concret à citer

L'ajout de photos HD peut sembler simple côté utilisateur, mais c'est en réalité un sujet complet :

- poids des fichiers ;
- coût de stockage ;
- temps d'upload ;
- performance mobile ;
- métadonnées EXIF ;
- visages ou plaques visibles ;
- modération éventuelle ;
- durée de conservation ;
- sauvegardes ;
- RGPD.

Cela montre pourquoi chaque évolution doit être analysée en qualité, sécurité et exploitation.

## 14. Transition vers la partie 4

Une fois la qualité et la sécurité cadrées, il faut organiser la façon d'intégrer les nouvelles demandes des collectivités. L'enjeu est de faire évoluer le produit sans fragiliser le socle existant.

---

# Partie 4 — Gestion produit, évolutions et priorisation

## 15. Idées fortes à défendre

### 15.1. Ne pas subir les demandes spécifiques

Les collectivités peuvent faire remonter de nombreux besoins. Le risque est de transformer la plateforme en empilement de demandes locales, sans mesurer le coût réel ni l'intérêt produit global.

La gouvernance produit doit donc être structurée :

- un canal clair de demande ;
- qualification par le Product Owner ;
- analyse fonctionnelle ;
- analyse technique ;
- estimation ;
- arbitrage ;
- priorisation ;
- validation en préproduction.

### 15.2. Prioriser selon valeur, effort et risque

La priorisation ne doit pas reposer uniquement sur l'urgence ressentie.

Elle doit prendre en compte :

- la valeur métier ;
- l'intérêt pour plusieurs collectivités ;
- l'effort de réalisation ;
- le coût d'exploitation ;
- les risques techniques ;
- les impacts RGPD ;
- les prérequis de stabilisation ;
- la capacité réelle de l'équipe.

Des outils simples peuvent être utilisés :

- matrice valeur / effort ;
- méthode MoSCoW ;
- backlog priorisé.

### 15.3. Analyse des trois demandes principales

#### Cartographie temps réel

Valeur forte, mais impacts importants :

- performance API ;
- requêtes fréquentes ;
- cache ;
- géolocalisation ;
- droits par collectivité ;
- affichage mobile.

Approche proposée : commencer par une carte améliorée avec rafraîchissement maîtrisé, avant un vrai temps réel complet.

#### Photos HD

Valeur métier réelle, mais impacts :

- stockage ;
- coût ;
- upload ;
- compression ;
- métadonnées ;
- RGPD ;
- modération.

Approche proposée : meilleure qualité, mais avec compression, limite de taille et surveillance du stockage.

#### Chatbot citoyen

Potentiel intéressant, mais risques :

- réponses incorrectes ;
- données personnelles ;
- supervision ;
- coût d'usage ;
- besoin de cadrage RGPD.

Approche proposée : commencer par une FAQ guidée ou un assistant simple avant un chatbot connecté aux données.

### 15.4. Trajectoire par lots

Les évolutions doivent être découpées progressivement :

1. stabilisation des parcours existants ;
2. amélioration de la cartographie simple ;
3. amélioration contrôlée des photos ;
4. assistant citoyen simple ;
5. temps réel plus avancé si besoin confirmé ;
6. chatbot plus intégré si cadre validé.

## 16. Exemple concret à citer

Une ou plusieurs collectivités expriment un besoin d'assistance citoyenne.

Réponse proposée :

- ne pas refuser immédiatement ;
- ne pas promettre un chatbot complet immédiatement ;
- qualifier le besoin réel et vérifier s'il peut devenir un module produit générique ;
- commencer par une FAQ guidée ;
- mesurer les questions fréquentes ;
- cadrer les données traitées ;
- vérifier le RGPD ;
- connecter progressivement aux données si la valeur est démontrée.

## 17. Transition vers la partie 5

La transformation ne dépend pas seulement des outils, des pipelines ou des priorités client. Elle dépend aussi de la capacité de l'équipe à travailler dans un cadre soutenable et inclusif. C'est d'autant plus important dans le sujet puisqu'un développeur rencontre des troubles visuels et une fatigue cognitive en réunion.

---

# Partie 5 — Inclusion, management d'équipe et accompagnement humain

## 18. Idées fortes à défendre

### 18.1. L'inclusion fait partie de la transformation DevOps

Le DevOps n'est pas seulement une affaire d'outils. C'est aussi une culture de collaboration, de documentation, de clarté et d'amélioration continue.

Les pratiques inclusives renforcent donc directement la démarche DevOps.

### 18.2. Adapter l'environnement sans diminuer l'exigence

L'objectif n'est pas de réduire les exigences professionnelles.

L'objectif est d'adapter le cadre pour permettre au développeur concerné de contribuer efficacement :

- outils configurables ;
- documentation lisible ;
- réunions mieux structurées ;
- décisions écrites ;
- communication asynchrone ;
- charge cognitive mieux maîtrisée.

### 18.3. Troubles visuels

Mesures proposées :

- écran adapté ;
- zoom ;
- police lisible ;
- thème IDE adapté ;
- contraste suffisant ;
- documentation claire ;
- outils compatibles clavier ou lecteur d'écran si besoin ;
- tableaux de bord lisibles ;
- ne pas transmettre d'information uniquement par couleur.

### 18.4. Fatigue cognitive

Mesures proposées :

- réunions courtes ;
- ordre du jour ;
- durée limitée ;
- compte rendu ;
- décisions écrites ;
- moins d'interruptions ;
- plages de concentration ;
- tâches mieux découpées ;
- priorités explicites.

### 18.5. Management et confidentialité

Il faut distinguer :

- le Product Owner, qui protège l'équipe des sollicitations client directes ;
- le management de proximité, qui veille aux conditions de travail ;
- le DevOps senior et l'équipe elle-même, qui stabilisent progressivement les pratiques techniques.

Les adaptations doivent respecter la confidentialité de la personne concernée et ne pas devenir un sujet de stigmatisation.

## 19. Exemple concret à citer

Une réunion longue et confuse sur une décision technique peut fatiguer inutilement l'équipe et exclure certains profils.

Avec les pratiques proposées :

1. le sujet est préparé à l'avance ;
2. les documents sont partagés avant ;
3. la réunion dure 30 à 45 minutes ;
4. les décisions sont écrites ;
5. les actions sont assignées ;
6. les personnes absentes ou fatiguées peuvent retrouver l'information ensuite.

Cette pratique aide le développeur concerné, mais améliore aussi l'efficacité de toute l'équipe.

## 20. Transition vers la conclusion

L'ensemble des propositions forme une trajectoire cohérente : organisation, technique, qualité, client et humain. GreenCity Tech peut ainsi stabiliser son socle tout en préparant ses évolutions futures.

---

# Conclusion générale

## 21. Conclusion proposée

La solution proposée ne cherche pas à transformer GreenCity Tech en grande plateforme cloud complexe dès le départ.

Elle vise d'abord à stabiliser le socle existant :

- clarifier les responsabilités ;
- automatiser les contrôles ;
- fiabiliser les déploiements ;
- mettre en place une vraie préproduction ;
- renforcer les tests ;
- sécuriser les données ;
- superviser la production ;
- cadrer les demandes client ;
- rendre l'organisation plus inclusive.

Cette trajectoire permet à GreenCity Tech de passer d'un prototype risqué à une plateforme plus fiable, plus maintenable et plus adaptée aux attentes des collectivités.

Le point important est que la transformation proposée reste progressive. Elle répond aux problèmes actuels sans surdimensionner la solution. Elle permet de livrer plus régulièrement, avec moins de risques, tout en préparant les futures évolutions comme la cartographie plus dynamique, les photos HD ou le chatbot citoyen.

Enfin, la démarche DevOps ne se limite pas à l'automatisation technique. Elle repose aussi sur une meilleure collaboration, une documentation plus claire, une relation client mieux cadrée et une organisation de travail soutenable pour l'équipe.

---

## 22. Message final à retenir

> GreenCity Tech ne doit pas seulement livrer plus vite. Elle doit livrer mieux : avec une organisation claire, une chaîne DevOps fiable, une qualité mesurable, une relation client maîtrisée et une équipe capable de travailler durablement dans de bonnes conditions.

---

# Annexes de préparation orale

## 23. Messages clés par partie

| Partie | Message clé |
|---|---|
| Organisation | Structurer l'équipe sans la surdimensionner |
| Technique DevOps | Automatiser et tracer la livraison logicielle |
| Qualité / conformité | Ne pas livrer une fonctionnalité non testée, non sécurisée ou non validée |
| Relation client | Prioriser les demandes selon valeur, effort, risque et capacité réelle |
| Inclusion | Adapter l'organisation pour permettre à chacun de contribuer efficacement |

---

## 24. Risques à éviter dans la présentation

### 24.1. Trop de buzzwords

Éviter de citer trop d'outils sans expliquer pourquoi ils sont utiles.

Mauvais réflexe :

> Kubernetes, ELK, Terraform, Grafana, Prometheus, Scrum, SAFe...

Meilleure posture :

> Je choisis GitHub Actions, Docker, VPS, Netdata et Sentry parce que cela répond au besoin actuel sans surdimensionner l'infrastructure.

### 24.2. Oublier le contexte GreenCity Tech

Il faut toujours rattacher les propositions au cas :

- signalements citoyens ;
- photos ;
- géolocalisation ;
- collectivités ;
- dashboard municipal ;
- API partenaires ;
- futurs modules.

### 24.3. Promettre trop vite les nouvelles fonctionnalités

Cartographie temps réel, photos HD et chatbot doivent être présentés comme des évolutions à cadrer, pas comme des ajouts immédiats sans risque.

### 24.4. Faire du DevOps uniquement technique

Le DevOps doit être présenté comme une démarche globale :

- organisation ;
- automatisation ;
- qualité ;
- client ;
- humain.

---

## 25. Phrases utiles à l'oral

- GreenCity Tech doit d'abord stabiliser son socle avant d'empiler de nouvelles fonctionnalités.
- La préproduction doit devenir un passage obligatoire avant toute mise en production.
- L'automatisation ne supprime pas le contrôle : elle le rend traçable et reproductible.
- Une fonctionnalité n'est pas terminée quand elle est codée, mais quand elle est testée, validée et déployable.
- Une demande client doit être qualifiée avant d'être planifiée.
- Les photos HD ne sont pas seulement une évolution d'interface, mais aussi un sujet de stockage, de performance et de RGPD.
- Le chatbot doit commencer par un périmètre maîtrisé avant d'être connecté à des données sensibles.
- L'inclusion ne vient pas en plus du DevOps : elle améliore la qualité de l'organisation DevOps.
- La solution proposée est progressive, car elle doit être soutenable pour une petite équipe.
