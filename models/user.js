// This file creates  

module.exports = function(sequelize, DataTypes) {
  var  User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    snake: {
      type: DataTypes.INTEGER
    }, 
    click: {
      type: DataTypes.INTEGER
    }, 
    brick: {
      type: DataTypes.INTEGER
    }
  });

  return User;
}
 