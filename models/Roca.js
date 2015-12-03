var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Propiedad = require('./Propiedad');

var Roca = client.define('roca', {
  rocaid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: Sequelize.STRING(5)
  },
  porcentaje: {
    type: Sequelize.INTEGER
  }
});

Roca.belongsTo(Propiedad, {as: 'Estructura'});
Roca.belongsTo(Propiedad, {as: 'Superficie'});

module.exports = Roca;
