# Testing Dokku

Small express app to test Dokku.

To deploy to dokku - add a git remote to `dokku@git.apps.projectcodex.net:express-101`

Using this command:

```
git remote add dokku dokku@git.apps.projectcodex.net:express-dokku
git add .
git commit -m 'commit message'
git push dokku master 

```

You can change the name after the colon to change your app name.

## Creating Postgres Services

##### Root user

```
dokku postgres:create <service> 
dokku postgres:link <service> <app> 
dokku postgres:connect <service> 
```

##### Non-root user

```
ssh -t dokku@start.apps.projectcodex.net postgres:create <service> 
ssh -t dokku@start.apps.projectcodex.net postgres:link <service> <app> 
ssh -t dokku@start.apps.projectcodex.net postgres:connect <service> 

> create table or run migration (to be tested)

```



## Commands we tested on the server

```
  dokku proxy:ports express-101
  dokku proxy-remove express-101
  dokku proxy:ports-remove express-101
  dokku proxy:ports express-101
  dokku proxy-remove express-101 http:80:5000
  dokku proxy:ports-remove express-101 http:80:5000
  dokku proxy:ports-set express-101 http:80:4007
  dokku report express-101
  clear
  dokku
  dokku config:set express-101 PORT=7001
  dokku proxy:ports-remove express-101 http:80:4007
  dokku proxy:ports-set express-101 http:80:7001


  ssh -t dokku@start.apps.projectcodex.net 
  ssh -t dokku@start.apps.projectcodex.net postgres
```

### Usefull Commands

- ssh -t dokku@start.apps.projectcodex.net

## Usefull documentation

https://dokku.com/docs/deployment/remote-commands/