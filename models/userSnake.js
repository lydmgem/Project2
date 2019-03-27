// This file creates  

module.exports = function(sequelize, DataTypes) {
  var  UserSnake = sequelize.define("UserSnake", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    score: {
      type: DataTypes.INTEGER
    }
  });

  return UserSnake;
}
 