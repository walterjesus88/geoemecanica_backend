var client = require('../dbConnection').getInstance().getClient();
var Observacion = require('../models/Observacion');

client.sync().then(function() {

	/*var observaciones = [
		{
			nivel_riesgo: 'CRITICO',
			estado_observacion: 'PENDIENTE'
		},
		{
			nivel_riesgo: 'MEDIO',
			estado_observacion: 'PENDIENTE'
		},
		{
			nivel_riesgo: 'BAJO',
			estado_observacion: 'PENDIENTE'
		}
	];

	observaciones.forEach(function(item){
		Observacion.create({
			nivel_riesgo: item.nivel_riesgo,
			estado_observacion: item.estado_observacion
		})
		.then(function(observaciones){
			console.log('observacion'+item.nivel_riesgo+'creado');
		})
		.catch(function(err){
			console.log(err);
		})
	})*/
	console.log('tabla observaciones creada');
})