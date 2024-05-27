## commands

```
docker compose up
```

```
docker compose up --build	
```

```
docker-compose down --rmi local
```

```
docker exec -it liminha-db_mysql mysql keycloak_db -u admin -p
```

```
docker-compose rm -v
```

```
docker volume rm .docker
```

```
docker-compose up --force-recreate
```

## Commands Mysql Terminal

```
show databases;

use keycloak_db;

show tables;
```



## Applications

> Keycloak running on port 8080

> Nest running on port 3000

> React running on port 5173

## Configure Keycloak

- Open Keycloak admin on port 8080 with login and password admin
- Create a realm with name "advisor"
- Create a "Client" with clientId=nest and ClientType=OpenId Connect
- Configure Client Authtentication to "ON"
- Configure login settings with RootUrl=http://localhost:3000 and HomeUrl=http://localhost:3000 and (ValidUrl and ValidPostUrl and WebOrigins)=http://localhost:3000&http://localhost:5173
- Open Tab "Credentials" and copy the client secret and paste into root file rest.http and CLIENT_SECRET into ./nest/.env and ./docker-compose.yml on app nest environment
- Create a "User" with username=patricia.a401 and fill all inputs values
- Open the tab "Credentials" and set password to 123456
- Now, test the endpoint "http://localhost:8080/realms/advisor/protocol/openid-connect/token" into the rest.http file