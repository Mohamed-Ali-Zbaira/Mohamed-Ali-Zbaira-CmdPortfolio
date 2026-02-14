
# CmdPortfolio — Portfolio Terminal Professionnel

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com) [![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE)

Description
-----------

`CmdPortfolio` est un portfolio interactif présenté sous la forme d'un terminal. L'objectif est d'offrir une expérience immersive et rapide pour consulter la biographie, les compétences, les expériences et les projets d'un développeur. L'application est une SPA React construite avec Vite et organisée en composants modulaires réutilisables.

Caractéristiques principales
---------------------------

- Interface terminal simulée avec historique et saisie de commandes
- Jeu de commandes prédéfinies : `help`, `about`, `skills`, `experience`, `projects`, `education`, `contact`, `clear`
- Données centralisées dans `src/data/portfolioData.js` pour faciliter la maintenance
- Composants React séparés et styles par composant

Technologies
------------

- React 19
- Vite
- ESLint (configuration basique)
- CSS (styles modulaires par composant)

Table des matières
------------------

1. Installation rapide
2. Scripts disponibles
3. Utilisation (exemples de commandes)
4. Structure du projet
5. Contenu des données
6. Développement & Qualité
7. Déploiement
8. Contribution
9. Licence & Contact

1) Installation rapide
----------------------

Cloner le dépôt et lancer l'application en local :

```bash
git clone <REPO_URL>
cd CmdPortfolio
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:5173` (ou l'URL indiquée par Vite).

2) Scripts disponibles (voir `package.json`)
------------------------------------------------

- `npm run dev` — démarre le serveur de développement
- `npm run build` — génère la build de production dans `dist/`
- `npm run preview` — sert la build de production localement
- `npm run lint` — lance ESLint

3) Utilisation — commandes et exemples
-------------------------------------

Depuis l'interface terminal, tapez une des commandes suivantes et appuyez sur Entrée :

- `help` : affiche la liste des commandes disponibles
- `about` : affiche la biographie et liens (GitHub, LinkedIn, CV)
- `skills` : affiche les compétences par catégorie
- `experience` : affiche les expériences professionnelles
- `projects` : affiche les projets (avec descriptions et liens GitHub)
- `education` : affiche le parcours académique
- `contact` : affiche les coordonnées
- `clear` : efface l'historique du terminal

Exemple :

```text
> about
Mohamed Ali Zbaira — Front-End / Full-Stack Developer
GitHub: https://github.com/Mohamed-Ali-Zbaira
CV: <lien>
```

4) Structure du projet
----------------------

Arborescence essentielle :

```
src/
├─ components/       # Composants UI (TerminalPanel, OutputPanel, CommandInput...)
├─ data/             # Données statiques (portfolioData.js, commands.js)
├─ hooks/            # Hooks personnalisés (useTerminal.js)
├─ constants/        # Constantes globales (PROMPT...)
├─ App.jsx
└─ main.jsx
```

Fichiers importants :

- `src/data/portfolioData.js` — contenu du portfolio (bio, compétences, projets, expériences)
- `src/hooks/useTerminal.js` — logique principale du terminal (exécution des commandes, historique)
- `src/components/TerminalPanel/*` — UI du terminal
- `src/components/OutputPanel/*` — affichage des réponses

5) Contenu des données
----------------------

Le fichier `src/data/portfolioData.js` contient des objets exportés : `Bio`, `skills`, `experiences`, `education`, `projects`. Modifier ce fichier permet de mettre à jour le contenu affiché sans changer la logique.

6) Développement & Qualité
--------------------------

- Ajoutez des tests unitaires pour `useTerminal` (gestion d'historique et parsing des commandes).
- Exécuter ESLint via `npm run lint` et corriger les avertissements.
- Vérifier l'accessibilité du terminal (navigation clavier, contraste).

7) Déploiement
--------------

Build et déploiement statique :

```bash
npm run build
# Déployer le dossier dist/ sur Netlify, Vercel, GitHub Pages, ou un serveur statique
```

Exemple de `Dockerfile` pour servir la build :

```Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

CI (exemple GitHub Actions minimal) :

```yaml
name: Build and Deploy
on: [push]
jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: actions/setup-node@v4
				with:
					node-version: '18'
			- run: npm ci
			- run: npm run build
			# Ajoutez une étape de déploiement selon la plateforme choisie
```

8) Contribution
---------------

Contributions bienvenues : fork → nouvelle branche → PR. Merci d'inclure une description claire, des tests si applicable, et de respecter la structure des composants.

9) Licence & Contact
---------------------

Licence : aucune licence fournie. Ajoutez un fichier `LICENSE` (ex: MIT) si vous souhaitez ouvrir le dépôt.

Auteur : Mohamed Ali Zbaira
- GitHub : https://github.com/Mohamed-Ali-Zbaira
- LinkedIn : https://www.linkedin.com/in/mohamed-ali-zbaira

---

Besoin d'une version anglaise, d'un `LICENSE`, d'un workflow GitHub Actions complet, ou d'un Dockerfile ajouté au repo ? Dites-moi ce que vous préférez et je l'ajoute.
