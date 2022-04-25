'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    
    static associate(models) {
      // define association here
      contact.belongsTo(models.user, {
        as: 'user',
        foreignKey: 'iduser'
      })
    }
  };
  contact.init({
    iduser: DataTypes.INTEGER,
    number: DataTypes.STRING,
    telephone: DataTypes.BIGINT,
    company: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};