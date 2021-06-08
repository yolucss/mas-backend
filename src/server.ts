import 'dotenv/config';
import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';
import error from './middlewares/error';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3333, () => console.log('Server started'));