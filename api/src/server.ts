import express from 'express';
import handleError from './middlewares/handleError';

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);
app.use(handleError);

export default app;