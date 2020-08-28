'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente: {
        type: Sequelize.STRING
      },
      cozinheiro: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      flagDelivered: {
        type: Sequelize.BOOLEAN
      },
      garcom: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.DATE
      },
      horaInicial: {
        type: Sequelize.DATE
      },
      horaFinal: {
        type: Sequelize.DATE
      },
      mesa: {
        type: Sequelize.NUMBER
      },
      status: {
        type: Sequelize.STRING
      },
      tempoPreparo: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};