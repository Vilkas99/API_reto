'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oferta_Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Oferta_Usuario.init({
    idOferta: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Oferta_Usuario',
  });
  return Oferta_Usuario;
};