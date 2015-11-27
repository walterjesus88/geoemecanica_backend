var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Tipo = client.define('tipo', {
  tipo_id: {
    type: Sequelize.STRING(1),
    primaryKey: true
  },
  nombre: Sequelize.STRING(20)
});

module.exports = Tipo;
