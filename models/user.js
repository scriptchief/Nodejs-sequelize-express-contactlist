'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
 
    static associate(models) {
      // define association here
      user.hasMany(models.contact, {
        as: 'contact',
        foreignKey: 'iduser'
      })
    }
  };
  user.init({
    number: DataTypes.STRING, 
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};