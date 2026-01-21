# Terminal Portfolio - Architecture

## Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── AsciiArt/       # Art ASCII du logo
│   ├── CommandHistory/ # Historique des commandes
│   ├── CommandInput/   # Input pour les commandes
│   ├── OutputPanel/    # Panneau d'affichage des résultats
│   ├── TerminalPanel/  # Panneau terminal principal
│   └── WelcomeMessage/ # Message de bienvenue
├── data/               # Données et constantes
│   └── commands.js     # Données des commandes disponibles
├── hooks/              # Hooks React personnalisés
│   └── useTerminal.js  # Logique métier du terminal
├── constants/          # Constantes globales
│   └── index.js        # Couleurs, prompts, etc.
├── App.jsx             # Composant principal
├── App.css             # Styles globaux de l'application
├── index.css           # Styles de base et variables CSS
└── main.jsx            # Point d'entrée React
```

## Architecture

### Composants

- **TerminalPanel** : Panneau gauche contenant le terminal avec historique et input
- **OutputPanel** : Panneau droit affichant les résultats des commandes
- **CommandInput** : Composant d'input pour saisir les commandes
- **CommandHistory** : Affichage de l'historique des commandes exécutées
- **WelcomeMessage** : Message de bienvenue avec informations système
- **AsciiArt** : Logo ASCII stylisé

### Hooks

- **useTerminal** : Gère la logique métier :
  - Historique des commandes
  - Exécution des commandes
  - Gestion de l'output
  - Focus automatique sur l'input

### Données

- **commands.js** : Contient toutes les données des commandes (help, about, skills, etc.)
- **constants/index.js** : Constantes réutilisables (couleurs, prompts)

## Commandes Disponibles

- `help` - Affiche la liste des commandes disponibles
- `about` - Informations sur le développeur
- `skills` - Compétences techniques
- `experience` - Historique professionnel
- `projects` - Projets réalisés
- `education` - Formation académique
- `contact` - Informations de contact
- `clear` - Efface l'historique du terminal

## Styles

Les styles sont organisés par composant avec des fichiers CSS dédiés. Les variables CSS globales sont définies dans `index.css`.

## Utilisation

```bash
npm run dev    # Démarrer le serveur de développement
npm run build  # Construire pour la production
npm run preview # Prévisualiser le build de production
```

