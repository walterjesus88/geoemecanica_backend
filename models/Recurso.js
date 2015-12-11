var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Recurso = client.define('Recurso', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  ruta: {
    type: Sequelize.STRING
  }
});

module.exports = Recurso;
