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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/ALTERNATES/FREE_960/02th-egg-person"
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