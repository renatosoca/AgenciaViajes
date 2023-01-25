import express from 'express';
import router from './routes/index.js';
import database from './config/database.js'

const app = express();

//Conectar la Base de Datos
database.authenticate()
    .then( () => console.log('DB conectada'))
    .catch( error => console.log(error))

const port = process.env.PORT || 4000;

//habilitar PUG
app.set( 'view engine', 'pug' );

//Definir nuestro Middleware
    //Obtener Año Actual
app.use( (req, res, next) => {
    //Creando variable para mostrar en las Vistas
    const year = new Date();
    res.locals.Fecha = year.getFullYear();
    res.locals.title = 'Agencia de Viajes';
    next();
});

//Definir la Carpeta PUBLICA
app.use(express.static('public'));

//Agregar el ROUTER
app.use( '/', router );

//Visualizar si corre el SERVIDOR
app.listen( port, () => {
    console.log(`Corriengo en el puerto: ${port}`);
});