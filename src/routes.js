import { Router } from 'express';
import Visita from './app/models/Visita';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const visita = await Visita.create({
    name: 'Joao',
    cliente: 'teste2',
    solicitacao: 'testando Data Inicio como times tempo',
  });

  return res.json(visita);
});

export default routes;
