# Weather App

Before starting the application, you need to fill in the environment variables in the config directory

### Raise the application in development mode:
``` bash
docker compose --env-file ./config/.env.dev build
docker compose --env-file ./config/.env.dev up
```

or

``` bash
docker compose --env-file ./config/.env.dev up --build
```

### Raise the application in production mode:
``` bash
docker compose -f docker-compose.yml -f ./docker-compose/docker-compose.nginx.yml --env-file ./config/.env.prod build --no-cache
docker compose -f docker-compose.yml -f ./docker-compose/docker-compose.nginx.yml --env-file ./config/.env.prod up
```

or

``` bash
docker compose -f docker-compose.yml -f ./docker-compose/docker-compose.nginx.yml --env-file ./config/.env.prod up --build
```