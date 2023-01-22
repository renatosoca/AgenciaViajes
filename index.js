import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

//habilitar PUG
app.set( 'view engine', 'pug' );

//Definir la Carpeta PUBLICA
app.use(express.static('public'));

//Agregar el ROUTER
app.use( '/', router );

//Visualizar si corre el SERVIDOR
app.listen( port, () => {
    console.log(`Corriengo en el puerto: ${port}`);
});