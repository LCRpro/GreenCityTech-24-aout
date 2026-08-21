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
