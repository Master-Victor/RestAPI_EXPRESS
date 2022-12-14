require('dotenv').config();
const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        //middlewares
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Lectura y parseo del body
        this.app.use( express.json() );
        //directorio publico
        this.app.use( express.static( 'public' ) );
    }

    routes(){
        this.app.use( this.usersPath, require( '../routes/user' ));  
    }

    listen(){
        this.app.listen(this.port, () =>  console.log('Servidor en el puerto', process.env.PORT) );
    }

}

module.exports = Server;