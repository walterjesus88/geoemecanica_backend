var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Empresa = client.define('empresa', {
  empresaid:  {
    type: Sequelize.STRING(20),
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING(50)
  }
});

module.exports = Empresa;
