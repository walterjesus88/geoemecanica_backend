var Observacion = require('../models/Observacion.js');
var Inspeccion = require('../models/Inspeccion.js');
var User = require('../models/User.js');
var Labor = require('../models/Labor.js');

exports.index = function(req,res,next){
	Observacion.findAll({
		include: [
			{ model: Inspeccion, 
				include : [ { model: Labor, attributes: ['nivel']},
				{ model: User, as: 'Responsable', attributes: ['nombre']}],
			attributes: ['nivel_riesgo','comentario','laborCodigo'] }
		],
		where: { userUid: req.user.uid }
	})
	.then(function(observaciones){
		res.status(200).jsonp(observaciones);
	})
	.catch(function(err){
		console.log('500');
		res.send(500, err)
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
		estado_leido: req.body.estado,
		estado_observacion: req.body.estado_observacion,
		inspeccionInspeccionId: req.body.inspeccionInspeccionId,
		userUid: req.body.userUid
	})
	.then(function(observacion) {
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
		if(req.body.estado_leido){
			observacion.estado_leido = req.body.estado_leido;
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