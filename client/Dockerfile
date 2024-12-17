# Étape 1 : Environnement Node
FROM node:lts-alpine

# Étape 2 : Créer le répertoire de travail dans le conteneur
RUN mkdir /app
WORKDIR /app

# Étape 3 : Copier package.json et package-lock.json, installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Étape 4 : Copier le reste des fichiers nécessaires
COPY src src
COPY public public
COPY index.html .
COPY vite.config.js .

# Étape 5 : Démarrer le serveur Vite avec l'option --host
CMD ["npm", "run", "dev", "--", "--host"]
