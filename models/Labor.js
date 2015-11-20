var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Labor = client.define('labor', {
  codigo: {
    type: Sequelize.STRING(10),
    primaryKey: true
  },
  nombre: Sequelize.STRING(20),
  nivel: Sequelize.DECIMAL(10, 2),
  ancho_pro: Sequelize.DECIMAL(10, 2),
  alto_pro: Sequelize.DECIMAL(10, 2),
  tipo: Sequelize.STRING(1),
  mfr: Sequelize.STRING(20)
});

module.exports = Labor;
