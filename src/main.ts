import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectionDB } from './database';
import { engine } from 'express-handlebars';
import { router } from './routes';

const app = express();
connectionDB();

app.use(cors());
app.use(express.json());

app.engine('handlebars', engine());

app.use('/api/', router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Corriengo en el puerto: ${port}`));