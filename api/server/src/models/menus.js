'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define(
    'menus',
    {
      item: DataTypes.STRING,
      menu: DataTypes.NUMBER,
      price: DataTypes.NUMBER,
      type: DataTypes.STRING,
    },
    {},
  );
  menus.associate = function (models) {
    menus.hasMany(models.ordersItens);
  };
  return menus;
};
