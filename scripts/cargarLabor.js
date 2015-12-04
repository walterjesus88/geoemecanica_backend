var client = require('../dbConnection').getInstance().getClient();
var Labor = require('../models/Labor');

client.sync().then(function() {
  
	var labores = [
		{
			id: 'LAB-1506',
      nombre: 'AVANCE'
		}
	];

  labores.forEach(function(item) {
    Labor.create({
      	codigo: item.id,
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

