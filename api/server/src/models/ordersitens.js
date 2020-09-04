'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersItens = sequelize.define(
    'ordersItens',
    {
      count: DataTypes.INTEGER,
    },
    {},
  );
  ordersItens.associate = function (models) {
    ordersItens.belongsTo(models.menus, {
      foreignKey: 'menuId',
    });
    ordersItens.belongsTo(models.orders, {
      foreignKey: 'orderId',
    });
  };
  return ordersItens;
};
