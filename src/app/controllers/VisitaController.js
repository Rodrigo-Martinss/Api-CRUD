/* eslint-disable prettier/prettier */
import Visita from '../models/Visita';

class VisitaController {
  async store(req, res) {
    const { name, cliente, solicitacao } = await Visita.create(req.body);

    return res.json({
      name,
      cliente,
      solicitacao,
    });
  }
}

export default new VisitaController();
