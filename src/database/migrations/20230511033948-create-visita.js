module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('visitas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      solicitacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => queryInterface.dropTable('visitas'),
};
