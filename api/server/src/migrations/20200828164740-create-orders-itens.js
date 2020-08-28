'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ordersItens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'menus', key: 'id' },
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'orders', key: 'id' },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ordersItens');
  },
};
