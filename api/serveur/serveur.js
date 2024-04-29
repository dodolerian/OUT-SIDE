import express, { json } from 'express';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000', // Autorise uniquement les requêtes en provenance de cette origine
    methods: ['GET', 'POST'], // Autorise uniquement les méthodes GET et POST
    optionsSuccessStatus: 200 // Répond avec un statut 200 pour les requêtes OPTIONS
};

app.use(cors(corsOptions));
app.use(json());
app.use(router);

app.listen(port, () => {console.log(`Server start on : http://localhost:${port}`);});