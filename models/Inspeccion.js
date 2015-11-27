var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Labor = require('./Labor');
var User = require('./User');
var Empresa = require('./Empresa');

var Inspeccion = client.define('inspeccion', {
  inspeccion_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.now
  },
  periodo: {
    type: Sequelize.STRING(5),
    validate: {
      isIn: [['DIA', 'NOCHE']]
    }
  },
  tipo: {
    type: Sequelize.STRING(15),
    validate: {
      isIn: [['AVANCE', 'EXPLOTACION']]
    }
  },
  estado: Sequelize.BOOLEAN,
  recomendacion: Sequelize.BOOLEAN,
  instalacion: Sequelize.BOOLEAN,
  ancho_real: Sequelize.DECIMAL(10, 2),
  alto_real: Sequelize.DECIMAL(10, 2),
  nivel_riesgo: {
    type: Sequelize.STRING(10),
    validate: {
      isIn: [['BAJO', 'MEDIO', 'CRITICO']]
    }
  },
  comentario: Sequelize.STRING
});

Inspeccion.belongsTo(Labor);
Inspeccion.belongsTo(Empresa);
Inspeccion.belongsTo(User, {as: 'Responsable'});
Inspeccion.belongsTo(User, {as: 'Geomecanico'});
Inspeccion.belongsTo(User, {as: 'Seguridad'});
Inspeccion.belongsTo(User, {as: 'Operaciones'});
Inspeccion.belongsTo(User, {as: 'Registro'});


module.exports = Inspeccion;
