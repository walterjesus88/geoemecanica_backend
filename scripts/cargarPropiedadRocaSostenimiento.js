var client = require('../dbConnection').getInstance().getClient();
var Propiedad = require('../models/Propiedad');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');

client.sync().then(function() {

  var propiedades = [
    {
      codigo: 'F',
      tipo: 'ESTRUCTURA',
      condicion: 'MODERADAMENTE FRACTURADA',
      descripcion: 'MUY BIEN TRABADA, NO DISTURBADA, BLOQUES CUBICOS FORMADOS POR ' +
      'TRES SISTEMAS DE DISCONTINUIDADES ORTOGONALES. (RQD 50 - 75) (6 A 12 FRACT. POR METRO)'
    },
    {
      codigo: 'MF',
      tipo: 'ESTRUCTURA',
      condicion: 'MUY FRACTURADA',
      descripcion: 'MODERADAMENTE TRABADA, PARCIALMENTE DISTURBADA, BLOQUES ' +
      'ANGULOSOS FORMADOS POR CUATRO O MAS SISTEMAS DE DISCONTINUIDADES. (RQD 25 - 50) (12 A 20 FRACT. POR METRO)'
    },
    {
      codigo: 'IF',
      tipo: 'ESTRUCTURA',
      condicion: 'INTENSAMENTE FRACTURADA',
      descripcion: 'PLEGAMIENTO Y FALLAMIENTO, DISCONTINUIDADES INTERCEPTADAS ' +
      'BLOQUES ANGULOSOS O IRREG. (RQD 0 - 25) (MAS DE 20 FRACT. POR METRO)'
    },
    {
      codigo: 'B',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'BUENA (MUY RESISTENTE, LEVEMENTE ALTERADA)',
      descripcion: 'DISCONTINUIDADES RUGOSAS, LEV. ALTERADA, MANCHAS DE ' +
      'OXIDACION, LIGER. ABIERTA. (RC 100 A 250 MPA) (SE ROMPE CON VARIOS GOLPES DE PICOTA)'
    },
    {
      codigo: 'R',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'REGULAR (RESISTENTE Y LEVEMENTE ALTERADA)',
      descripcion: 'DISCONTINUIDADES LISAS, MODERADAMENTE ALTERADA, LIGERAMENTE ' +
      'ABIERTAS. (RC 50 A 100 MPA) (SE ROMPE CON UNO O DOS GOLPES DE PICOTA)'
    },
    {
      codigo: 'P',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'POBRE (MODERADAMENTE RESIST. MODERADAM. ALTER.)',
      descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALTERADA, RELLENO ' +
      'BITUMINOSO O CON FRAGMENTOS DE ROCA. (RC 25 A 50 MPA) (SE INDENTA SUPERFICIALMENTE)'
    },
    {
      codigo: 'MP',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'MUY POBRE (BLANDA, MUY ALTERADA)',
      descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALT. RELLENO ARCILLOSO ' +
      'O CON FRAGMENTOS DE ROCA. (SE DISGREGA CON GOLPE DE PICOTA)'
    }
  ];

  propiedades.forEach(function(item) {

    Propiedad.create({
      codigo: item.codigo,
      tipo: item.tipo,
      condicion: item.condicion,
      descripcion: item.descripcion
    })
    .then(function(prop){
        console.log(prop.codigo + ' insertada en la tabla propiedads');
    })
    .catch(function(err) {
        console.log(err);
    });
  });

  propiedades.forEach(function(estructura) {
    if (estructura.tipo === 'ESTRUCTURA') {
      propiedades.forEach(function(superficie) {
        if (superficie.tipo === 'CONDICION SUPERFICIAL') {
          Propiedad.findOne({where: {codigo: estructura.codigo}}).then(function(est) {
            Propiedad.findOne({where: {codigo: superficie.codigo}}).then(function(sup) {
              Roca.create({
                codigo: est.codigo + '/' + sup.codigo,
                EstructuraId: est.id,
                SuperficieId: sup.id
              })
              .then(function(roca) {
                console.log(roca.codigo + ' insertado en la tabla rocas');
              })
              .catch(function(err) {
                console.log(err);
              })
            }).catch(function(err) {
              console.log(err);
            });
          }).catch(function(err) {
            console.log(err);
          });
        }
      });
    }
  });

  var sostenimientos = [
    {
      codigo: 'A',
      color: 'YELLOW',
      descripcion: 'Perno Helecoidal a 1.50 x 1.50 m. Malla electrosoldada.',
      tiempo_colocacion: '1 semana',
      tipo: 'A'
    },
    {
      codigo: 'B',
      color: 'GREEN',
      descripcion: 'Perno Helecoidal a 1.20 x 1.20 m. Malla electrosoldada.',
      tiempo_colocacion: '3 dias',
      tipo: 'A'
    },
    {
      codigo: 'C',
      color: 'CYAN',
      descripcion: 'Shotcrete con fibra (2"). Perno Helecoidal a 1.20 x 1.20 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'A'
    },
    {
      codigo: 'D',
      color: 'BLUE',
      descripcion: 'Shotcrete con fibra (2"). Perno Helecoidal a 1.20 x 1.20 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'A'
    },
    {
      codigo: 'E',
      color: 'PURPLE',
      descripcion: 'Shotcrete con fibra (3"). Perno Helecoidal a 1.00 x 1.00 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'A'
    },
    {
      codigo: 'F',
      color: 'RED',
      descripcion: 'Cimbras, espaciadas a 1.00 m. Marchavantes como guardacabeza.',
      tiempo_colocacion: '',
      tipo: 'A'
    },
    {
      codigo: 'A',
      color: 'YELLOW',
      descripcion: 'Split Set a 1.50 x 1.50 m. Malla electrosoldada.',
      tiempo_colocacion: '1 semana',
      tipo: 'E'
    },
    {
      codigo: 'B',
      color: 'GREEN',
      descripcion: 'Split Set a 1.20 x 1.20 m. Malla electrosoldada.',
      tiempo_colocacion: '3 dias',
      tipo: 'E'
    },
    {
      codigo: 'C',
      color: 'CYAN',
      descripcion: 'Split Set a 1.00 x 1.00 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'E'
    },
    {
      codigo: 'D',
      color: 'BLUE',
      descripcion: 'Shotcrete con fibra (2"). Split Set a 1.20 x 1.20 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'E'
    },
    {
      codigo: 'E',
      color: 'PURPLE',
      descripcion: 'Shotcrete con fibra (3"). Split Set a 1.00 x 1.00 m. Malla electrosoldada.',
      tiempo_colocacion: 'inmediato',
      tipo: 'E'
    }
  ];

  sostenimientos.forEach(function(item) {
    Sostenimiento.create({
      codigo: item.codigo,
      color: item.color,
      descripcion: item.descripcion,
      tiempo_colocacion: item.tiempo_colocacion,
      tipoTipoId: item.tipo
    })
    .then(function() {
      console.log('sostenimiento ' + item.codigo + ' tipo ' + item.tipo + ' creado');
    })
    .catch(function(err) {
      console.log(err);
    });
  });

})
.catch(function(err) {
  console.log(err);
});
