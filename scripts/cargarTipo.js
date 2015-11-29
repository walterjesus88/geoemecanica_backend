var client = require('../dbConnection').getInstance().getClient();
var Tipo = require('../models/Tipo');

client.sync().then(function() {

  var tipos = [
    {
      id: 'A',
      nombre: 'AVANCE'
    },
    {
      id: 'E',
      nombre: 'EXPLOTACION'
    }
  ];

  tipos.forEach(function(item) {
    Tipo.create({
      tipo_id: item.id,
      nombre: item.nombre
    })
    .then(function(tipo) {
      console.log('tipo ' + item.nombre + ' creado');
    })
    .catch(function(err) {
      console.log(err);
    })
  })

})
.catch(function(err) {
  console.log(err);
});
