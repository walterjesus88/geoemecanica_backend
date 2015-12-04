var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var Roca = require('./Roca');

var Porcentaje = client.define('porcentaje', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  porcentaje: Sequelize.INTEGER,
  nivel: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['BAJO', 'MEDIO', 'CRITICO']]
    }
  }
}, {
  classMethods: {
    getNivelRiesgo: function(roca, por_alto, por_ancho) {
      var nivel = 'CRITICO';
      var por = 0;
      if (por_alto > por_ancho) {
        por = por_alto;
      } else {
        por = por_ancho;
      }
      var respuesta = new Promise(function(resolve, reject) {
        Porcentaje.findAll({where: {rocaRocaid: roca}, order: 'porcentaje'}).then(function(porcentajes) {
          if (porcentajes) {
            var cont = 0;
            porcentajes.forEach(function(item) {
              if (item.porcentaje >= por && cont === 0) {
                nivel = item.nivel;
                cont = 1;
              }
            });
          }
          resolve(nivel);
        })
        .catch(function(err) {
          reject(err);
        });
      });
      return respuesta;
    }
  }
});

Porcentaje.belongsTo(Roca);

module.exports = Porcentaje;
