var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Rol = client.define('rol', {
  rol_id: {
    type: Sequelize.STRING(3),
    primaryKey: true
  },
  nombre_rol: {
    type: Sequelize.STRING(30)
  }
}, {
  classMethods: {

  },
  instanceMethods: {

  }
});

module.exports = Rol;
