module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
      burger: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              len: [1,20]
          }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {
      freezeTableName: true
  });
  return Burger;
}