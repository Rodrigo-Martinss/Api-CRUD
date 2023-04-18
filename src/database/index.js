import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Visita from '../app/models/Visita';

const models = [Visita];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
