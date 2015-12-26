var client = require('../dbConnection').getInstance().getClient();
var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');

Inspeccion.sync({force: true}).then(function() {
  console.log('tabla inspeccions creada');
})
.catch(function(err) {
  console.log(err);
});
