var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Inspeccion = require('./Inspeccion');
var User = require('./User');

var Observacion = client.define('observaciones', {
  observacion_id:  {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  estado_leido: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  estado_observacion: {
    type: Sequelize.STRING(10),
    validate: {
      isIn: [['REVISADO', 'PENDIENTE']]
  }}

});

Observacion.belongsTo(Inspeccion);
Observacion.belongsTo(User);

module.exports = Observacion;