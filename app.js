/* CONFIGURANDO UN SERVIDOR DE EXPRESS*/

require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();


