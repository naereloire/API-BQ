'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cliente: {
        type: Sequelize.STRING,
      },

      data: {
        type: Sequelize.DATE,
      },
      flagDelivered: {
        type: Sequelize.BOOLEAN,
      },

      hora: {
        type: Sequelize.DATE,
      },
      horaInicial: {
        type: Sequelize.DATE,
      },
      horaFinal: {
        type: Sequelize.DATE,
      },
      mesa: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      tempoPreparo: {
        type: Sequelize.DATE,
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      garcomId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      chefId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  },
};
