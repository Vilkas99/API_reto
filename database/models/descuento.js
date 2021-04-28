'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Descuento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Descuento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Descuento',
  });
  return Descuento;
};