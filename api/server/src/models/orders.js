'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      cliente: DataTypes.STRING,
      cozinheiro: DataTypes.STRING,
      data: DataTypes.DATE,
      flagDelivered: DataTypes.BOOLEAN,
      garcom: DataTypes.STRING,
      hora: DataTypes.DATE,
      horaInicial: DataTypes.DATE,
      horaFinal: DataTypes.DATE,
      mesa: DataTypes.NUMBER,
      status: DataTypes.STRING,
      tempoPreparo: DataTypes.DATE,
      total: DataTypes.NUMBER,
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
    },
    {},
  );
  orders.associate = function (models) {
    orders.hasMany(models.ordersItens);
  };
  return orders;
};
