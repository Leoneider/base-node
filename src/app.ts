import express from 'express';
// import { Errors } from './helpers/errors.helper';
import { router as OrderRouter } from './routes/router';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( cors ({ origin: true, credentials: true}) );

app.use('/order', OrderRouter);
app.get('/health-check', (req, res) => res.send('I am alive'));

// app.use(Errors.pathNotFoundError);
// app.use(Errors.genericError);

export default app;
