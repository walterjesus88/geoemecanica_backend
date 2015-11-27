var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Tipo = require('./Tipo');

var Sostenimiento = client.define('sostenimiento', {
  sostenimientoid:  {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: Sequelize.STRING(1),
    validate: {
      isIn: [['A', 'B', 'C', 'D', 'E', 'F']]
    }
  },
  color: {
    type: Sequelize.STRING(10),
    validate: {
      isIn: [['AMARILLO', 'VERDE', 'CELESTE', 'AZUL', 'MORADO', 'ROJO']]
    }
  },
  descripcion: {
    type: Sequelize.STRING(100)
  },
  tiempo_colocacion: {
    type: Sequelize.STRING(20)
  }
});

Sostenimiento.belongsTo(Tipo);

module.exports = Sostenimiento;
