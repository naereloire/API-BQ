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
    // associations can be defined here
  };
  return ordersItens;
};
