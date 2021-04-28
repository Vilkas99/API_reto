'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      cuenta: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      correo: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      cp: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};