# Carambar Jokes App

Une mini application web de blagues pour Carambar & co.

## Installation

1.  Clonez le dépôt :

    ```bash
    git clone https://github.com/ton-utilisateur/carambar-jokes-app.git
    cd carambar-jokes-app
    ```

2.  Installez les dépendances :

    ```bash
    pnpm install
    ```

3.  Configurez la base de données :

    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

4.  Démarrez le serveur :

    ```bash
    node server.js
    ```

5.  Accédez à l'application :
    ```
    http://localhost:3000
    ```

## Déploiement

L'application est déployée sur Render. Pour déployer, poussez simplement les modifications sur le dépôt GitHub connecté à Render.

## Utilisation

- Accédez à la landing page.
- Cliquez sur le bouton "Obtenir une blague" pour afficher une blague aléatoire.

## Technologies Utilisées

- Node.js
- Express
- Sequelize
- SQLite
- Render

## Contribuer

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
