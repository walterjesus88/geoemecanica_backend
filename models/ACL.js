var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Rol = require('./Rol');
var Recurso = require('./Recurso');

var ACL = client.define('ACL', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  metodo: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['GET', 'POST', 'PUT', 'DELETE']]
    }
  },
  acceso: {
    type: Sequelize.BOOLEAN
  }
});

ACL.belongsTo(Rol);
ACL.belongsTo(Recurso);

module.exports = ACL;
