'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define(
    'menus',
    {
      item: DataTypes.STRING,
      menu: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(10, 2),
      type: DataTypes.STRING,
    },
    {},
  );
  menus.associate = function (models) {
    menus.hasMany(models.ordersItens, { foreignKey: 'id' });
  };
  return menus;
};
