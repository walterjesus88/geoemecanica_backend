var Propiedad = require('../models/Propiedad');

Propiedad.sync({force: true}).then(function() {

  var propiedades = [
    {
      codigo: 'F',
      tipo: 'ESTRUCTURA',
      condicion: 'FRACTURADA',
      caracteristica: '',
      descripcion: 'MUY BIEN TRABADA, NO DISTURBADA, BLOQUES CUBICOS FORMADOS POR ' +
      'TRES SISTEMAS DE DISCONTINUIDADES ORTOGONALES. (RQD 50 - 75)',
      mensaje: '6 A 12 FRACT. POR METRO'
    },
    {
      codigo: 'MF',
      tipo: 'ESTRUCTURA',
      condicion: 'MUY FRACTURADA',
      caracteristica: '',
      descripcion: 'MODERADAMENTE TRABADA, PARCIALMENTE DISTURBADA, BLOQUES ' +
      'ANGULOSOS FORMADOS POR CUATRO O MAS SISTEMAS DE DISCONTINUIDADES. (RQD 25 - 50)',
      mensaje: '12 A 20 FRACT. POR METRO'
    },
    {
      codigo: 'IF',
      tipo: 'ESTRUCTURA',
      condicion: 'INTENSAMENTE FRACTURADA',
      caracteristica: '',
      descripcion: 'PLEGAMIENTO Y FALLAMIENTO, DISCONTINUIDADES INTERCEPTADAS ' +
      'BLOQUES ANGULOSOS O IRREG. (RQD 0 - 25)',
      mensaje: 'MAS DE 20 FRACT. POR METRO'
    },
    {
      codigo: 'B',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'BUENA',
      caracteristica: 'MUY RESISTENTE, LEVEMENTE ALTERADA',
      descripcion: 'DISCONTINUIDADES RUGOSAS, LEV. ALTERADA, MANCHAS DE ' +
      'OXIDACION, LIGER. ABIERTA. (RC 100 A 250 MPA)',
      mensaje: 'SE ROMPE CON VARIOS GOLPES DE PICOTA'
    },
    {
      codigo: 'R',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'REGULAR',
      caracteristica: 'RESISTENTE Y LEVEMENTE ALTERADA',
      descripcion: 'DISCONTINUIDADES LISAS, MODERADAMENTE ALTERADA, LIGERAMENTE ' +
      'ABIERTAS. (RC 50 A 100 MPA)',
      mensaje: 'SE ROMPE CON UNO O DOS GOLPES DE PICOTA'
    },
    {
      codigo: 'P',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'POBRE',
      caracteristica: 'MODERADAM. RESIST. MODERADAM. ALTER.',
      descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALTERADA, RELLENO ' +
      'BITUMINOSO O CON FRAGMENTOS DE ROCA. (RC 25 A 50 MPA)',
      mensaje: 'SE INDENTA SUPERFICIALMENTE'
    },
    {
      codigo: 'MP',
      tipo: 'CONDICION SUPERFICIAL',
      condicion: 'MUY POBRE',
      caracteristica: 'BLANDA, MUY ALTERADA',
      descripcion: 'SUPERFICIE PULIDA O CON ESTRIACIONES, MUY ALT. RELLENO ARCILLOSO ' +
      'O CON FRAGMENTOS DE ROCA.',
      mensaje: 'SE DISGREGA CON GOLPE DE PICOTA'
    }
  ];

  propiedades.forEach(function(item) {

    Propiedad.findOne({where: {codigo: item.codigo}})
    .then(function(propiedad) {
      if (!propiedad) {
        Propiedad.create({
          codigo: item.codigo,
          tipo: item.tipo,
          condicion: item.condicion,
          caracteristica: item.caracteristica,
          descripcion: item.descripcion,
          mensaje: item.mensaje
        })
        .then(function(prop){
            console.log(prop.codigo + ' insertada en la tabla propiedads');
        })
        .catch(function(err) {
            console.log(err);
        });
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  });

})
.catch(function(err) {
  console.log(err);
});
