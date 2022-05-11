const express = require('express');
const cors = require('cors');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        //midlewares
        this.midlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    midlewares() {
        //CORS PARA SEGURIDAD DEL SERVER
        this.app.use(cors());

        //PARSEO Y LECTURA DE BODY
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));


    }

    routes() {
        //rutas de user y todas las quie se quieran hacer
        this.app.use(this.userPath, require('../routes/user_routes'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
        });
    }
}

module.exports = Server;