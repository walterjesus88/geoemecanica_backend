var client = require('../dbConnection').getInstance().getClient();
var Recurso = require('../models/Recurso');
var ACL = require('../models/ACL');

Recurso.sync({force: true}).then(function() {

	var recursos = [
    {id: '/labores', ruta: '/labores'},
    {id: '/users', ruta: '/users'},
    {id: '/inspecciones', ruta: '/inspecciones'},
    {id: '/tipos', ruta: '/tipos'},
    {id: '/rocas', ruta: '/rocas'},
    {id: '/sostenimientos', ruta: '/sostenimientos'},
    {id: '/roles', ruta: '/roles'},
    {id: '/empresas', ruta: '/empresas'},
    {id: '/observaciones', ruta: '/observaciones'},
    {id: '/porcentajes', ruta: '/porcentajes'},
    {id: '/preguntas', ruta: '/preguntas'},
		{id: '/enviar', ruta: '/enviar'}
	];

  var acls = [
    {rolRolId: '001', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/labores', metodo: 'POST', acceso: true},
    {rolRolId: '001', RecursoId: '/labores', metodo: 'PUT', acceso: true},
    {rolRolId: '001', RecursoId: '/labores', metodo: 'DELETE', acceso: true},
    {rolRolId: '001', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/users', metodo: 'POST', acceso: true},
    {rolRolId: '001', RecursoId: '/users', metodo: 'PUT', acceso: true},
    {rolRolId: '001', RecursoId: '/users', metodo: 'DELETE', acceso: true},
		{rolRolId: '001', RecursoId: '/roles', metodo: 'GET', acceso: true},
		{rolRolId: '001', RecursoId: '/inspecciones', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/inspecciones', metodo: 'POST', acceso: true},
    {rolRolId: '001', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/preguntas', metodo: 'GET', acceso: true},
		{rolRolId: '001', RecursoId: '/observaciones', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/observaciones', metodo: 'POST', acceso: true},
    {rolRolId: '001', RecursoId: '/observaciones', metodo: 'PUT', acceso: true},
		{rolRolId: '001', RecursoId: '/enviar', metodo: 'GET', acceso: true},
		{rolRolId: '001', RecursoId: '/enviar', metodo: 'POST', acceso: true},

		{rolRolId: '101', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/inspecciones', metodo: 'POST', acceso: true},
    {rolRolId: '101', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '102', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/inspecciones', metodo: 'POST', acceso: true},
    {rolRolId: '102', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '102', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '103', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/inspecciones', metodo: 'POST', acceso: true},
    {rolRolId: '103', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '103', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '104', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/inspecciones', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '104', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '105', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/inspecciones', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '105', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '106', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/inspecciones', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '106', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

		{rolRolId: '107', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/inspecciones', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '107', RecursoId: '/preguntas', metodo: 'GET', acceso: true}

  ];

	ACL.sync({force: true}).then(function() {
		Recurso.bulkCreate(recursos).then(function() {
	    console.log('Creado los recursos');
	    ACL.bulkCreate(acls).then(function() {
	      console.log('Creado la lista de control de acceso');
	    })
	    .catch(function(err) {
	      console.log(err);
	    });
	  })
	  .catch(function(err) {
	    console.log(err);
	  });
	})
	.catch(function(err) {
		console.log(err);
	})


})
.catch(function(err) {
  console.log(err);
});
