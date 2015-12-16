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
    validarRiesgo: function(respuestas) {
      var estado = this.estado;
      var recomendacion = this.recomendacion;
      var instalacion = this.instalacion;
      var roca = this.rocaRocaid;
      var alto = this.alto_real;
      var ancho = this.ancho_real;
      var riesgo = this.nivel_riesgo;
      var laborid = this.laborCodigo;

      var promesa = new Promise(function(resolve, reject) {
        Labor.findById(laborid)
        .then(function(labor) {
          var porAlto = ((parseFloat(alto) * 100) / parseFloat(labor.alto_pro)) - 100;
          var porAncho = ((parseFloat(ancho) * 100) / parseFloat(labor.ancho_pro)) - 100;
          Porcentaje.getNivelRiesgo(roca, porAlto, porAncho).then(function(nivel) {

            if (riesgo === 'CRITICO') {
              if (estado && recomendacion && instalacion && respuestas[8].value) {
                if (riesgo === nivel) {
                  resolve(true);
                } else {
                  reject('Error de validacion, nivel de riesgo no puede ser ' + riesgo);
                }
              } else {
                resolve(true);
              }
            } else if (riesgo === 'MEDIO' || riesgo === 'BAJO') {
              if (!estado || !recomendacion || !instalacion || !respuestas[8].value) {
                reject('Error de validacion, nivel de riesgo no puede ser ' + riesgo);
              } else {
                if (riesgo === nivel) {
                  resolve(true);
                } else {
                  reject('Error de validacion, nivel de riesgo no puede ser ' + riesgo);
                }
              }
            }

          })
          .catch(function(err) {
            console.log(err);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      });

      return promesa;
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
