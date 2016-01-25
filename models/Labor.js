var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Tipo = require('./Tipo');
var Empresa = require('./Empresa');

var Labor = client.define('labor', {
  codigo: {
    type: Sequelize.STRING(30),
    primaryKey: true
  },
  nombre: Sequelize.STRING(50),
  nivel: Sequelize.INTEGER,
  ancho_pro: Sequelize.DECIMAL(10, 2),
  alto_pro: Sequelize.DECIMAL(10, 2),
  estado: {
    type: Sequelize.STRING(1),
    validate: {
      isIn: [['A', 'I']]
    }
  }
});

Labor.belongsTo(Tipo);
Labor.belongsTo(Empresa);

module.exports = Labor;
