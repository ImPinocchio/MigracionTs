import express, { Application } from 'express';
import morgan from 'morgan';
import saludoRouter from './src/routes/saludo.route.js';
import personaRouter from './src/routes/persona.route.js';
import { miPrimerMiddleware, validarApiKey } from './src/middlewares/global.middleware.js';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(miPrimerMiddleware);
app.use(express.json());
app.use(morgan('dev'));

app.use('/saludo', saludoRouter);
app.use('/persona', validarApiKey, personaRouter);

app.listen(PORT, (): void => {
  console.log(`API Personas está corriendo en el puerto ${PORT}`);
});