const jsonServer = require('json-server');
const server = jsonServer.create();
const mydb = jsonServer.router('data.json');
const mydefaults = jsonServer.defaults();
const port = process.env.PORT || 6147;
server.use(mydefaults);
server.use(mydb);
server.listen(port);