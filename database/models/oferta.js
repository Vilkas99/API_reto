'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Oferta.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    descuento: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    idVendedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Oferta',
  });
  return Oferta;
};