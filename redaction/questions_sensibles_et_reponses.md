# Questions sensibles et réponses défendables

## 1. Objectif du document

Ce document sert à préparer les questions de fond qui peuvent être posées à l'oral sur les choix d'organisation, de déploiement, de qualité et d'exploitation.

L'idée n'est pas d'apprendre des réponses par cœur, mais d'avoir des formulations courtes, cohérentes et défendables.

---

## 2. Organisation et équipe

### Pourquoi ne pas avoir recruté un QA dédié ?

Réponse défendable :

Pour une équipe de cette taille, un QA dédié serait difficile à justifier au démarrage. Nous avons préféré renforcer la qualité par un référent qualité, des revues de code, des tests automatisés et une recette structurée. Si le produit grossit fortement, un profil QA pourra devenir pertinent plus tard.

### Pourquoi ne pas avoir une équipe DevOps complète ?

Réponse défendable :

Le besoin principal au démarrage est de poser un cadre fiable, pas de multiplier les profils spécialisés. Le choix d'un DevOps senior avec montée en compétence progressive d'un développeur permet d'obtenir un pilotage solide tout en restant cohérent avec la taille actuelle de l'équipe.

### Pourquoi conserver les 4 développeurs du prototype ?

Réponse défendable :

Ils portent déjà une connaissance importante de l'existant. Les remplacer immédiatement coûterait cher et ferait perdre du temps. Le bon levier n'est pas de reconstruire l'équipe, mais de structurer son fonctionnement : Git, revues, tests, CI/CD, documentation et responsabilités claires.

---

## 3. Déploiement, cloud et infrastructure

### Pourquoi être resté sur des VPS et Docker au lieu d'une plateforme cloud plus avancée ?

Réponse défendable :

Le choix VPS + Docker est volontairement sobre. Il est plus économique, plus simple à opérer et mieux aligné avec les compétences réellement maîtrisées au démarrage. Une évolution vers des services cloud plus managés pourra être étudiée plus tard si la charge, la disponibilité attendue ou la complexité d'exploitation augmentent réellement.

### Pourquoi pas Kubernetes dès le départ ?

Réponse défendable :

Kubernetes apporte de la puissance, mais aussi une complexité d'exploitation élevée. Dans notre cas, ce serait prématuré. Nous cherchons d'abord à fiabiliser les livraisons, standardiser les environnements et améliorer la supervision sans surdimensionner l'infrastructure.

### En quoi votre approche relève quand même de l'IaC ?

Réponse défendable :

Nous retenons une logique progressive. Docker Compose versionné décrit déjà les services applicatifs et leur assemblage. Si le besoin de provisionnement devient plus fort, Terraform pourra compléter ce socle. L'IaC est donc présente, mais dans un périmètre proportionné à la maturité réelle du projet.

---

## 4. CI/CD et tests

### Pourquoi votre pipeline CI/CD ne traite-t-il pas le mobile comme le web/backend ?

Réponse défendable :

Le mobile a des contraintes spécifiques : signature, distribution, builds plus lourds, diffusion sur stores. La chaîne principale concerne donc surtout le web, le dashboard et l'API. Pour le mobile, nous retenons au départ des tests unitaires, un build de validation si possible et une recette manuelle structurée.

### Pourquoi les tests E2E ne sont-ils pas placés dès les premiers jobs ?

Réponse défendable :

Parce que des tests E2E réalistes demandent souvent plus qu'un simple contrôle rapide : application buildée, environnement cohérent, base de données de test, jeux de données ou déploiement temporaire. Ils doivent donc être positionnés plus tard dans la chaîne que le lint ou les tests rapides de pull request.

### Pourquoi avoir ajouté un contrôle d'accessibilité dans la CI ?

Réponse défendable :

L'accessibilité est importante pour un service citoyen. Un contrôle automatisé ne remplace pas la validation humaine, mais il permet de détecter rapidement certaines régressions majeures. Il s'agit donc d'un premier niveau de conformité utile et réaliste.

---

## 5. Supervision, logs et exploitation

