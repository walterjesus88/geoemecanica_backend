var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var User = client.define('user', {
  Codigo: {
    type: Sequelize.STRING,
    unique: true
  },
  Nombre: Sequelize.STRING
});

module.exports = User;
