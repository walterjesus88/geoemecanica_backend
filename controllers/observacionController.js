var Observacion = require('../models/Observacion.js');

exports.index = function(req,res,next){
	Observacion.findAll()
	.then(function(observaciones){
		res.status(200).jsonp(observaciones);
	})
}

exports.show = function(req,res,next){
	Observacion.findById(req.params.id)
	.then(function(observacion) {
		res.status(200).jsonp(observacion);
	})
}

exports.store = function(req,res,next){
	Observacion.create({
		observacion_id: req.body.observacion_id,
		nivel_riesgo: req.body.nivel_riesgo,
		estado: req.body.estado,
		estado_observacion: req.body.estado_observacion
	})
	then(function(observacion) {
		res.status(201).jsonp(observacion);
	})
	.catch(function(err){
		console.log('500');
		res.send(500, err)
	})

}

exports.update = function(req,res,next){
	Observacion.findById(req.params.id)
	.then(function(observacion){
		if(!observacion) return res.send(400,'Observacion no existe');
		if(req.body.nivel_riesgo){
			observacion.nivel_riesgo = req.body.nivel_riesgo;
		}
		if(req.body.estado){
			observacion.estado = req.body.estado;
		}
		if(req.body.estado_observacion){
			observacion.estado_observacion = req.body.estado_observacion;
		}
		observacion.save().then(function(){
			res.send('actualizado');
		});
	})
	.catch(function(err){
		res.status(500).send(err);
	})
}

exports.destroy = function(req,res,next){
	Observacion.findById(req.params.id)
	.then(function(observacion){
		observacion.destroy().then(function(){
			res.send('eliminado');
		})
	})
	.catch(function(err){
		res.status(500).send(err);
	})
}