### Pourquoi Netdata et Sentry plutôt qu'une stack plus complète type Prometheus / Grafana / Loki ?

Réponse défendable :

Nous avons choisi une base simple et exploitable immédiatement. Netdata couvre la santé système, Sentry couvre les erreurs applicatives, et les logs servent au diagnostic. Une stack plus avancée pourra être envisagée plus tard si la volumétrie, les besoins de corrélation ou la complexité d'exploitation le justifient.

### Comment distinguez-vous supervision, logs et observabilité ?

Réponse défendable :

La supervision système permet de suivre l'état des serveurs et des ressources. Les logs servent au diagnostic détaillé. L'observabilité applicative couvre plutôt les erreurs, traces utiles et comportements anormaux. Nous ne prétendons pas tout industrialiser d'emblée, mais nous posons les premières briques de manière cohérente.

### Que faites-vous sur les sauvegardes et la restauration ?

Réponse défendable :

Les sauvegardes doivent être planifiées, contrôlées et testées ponctuellement en restauration. L'enjeu n'est pas seulement de sauvegarder, mais de vérifier qu'un retour est réellement possible en cas d'incident.

---

## 6. Sécurité, RGPD et données

### Votre sécurité n'est-elle pas encore trop légère ?

Réponse défendable :

Nous assumons un niveau de sécurité réaliste au démarrage : audit des dépendances, scan d'images Docker, gestion des secrets hors dépôt, séparation des environnements, supervision et bonnes pratiques applicatives. L'objectif est de traiter les risques principaux immédiatement, puis de monter en maturité progressivement.

### Comment défendez-vous la conformité RGPD ?

Réponse défendable :

Le projet manipule potentiellement des photos, de la géolocalisation et des données d'usage. Nous retenons donc une logique de minimisation, de séparation des environnements, d'anonymisation en préproduction, de contrôle des données conservées et de vigilance sur les accès et les journaux.

### Comment gérez-vous les photos HD dans une logique responsable ?

Réponse défendable :

Les photos HD ne sont pas qu'un sujet d'interface. Elles impliquent stockage, bande passante, compression, coûts d'exploitation, éventuellement modération et vigilance RGPD. C'est précisément pour cela qu'elles sont traitées comme une évolution à cadrer, pas comme un ajout anodin.

---

## 7. Budget et arbitrages

### Pourquoi ne pas avoir donné un budget très précis ?

Réponse défendable :

Nous avons volontairement donné des ordres de grandeur et des arbitrages plutôt qu'un faux chiffrage ultra-précis. Sans hypothèses RH, d'hébergement et de charge plus détaillées, une précision artificielle serait moins crédible qu'une fourchette assumée.

### Pourquoi investir dans un DevOps senior si le budget est surveillé ?

Réponse défendable :

Parce qu'il permet de réduire rapidement des coûts cachés très réels : erreurs de déploiement, perte de temps, incidents, manque de traçabilité, dette d'exploitation. Le coût initial est plus élevé qu'un simple bricolage, mais le compromis est meilleur à moyen terme.

### Pourquoi ne pas avoir choisi la solution la moins chère possible ?

Réponse défendable :

L'objectif n'est pas le coût minimum absolu, mais le meilleur compromis entre coût, fiabilité, qualité, risque et montée en maturité. Une solution trop pauvre aujourd'hui coûterait souvent plus cher demain en incidents, régressions ou dette technique.

---

## 8. Suivi budgétaire, écarts et incidents

### Comment suivez-vous concrètement le budget dans le temps ?

Réponse défendable :

