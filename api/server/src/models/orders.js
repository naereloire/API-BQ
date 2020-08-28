'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      cliente: DataTypes.STRING,
      data: DataTypes.DATE,
      flagDelivered: DataTypes.BOOLEAN,
      hora: DataTypes.DATE,
      horaInicial: DataTypes.DATE,
      horaFinal: DataTypes.DATE,
      mesa: DataTypes.INTEGER,
      status: DataTypes.STRING,
      tempoPreparo: DataTypes.DATE,
      total: DataTypes.DECIMAL(10, 2),
    },
    {},
  );
  orders.associate = function (models) {
    orders.hasMany(models.ordersItens);
  };
  return orders;
};
