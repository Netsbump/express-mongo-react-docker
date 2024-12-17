# Application Express-Mongo-React avec Docker Compose

## Démarrage en mode développement

Pour lancer l'application en mode développement, exécutez :

```bash
docker compose -f compose.dev.yaml up --build
```
## Accès aux services

    Backend (Express) : http://localhost:5050
    Frontend (React) : http://localhost:8080
    Base de données (MongoDB) : Persistée dans le dossier ./data

## Hot Reload

Les changements dans server/src et client/src sont pris en compte automatiquement grâce aux volumes Docker.