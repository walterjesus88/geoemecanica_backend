var Roca = require('../models/Roca');
var Propiedad = require('../models/Propiedad');

var propiedades = [
  {
    codigo: 'F',
    tipo: 'ESTRUCTURA',
    condicion: 'FRACTURADA',
    descripcion: 'MUY BIEN TRABADA, NO DISTURBADA, BLOQUES CUBICOS FORMADOS POR ' +
    'TRES SISTEMAS DE DISCONTINUIDADES ORTOGONALES. (RQD 50 - 75)',
    mensaje: '6 A 12 FRACT. POR METRO'
  },
  {
    codigo: 'MF',
    tipo: 'ESTRUCTURA',
    condicion: 'MUY FRACTURADA',
    descripcion: 'MODERADAMENTE TRABADA, PARCIALMENTE DISTURBADA, BLOQUES ' +
    'ANGULOSOS FORMADOS POR CUATRO O MAS SISTEMAS DE DISCONTINUIDADES. (RQD 25 - 50)',
    mensaje: '12 A 20 FRACT. POR METRO'
  },
  {
    codigo: 'IF',
    tipo: 'ESTRUCTURA',
    condicion: 'INTENSAMENTE FRACTURADA',
    descripcion: 'PLEGAMIENTO Y FALLAMIENTO, DISCONTINUIDADES INTERCEPTADAS ' +
    'BLOQUES ANGULOSOS O IRREG. (RQD 0 - 25)',
    mensaje: 'MAS DE 20 FRACT. POR METRO'
  },
  {
    codigo: 'B',
    tipo: 'CONDICION SUPERFICIAL',
    condicion: 'BUENA (MUY RESISTENTE, LEVEMENTE ALTERADA)',
    descripcion: 'DISCONTINUIDADES RUGOSAS, LEV. ALTERADA, MANCHAS DE ' +
    'OXIDACION, LIGER. ABIERTA. (RC 100 A 250 MPA)',
    mensaje: 'SE ROMPE CON VARIOS GOLPES DE PICOTA'
  },
  {
    codigo: 'R',
    tipo: 'CONDICION SUPERFICIAL',
    condicion: 'REGULAR (RESISTENTE Y LEVEMENTE ALTERADA)',
    descripcion: 'DISCONTINUIDADES LISAS, MODERADAMENTE ALTERADA, LIGERAMENTE ' +
    'ABIERTAS. (RC 50 A 100 MPA)',
    mensaje: 'SE ROMPE CON UNO O DOS GOLPES DE PICOTA'
  },
  {
    codigo: 'P',
    tipo: 'CONDICION SUPERFICIAL',
    condicion: 'POBRE (MODERADAM. RESIST. MODERADAM. ALTER.)',
    descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALTERADA, RELLENO ' +
    'BITUMINOSO O CON FRAGMENTOS DE ROCA. (RC 25 A 50 MPA)',
    mensaje: 'SE INDENTA SUPERFICIALMENTE'
  },
  {
    codigo: 'MP',
    tipo: 'CONDICION SUPERFICIAL',
    condicion: 'MUY POBRE (BLANDA, MUY ALTERADA)',
    descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALT. RELLENO ARCILLOSO ' +
    'O CON FRAGMENTOS DE ROCA.',
    mensaje: 'SE DISGREGA CON GOLPE DE PICOTA'
  }
];

function findPorcentaje(codigo) {
  var porcent;
  var porcentajes = [
    {codigo: 'F/B', porcentaje: 10},
    {codigo: 'F/R', porcentaje: 9},
    {codigo: 'F/P', porcentaje: 8},
    {codigo: 'F/MP', porcentaje: 3},
    {codigo: 'MF/B', porcentaje: 7},
    {codigo: 'MF/R', porcentaje: 6},
    {codigo: 'MF/P', porcentaje: 3},
    {codigo: 'MF/MP', porcentaje: 0},
    {codigo: 'IF/B', porcentaje: 2},
    {codigo: 'IF/R', porcentaje: 0},
    {codigo: 'IF/P', porcentaje: 0},
    {codigo: 'IF/MP', porcentaje: 0}
  ];
  porcentajes.forEach(function(item) {
    if (item.codigo === codigo) {
      porcent = item.porcentaje;
    }
  });
  return porcent;
}

Roca.sync({force: true}).then(function() {
  propiedades.forEach(function(estructura) {
    if (estructura.tipo === 'ESTRUCTURA') {
      propiedades.forEach(function(superficie) {
        if (superficie.tipo === 'CONDICION SUPERFICIAL') {
          Propiedad.findOne({where: {codigo: estructura.codigo}}).then(function(est) {
            Propiedad.findOne({where: {codigo: superficie.codigo}}).then(function(sup) {
              Roca.findOne({where: {codigo: est.codigo + '/' + sup.codigo}})
              .then(function(roca) {
                if (!roca) {
                  Roca.create({
                    codigo: est.codigo + '/' + sup.codigo,
                    porcentaje: findPorcentaje(est.codigo + '/' + sup.codigo),
                    EstructuraId: est.id,
                    SuperficieId: sup.id
                  })
                  .then(function(roca) {
                    console.log(roca.porcentaje + ' insertado en la tabla rocas');
                  })
                  .catch(function(err) {
                    console.log(err);
                  });
                }
              })
              .catch(function(err) {
                console.log(err);
              });
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
})
.catch(function(err) {
  console.log(err);
});
