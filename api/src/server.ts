import express from 'express';
import handleError from './middlewares/handleError';
const db = require('../src/database');

const app = express();
const routes = require("./routes");

app.use(express.json());
db.hasConnection();

app.use(routes);
app.use(handleError);

export default app;