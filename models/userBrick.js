// This file creates  

module.exports = function(sequelize, DataTypes) {
  var  UserBrick = sequelize.define("UserBrick", {
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

  return UserBrick;
}