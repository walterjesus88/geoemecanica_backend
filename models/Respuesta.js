var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Inspeccion = require('./Inspeccion');
var Pregunta = require('./Pregunta');

var Respuesta = client.define('respuesta', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  respuesta: {
    type: Sequelize.JSON
  }
});

Respuesta.belongsTo(Inspeccion);
Inspeccion.hasMany(Respuesta);
Respuesta.belongsTo(Pregunta);

module.exports = Respuesta;
