var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Labor = require('./Labor');
var User = require('./User');

var Tipo = require('./Tipo');
var Roca = require('./Roca');
var Sostenimiento = require('./Sostenimiento');
var Porcentaje = require('../models/Porcentaje');

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
}, {
  instanceMethods: {
    validarPorcentajes: function() {
      var roca = this.rocaRocaid;
      var alto_real = this.alto_real;
      var ancho_real = this.ancho_real;
      var nivel_riesgo = this.nivel_riesgo;
      var codigo = this.laborCodigo;
      var respuesta = new Promise(function(resolve, reject) {
        Labor.findById(codigo)
        .then(function(labor) {
          var por_alto = ((parseFloat(alto_real) * 100) / parseFloat(labor.alto_pro)) - 100;
          var por_ancho = ((parseFloat(ancho_real) * 100) / parseFloat(labor.ancho_pro)) - 100;
          Porcentaje.getNivelRiesgo(roca, por_alto, por_ancho).then(function(nivel) {
            if (nivel_riesgo !== nivel) {
              reject('Nivel de riesgo no corresponde a los porcentajes de sobreexcavacion');
            }
            resolve(true);
          })
          .catch(function(err) {
            console.log(err);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      });
      return respuesta;
    },
    validarRespuestas: function() {
      var nivel_riesgo = this.nivel_riesgo;
      var pregunta_ocho = this.respuestas['8'];
      var respuesta = new Promise(function(resolve, reject) {
        if (!pregunta_ocho && nivel_riesgo !== 'CRITICO') {
          reject('Nivel de riesgo deberia ser critico');
        } else {
          resolve(true);
        }
      });
      return respuesta;
    }
  },
  validate: {
    validarRiesgoGeneral: function() {
      if (!this.estado || !this.recomendacion || !this.instalacion) {
        if (this.nivel_riesgo !== 'CRITICO') {
          throw new Error('Nivel de riesgo deberia ser critico');
        }
      }
    }
  }
});

Inspeccion.belongsTo(Labor);
// Inspeccion.belongsTo(Empresa);
// Inspeccion.belongsTo(Tipo);
Inspeccion.belongsTo(Roca);
Inspeccion.belongsTo(Sostenimiento);
Inspeccion.belongsTo(User, {as: 'Responsable'});
Inspeccion.belongsTo(User, {as: 'Geomecanico'});
Inspeccion.belongsTo(User, {as: 'Seguridad'});
Inspeccion.belongsTo(User, {as: 'Operaciones'});
Inspeccion.belongsTo(User, {as: 'Registro'});

Inspeccion.hook('beforeValidate', function(inspeccion, options) {

});


module.exports = Inspeccion;
