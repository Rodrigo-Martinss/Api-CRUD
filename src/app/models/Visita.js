import Sequelize, { Model } from 'sequelize';

class Visita extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cliente: Sequelize.STRING,
        solicitacao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Visita;
