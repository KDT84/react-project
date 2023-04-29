### Deploying to heroku

I'm following this person's approach to deploying to heroku:

https://github.com/jesperorb/json-server-heroku

1. modify the package.json so that npm run start runs server.js
```
"scripts": {
    "start": "node server.js"
  },
```

2. create a server.js to run the json-server

```
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
```