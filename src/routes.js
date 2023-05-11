import { Router } from 'express';

import VisitaController from './app/controllers/VisitaController';

const routes = new Router();

routes.post('/visita', VisitaController.store);

export default routes;
