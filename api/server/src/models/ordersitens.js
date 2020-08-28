'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersItens = sequelize.define(
    'ordersItens',
    {
      count: DataTypes.NUMBER,
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
    },
    {},
  );
  ordersItens.associate = function (models) {
    // associations can be defined here
  };
  return ordersItens;
};
