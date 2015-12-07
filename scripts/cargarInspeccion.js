var client = require('../dbConnection').getInstance().getClient();
var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');

client.sync().then(function() {

  var Inspecciones = [
    {
      comentario:'xxx',
    }
  ];

  Inspecciones.forEach(function(item) {
    Inspeccion.create({
      comentario: item.comentario,

    })
    .then(function(inspeccion) {
      //console.log('Inspeccion ' + item.nombre + ' creado');
    })
    .catch(function(err) {
      console.log(err);
    })
  });

})
.catch(function(err) {
  console.log(err);
});
