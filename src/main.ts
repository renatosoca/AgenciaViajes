import express from 'express';
import 'dotenv/config';
import { connectionDB } from './database';
import { router } from './routes';

const app = express();
connectionDB();

app.use( express.json() );
app.use( '/api/', router );

const port = process.env.PORT || 4000;
app.listen( port, () =>  console.log(`Corriengo en el puerto: ${port}`) );