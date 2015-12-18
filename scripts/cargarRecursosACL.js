var client = require('../dbConnection').getInstance().getClient();
var Recurso = require('../models/Recurso');
var ACL = require('../models/ACL');

client.sync().then(function() {

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
    {id: '/preguntas', ruta: '/preguntas'}
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
    {rolRolId: '101', RecursoId: '/labores', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/users', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/inspecciones', metodo: 'POST', acceso: true},
    {rolRolId: '101', RecursoId: '/tipos', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/rocas', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/sostenimientos', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/empresas', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/porcentajes', metodo: 'GET', acceso: true},
    {rolRolId: '101', RecursoId: '/preguntas', metodo: 'GET', acceso: true},

    {rolRolId: '001', RecursoId: '/observaciones', metodo: 'GET', acceso: true},
    {rolRolId: '001', RecursoId: '/observaciones', metodo: 'POST', acceso: true},
    {rolRolId: '001', RecursoId: '/observaciones', metodo: 'PUT', acceso: true}

  ];

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
});
