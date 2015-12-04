var client = require('../dbConnection').getInstance().getClient();
var Porcentaje = require('../models/Porcentaje');
var Roca = require('../models/Roca');

client.sync().then(function() {

  var porcentajes = [
    {
      porcentaje: 5,
      nivel: 'BAJO',
      roca: 'F/B'
    },
    {
      porcentaje: 10,
      nivel: 'BAJO',
      roca: 'F/B'
    },
    {
      porcentaje: 15,
      nivel: 'MEDIO',
      roca: 'F/B'
    },
    {
      porcentaje: 20,
      nivel: 'MEDIO',
      roca: 'F/B'
    },
    {
      porcentaje: 25,
      nivel: 'CRITICO',
      roca: 'F/B'
    },
    {
      porcentaje: 5,
      nivel: 'BAJO',
      roca: 'F/R'
    },
    {
      porcentaje: 9,
      nivel: 'BAJO',
      roca: 'F/R'
    },
    {
      porcentaje: 14,
      nivel: 'MEDIO',
      roca: 'F/R'
    },
    {
      porcentaje: 18,
      nivel: 'MEDIO',
      roca: 'F/R'
    },
    {
      porcentaje: 23,
      nivel: 'CRITICO',
      roca: 'F/R'
    },
    {
      porcentaje: 4,
      nivel: 'BAJO',
      roca: 'F/P'
    },
    {
      porcentaje: 8,
      nivel: 'BAJO',
      roca: 'F/P'
    },
    {
      porcentaje: 12,
      nivel: 'MEDIO',
      roca: 'F/P'
    },
    {
      porcentaje: 16,
      nivel: 'MEDIO',
      roca: 'F/P'
    },
    {
      porcentaje: 20,
      nivel: 'CRITICO',
      roca: 'F/P'
    },
    {
      porcentaje: 2,
      nivel: 'BAJO',
      roca: 'F/MP'
    },
    {
      porcentaje: 3,
      nivel: 'BAJO',
      roca: 'F/MP'
    },
    {
      porcentaje: 5,
      nivel: 'MEDIO',
      roca: 'F/MP'
    },
    {
      porcentaje: 6,
      nivel: 'MEDIO',
      roca: 'F/MP'
    },
    {
      porcentaje: 8,
      nivel: 'CRITICO',
      roca: 'F/MP'
    },
    {
      porcentaje: 4,
      nivel: 'BAJO',
      roca: 'MF/B'
    },
    {
      porcentaje: 7,
      nivel: 'BAJO',
      roca: 'MF/B'
    },
    {
      porcentaje: 11,
      nivel: 'MEDIO',
      roca: 'MF/B'
    },
    {
      porcentaje: 14,
      nivel: 'MEDIO',
      roca: 'MF/B'
    },
    {
      porcentaje: 18,
      nivel: 'CRITICO',
      roca: 'MF/B'
    },
    {
      porcentaje: 3,
      nivel: 'BAJO',
      roca: 'MF/R'
    },
    {
      porcentaje: 6,
      nivel: 'BAJO',
      roca: 'MF/R'
    },
    {
      porcentaje: 9,
      nivel: 'MEDIO',
      roca: 'MF/R'
    },
    {
      porcentaje: 12,
      nivel: 'MEDIO',
      roca: 'MF/R'
    },
    {
      porcentaje: 15,
      nivel: 'CRITICO',
      roca: 'MF/R'
    },
    {
      porcentaje: 2,
      nivel: 'BAJO',
      roca: 'MF/P'
    },
    {
      porcentaje: 3,
      nivel: 'BAJO',
      roca: 'MF/P'
    },
    {
      porcentaje: 5,
      nivel: 'MEDIO',
      roca: 'MF/P'
    },
    {
      porcentaje: 6,
      nivel: 'MEDIO',
      roca: 'MF/P'
    },
    {
      porcentaje: 8,
      nivel: 'CRITICO',
      roca: 'MF/P'
    },{
      porcentaje: 1,
      nivel: 'BAJO',
      roca: 'IF/B'
    },
    {
      porcentaje: 2,
      nivel: 'BAJO',
      roca: 'IF/B'
    },
    {
      porcentaje: 3,
      nivel: 'MEDIO',
      roca: 'IF/B'
    },
    {
      porcentaje: 4,
      nivel: 'MEDIO',
      roca: 'IF/B'
    },
    {
      porcentaje: 5,
      nivel: 'CRITICO',
      roca: 'IF/B'
    }
  ];

  porcentajes.forEach(function(item) {
    Roca.findOne({where: {codigo: item.roca}}).then(function(roca) {
      Porcentaje.create({
        porcentaje: item.porcentaje,
        nivel: item.nivel,
        rocaRocaid: roca.rocaid
      }).then(function() {
        console.log('porcentaje ' + item.porcentaje + '% de ' + item.roca + ' creado');
      })
      .catch(function(err) {
        console.log(err);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  });


})
.catch(function(err) {
  console.log(err);
});