Je raisonne au niveau du budget **projet** (RH de l'équipe, infrastructure, outils) — de l'ordre de 30 k€/mois, ~120 k€ sur la phase de structuration, la RH pesant l'essentiel, avec des coûts journaliers **différenciés par profil** (développeur ~225 €, Product Owner ~250 €, DevOps senior ~300 €). Au-delà de cette estimation, je mets en place un tableau de bord alimenté en continu : pour chaque **poste**, le prévu, le consommé et le reste à faire, plus un total à date. Ces données sont produites régulièrement et communiquées au contrôle de gestion. On passe ainsi d'une estimation figée à un pilotage vivant.

### Comment analysez-vous les écarts et que faites-vous en cas de dépassement ?

Réponse défendable :

Je compare en continu le réel au prévu et je calcule l'écart en pourcentage, avec des seuils d'alerte : sous 5 % c'est sous contrôle, entre 5 et 10 % je passe en vigilance et j'analyse la cause, au-delà de 10 % c'est une alerte. En cas d'écart, l'action corrective est cadrée : analyse de cause, re-priorisation du backlog, réallocation, arbitrage avec le Product Owner et la direction — et si on passe au rouge, alerte immédiate à la direction financière. L'objectif est de réagir tôt, pas de constater trop tard.

### Avez-vous un plan d'action en cas d'incident ?

Réponse défendable :

Oui, un processus clair, aussi bien côté exploitation que côté budget. Côté opérationnel : détection par alerte, qualification et priorisation, résolution en astreinte, communication au PO et au client, puis post-mortem (REX) pour un correctif durable. Côté budgétaire : le dépassement est traité comme un incident, avec analyse de cause et solutions correctives documentées. L'idée est que rien ne reste sans réponse ni sans traçabilité.

### Que se passe-t-il si vous n'avez pas assez de collectivités clientes ?

Réponse défendable :

C'est le principal risque business, donc je le traite avec des **seuils et des décisions préparées**, pas au feeling.

D'abord le repère : le budget de la phase est d'environ 30 k€/mois. Avec un abonnement de l'ordre de 500 à 800 € par mois et par collectivité, il faut donc **une quarantaine de collectivités pour atteindre le point mort** en régime courant. C'est justement pour ça que je garde une équipe resserrée et une infrastructure sobre au démarrage : moins on brûle, plus on a de temps pour convaincre.

Ensuite, trois scénarios avec une décision associée, revue à chaque comité mensuel :

| Situation à 6 mois | Lecture | Décision |
|---|---|---|
| **≥ 8 collectivités** | trajectoire tenue | On continue, on investit sur l'industrialisation. |
| **3 à 7** | lent mais viable | On **allonge la phase** : évolutions non essentielles repoussées, DevOps senior passé à temps partiel, on concentre l'effort sur ce qui aide à vendre (démos, référence client). |
| **≤ 2** | modèle non validé | **Go / no-go** : on gèle les recrutements, on réduit l'équipe au socle, et on ré-oriente — mutualisation avec un éditeur, cible intercommunalités plutôt que communes isolées, ou arrêt maîtrisé. |

Enfin, deux amortisseurs structurels : la plateforme est **multi-collectivités**, donc le coût marginal d'un client supplémentaire est très faible — chaque nouvelle signature améliore directement la marge ; et le socle technique reste **réutilisable** sur un autre produit de signalement si le marché ne prend pas. Ce suivi se fait avec la direction financière, en confrontant chaque mois le prévisionnel de revenus au budget consommé.

### Et si le budget est dépassé, comment le gérez-vous concrètement ?

Réponse défendable :

Le principe est simple : un dépassement n'est jamais une surprise, il est détecté par le tableau de bord, et à chaque niveau d'écart correspond **une action et un décideur identifiés**.

| Écart | Qui décide | Action concrète |
|---|---|---|
| **< 5 %** | Moi (pilotage projet) | Rien de plus que le suivi : on note la cause dans le reporting mensuel. |
| **5 – 10 %** | Moi + Product Owner | Analyse de cause sous 48 h. On **re-priorise le sprint suivant** : ce qui est « nice to have » sort, on absorbe l'écart sur les semaines restantes. |
| **> 10 %** | Direction + direction financière | **Alerte immédiate.** On présente 2 ou 3 options chiffrées, pas un simple constat. |

Au-delà de 10 %, les options que je mets sur la table sont toujours les mêmes, dans cet ordre :

1. **Réallouer entre postes** — si l'infrastructure dérape de 500 €/mois mais qu'un lot RH a été plus rapide que prévu, on compense en interne sans toucher à l'enveloppe globale. C'est le levier le moins douloureux.
2. **Réduire le périmètre** — on protège le « must have » (signalement, traitement, supervision) et on repousse le reste au lot suivant. Le budget tient, la date tient, c'est le contenu qui s'ajuste.
3. **Étaler dans le temps** — on allonge la phase d'un mois en réduisant la charge mensuelle, par exemple en passant le DevOps senior à temps partiel une fois les fondations posées.
4. **Demander une rallonge** — en dernier recours seulement, et uniquement si elle est justifiée par de la valeur : une nouvelle collectivité signée qui change le dimensionnement, par exemple.

Un point important : je distingue toujours le dépassement **ponctuel** — un pic d'un mois, qu'on résorbe sur les mois suivants — du dépassement **structurel**, où la trajectoire elle-même est fausse. Dans le second cas, on ne bricole pas : on révise le plan avec la direction. Et dans les deux cas, la cause est documentée pour que la prochaine estimation soit meilleure.

### Comment la plateforme tiendrait-elle avec 100 collectivités ? Faut-il plusieurs VPS ?

Réponse défendable :

Oui, on passe à plusieurs serveurs — mais **progressivement**, et dans un ordre précis. Aujourd'hui, tout tourne sur **un seul VPS de production** : le site web, l'API et la base de données sont dessus, dans des conteneurs Docker. C'est parfait pour quelques collectivités, mais ça ne tient pas à 100. Il y a trois étapes, et chacune se déclenche quand la précédente atteint sa limite.

**Étape 1 — on agrandit la machine.** C'est le réflexe le plus simple : on prend un VPS plus puissant, avec plus de mémoire et de processeur. Ça ne change rien à l'architecture, c'est juste une montée en gamme chez l'hébergeur. Ça suffit facilement jusqu'à une dizaine de collectivités. Avantage : immédiat et pas cher. Limite : on ne peut pas grossir indéfiniment, et surtout **si ce serveur tombe, tout tombe**.

**Étape 2 — on sépare la base de données.** C'est elle qui sature en premier, parce qu'elle travaille pour tout le monde en même temps. On la sort donc sur **son propre VPS**. L'image que j'utilise : au début le cuisinier prend les commandes et cuisine ; quand il y a trop de monde, on sépare la salle de la cuisine. Résultat : deux serveurs, chacun son métier, et si l'un rame l'autre continue. On en profite pour envoyer les photos vers le stockage S3 et un CDN, pour ne pas encombrer les serveurs avec des fichiers lourds.

**Étape 3 — on duplique le serveur applicatif.** Là on ne grossit plus, on **multiplie** : au lieu d'un serveur web, on en met deux ou trois **identiques**, et on place devant un **load balancer** — un répartiteur qui envoie chaque visiteur vers le serveur le moins occupé. C'est le maître d'hôtel qui répartit les clients entre plusieurs salles. Double bénéfice : on encaisse beaucoup plus de trafic, et surtout **si un serveur tombe, les autres prennent le relais** — plus de coupure. C'est possible seulement parce que les applications sont **dockerisées** : dupliquer un conteneur, c'est trivial ; dupliquer une installation faite à la main, ça ne l'est pas.

Concrètement, voici comment le parc évolue :

| Collectivités | Serveurs | Ce qu'on a mis en place |
|---|---|---|
| **1 – 10** | 1 VPS prod + 1 monitoring | Tel que présenté aujourd'hui. On agrandit le VPS si besoin. |
| **10 – 30** | +1 VPS base de données | La base est séparée. Photos sur S3 + CDN. |
| **30 – 60** | 2-3 VPS applicatifs + 1 load balancer | Le trafic est réparti, plus de point de défaillance unique. |
| **60 – 100+** | Parc orchestré (Kubernetes ou managé) | Les serveurs s'ajoutent et se retirent automatiquement selon la charge. |

Trois points que je tiens à souligner.

D'abord, à 100 collectivités, le vrai goulot d'étranglement n'est **pas technique, il est humain** : le support, l'accompagnement, les demandes clients. C'est pour ça qu'à partir d'une trentaine de clients je prévois un **onboarding self-service** — la collectivité crée son espace et le paramètre elle-même — plutôt que d'embaucher proportionnellement.

Ensuite, le **cloisonnement des données par collectivité** est prévu dès le départ. C'est un choix structurant qu'on ne rattrape pas facilement après coup, donc il est pris maintenant même avec quelques clients seulement.

Enfin, à cette échelle on ne fonctionne plus au « best effort » : on s'engage sur des **SLA** — un taux de disponibilité, un délai de prise en charge des incidents — ce qui implique une astreinte organisée, et facturée en conséquence.

Et j'assume complètement de ne pas construire tout ça aujourd'hui : ce serait payer pour un trafic qui n'existe pas. Ce qui compte, c'est que **l'architecture actuelle ne bloque aucune de ces étapes** — c'est précisément ce que permettent Docker et la séparation des environnements.

---

## 9. Données, stockage et sauvegardes

### Où sont hébergées les bases de données ?

Réponse défendable :

Chaque environnement a **sa propre base, sur son propre serveur**. La base de production tourne dans un conteneur sur le VPS de production, celle de préproduction sur le VPS de préproduction, et celle de dev sur le VPS de dev. Trois environnements, trois bases totalement isolées.

L'intérêt est double : aucun test en dev ne peut toucher aux données réelles, et une base saturée ou corrompue sur un environnement n'affecte pas les autres. C'est aussi une exigence RGPD — les données réelles des citoyens ne descendent pas en dev ; si on a besoin d'un jeu de données réaliste pour tester, il est **anonymisé**.

Je précise que c'est une architecture de démarrage volontairement simple. Dès que la charge augmente, la première évolution consiste justement à **sortir la base de production sur son propre serveur**, séparée de l'applicatif.

### Où partent les sauvegardes ?

Réponse défendable :

Le point essentiel : **jamais sur le serveur qu'elles sauvegardent**. Une sauvegarde stockée sur le VPS de production ne sert à rien le jour où ce VPS est perdu, corrompu ou chiffré par un rançongiciel — on perdrait la base *et* sa copie.

Les sauvegardes sont donc **externalisées** : un dump automatique quotidien de la base, chiffré, envoyé vers un espace de stockage distinct — un bucket dédié aux sauvegardes ou l'espace de backup de l'hébergeur, séparé du serveur applicatif. On applique une rétention progressive : les sauvegardes quotidiennes des derniers jours, puis hebdomadaires sur un mois.

Et surtout : **une sauvegarde qui n'a jamais été restaurée n'est pas une sauvegarde**. Je prévois un test de restauration périodique sur l'environnement de préproduction, pour vérifier que le fichier est exploitable et mesurer le temps réel de remise en service.

### Un seul bucket S3 pour tous les environnements, est-ce suffisant ?

Réponse défendable :

Non, et c'est un point sur lequel je suis volontairement strict : le stockage est **cloisonné par environnement**, avec un bucket dédié à chacun — ou a minima des préfixes séparés avec des droits d'accès distincts.

Deux raisons. La première est technique : si dev, préproduction et production partagent le même espace, un test ou un script de nettoyage lancé en dev peut écraser ou supprimer des fichiers de production. La seconde est juridique, et c'est la plus importante : les photos de signalement peuvent contenir des données personnelles — visages, plaques, adresses. Les rendre accessibles depuis un environnement de développement reviendrait à exposer des données réelles de citoyens hors production. C'est incompatible avec le RGPD, surtout dans un contexte de collectivités.

Chaque environnement dispose donc de ses propres accès, avec des clés distinctes, et la production a les droits les plus restreints.

---

## 10. Tests en situation et conformité produit

### Qu'entendez-vous par « tests en situation » ?

Réponse défendable :

Ce sont des tests dans des conditions proches du réel, pas seulement en local : une recette scénarisée en préproduction iso-prod, des tests de charge et de performance sous trafic simulé, et des tests sur devices réels avec des jeux de données réalistes, menés avant chaque release. C'est ce qui permet de valider le rendu final à un niveau de qualité constant, au-delà des tests unitaires.

### Comment garantissez-vous la conformité aux canaux de distribution ?

Réponse défendable :

Côté mobile, on s'appuie sur les mécanismes des stores : pre-launch report de la Play Console, bêta via TestFlight, respect des guidelines techniques Apple et Google, gestion des signatures et certificats. Côté web, on vérifie la performance, la sécurité et le RGAA, avec une checklist de conformité avant chaque publication. L'objectif est de publier sans blocage et de rester conforme aux exigences de chaque canal.

### Sur quelle stack technique travaillez-vous ?

Réponse défendable :

L'ensemble du projet est en **TypeScript**, sur l'écosystème JavaScript : **React** pour le portail citoyen et l'interface d'administration, **React Native** pour l'application mobile, **Node.js** pour le backend et l'API, et **PostgreSQL** comme base de données — avec l'extension **PostGIS**, essentielle ici puisqu'on manipule en permanence des coordonnées géographiques de signalements.

Deux précisions importantes.

D'abord, **ce n'est pas un choix que j'impose, c'est l'existant que je consolide**. Le prototype a déjà été développé, et mon rôle n'est pas de tout réécrire mais d'industrialiser ce qui existe. Réécrire la stack coûterait cher, ferait perdre des mois et démotiverait une équipe qui maîtrise déjà son code.

Ensuite, cette homogénéité est un **vrai atout pour une équipe de quatre développeurs** : un seul langage du front au back, donc chacun peut intervenir partout, les revues de code sont plus faciles, et on n'a pas besoin de spécialistes séparés. C'est aussi ce qui rend l'outillage cohérent — ESLint, Jest ou Cypress fonctionnent sur toute la chaîne, ce qui simplifie le pipeline.

Enfin, React Native permet de mutualiser une grande partie du code entre iOS et Android, ce qui est cohérent avec le dimensionnement de l'équipe.

### Pourquoi PostgreSQL plutôt que MySQL ?

Réponse défendable :

La raison principale est **géospatiale**. GreenCity Tech est une application de signalement localisé : chaque signalement porte des coordonnées, et on doit pouvoir répondre à des questions comme « quels signalements dans un rayon de 500 mètres », « lesquels dans ce quartier », ou les regrouper efficacement sur une carte. PostgreSQL dispose de **PostGIS**, qui est la référence du domaine, avec des index spatiaux et des requêtes géographiques natives. MySQL propose des fonctions spatiales, mais nettement plus limitées.

À cela s'ajoutent trois avantages : le type **JSONB**, qui permet de stocker des métadonnées variables selon le type de signalement tout en restant indexable et performant ; une **robustesse transactionnelle** et un respect des standards SQL reconnus ; et une **licence pleinement open source**, là où MySQL appartient à Oracle avec un modèle de double licence.

Cela dit, je reste mesuré : MySQL n'est pas un mauvais choix en soi, et pour un CRUD classique la question ne se poserait pas. C'est le besoin cartographique qui tranche. Et si le prototype existant tournait déjà sur MySQL, je ne migrerais pas par principe — je le ferais seulement quand la cartographie devient réellement structurante, en traitant ça comme une évolution cadrée, avec son analyse d'impact.

### Combien d'applications y a-t-il exactement ?

Réponse défendable :

Il y a **trois interfaces et un backend**. Côté citoyen, un portail web en React et une application mobile en React Native — le mobile est essentiel puisque le signalement se fait sur le terrain, avec photo et géolocalisation. Côté collectivité, une interface d'administration en React, utilisée par les agents pour traiter les signalements. Et un backend Node.js qui expose l'API consommée par ces trois interfaces, ainsi que par les partenaires externes.

On pourrait me demander pourquoi le portail citoyen et l'interface d'administration sont deux applications distinctes plutôt qu'une seule avec des rôles. C'est un choix assumé : les publics et les usages n'ont rien à voir, et surtout l'interface d'administration n'a pas vocation à être exposée publiquement — on peut la restreindre, la déployer séparément et la sécuriser davantage. Cela permet aussi de faire évoluer l'une sans risquer de casser l'autre.

Enfin, sur la mutualisation : React et React Native partagent le même langage et la même logique de composants. On mutualise donc la **logique métier, les types TypeScript et les appels API** dans un package commun. Ce qui diffère, c'est uniquement la couche d'interface — composants web d'un côté, composants natifs de l'autre. C'est précisément ce qui rend cette stack cohérente avec une équipe de quatre développeurs.

### Quels outils concrets composent le pipeline ?

Réponse défendable :

Le pipeline tourne sur **GitHub Actions**, et chaque étape a son outil : **ESLint et Prettier** pour la qualité et le formatage du code, **TypeScript** pour la vérification du typage, **Jest** pour les tests unitaires et d'intégration, **Cypress** pour les tests end-to-end sur les parcours critiques.

Côté sécurité : **npm audit** complété par **Dependabot** pour les failles des dépendances, et **Trivy** pour scanner l'image Docker. Côté accessibilité, **axe-core** en automatisé, avec **Lighthouse** pour un contrôle global performance et bonnes pratiques.

Le build produit une **image Docker** versionnée, poussée sur le registry, puis déployée via **Docker Compose** sur le VPS cible.

Ce sont volontairement des outils **standards, gratuits et bien documentés** : l'équipe peut se les approprier rapidement, et ils n'ajoutent pas de coût de licence. Si le projet grandit, on peut ajouter **SonarQube** pour une analyse de qualité plus poussée, et **Fastlane** pour automatiser la publication mobile.

---

## 11. Management et situations humaines difficiles

### Si le suivi du moral ne s'améliore pas et qu'un collaborateur va toujours mal, que faites-vous ?

Réponse défendable :

C'est une question importante, parce qu'elle touche à la limite de mon rôle. Je procède par étapes.

**D'abord, un entretien individuel**, en direct et sans jugement. Les indicateurs collectifs disent qu'il y a un problème, mais ils ne disent jamais *pourquoi*. Il faut donc écouter la personne, sans chercher à interpréter à sa place — et sans en faire un sujet public devant l'équipe.

**Ensuite, j'agis sur ce qui est dans mon périmètre** : réduire ou rééquilibrer la charge, ajuster le type de tâches, revoir les horaires ou le télétravail, compléter les aménagements matériels, retirer les réunions non essentielles. Beaucoup de situations se débloquent là, parce que la cause est organisationnelle.

**Mais si la situation ne s'améliore pas, je passe la main** — et c'est le point clé. Un manager n'est ni médecin, ni psychologue. À ce stade, on mobilise les bons acteurs : les **RH**, la **médecine du travail**, le **référent handicap** de l'entreprise. La médecine du travail peut préconiser un aménagement de poste formalisé, éventuellement une reconnaissance RQTH si la personne le souhaite — toujours avec son accord, jamais imposé. Selon les cas, on envisage aussi un temps partiel thérapeutique ou une mobilité interne.

Trois principes guident tout ça. **Ne jamais laisser la situation s'installer** : plus on attend, plus c'est difficile à réparer, pour la personne comme pour l'équipe. **Tracer les actions engagées**, pas l'état de santé de la personne — le manager documente ce qu'il a mis en place, pas un diagnostic. Et **ne jamais individualiser les indicateurs en public** : je suis le moral au niveau de l'équipe, et les cas individuels se traitent en tête-à-tête, ce qui est aussi une exigence de non-discrimination.

Enfin, il faut accepter qu'un projet ne peut pas tout résoudre : certaines causes sont personnelles et extérieures au travail. Mon rôle est de **garantir un cadre qui n'aggrave pas la situation**, et d'orienter vers les personnes compétentes quand ça dépasse le cadre professionnel.
