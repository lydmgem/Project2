// This file creates  

module.exports = function(sequelize, DataTypes) {
  var  UserClick = sequelize.define("UserClick", {
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

  return UserClick;
}