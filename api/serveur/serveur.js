import express, { json } from 'express';
import router from './routes/routes.js';

const app = express();
const port = 8888;

app.use(json());
app.use(router);

app.listen(port, () => {console.log(`Server start on : http://localhost:${port}`);});