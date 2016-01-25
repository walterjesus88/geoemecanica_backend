var client = require('../dbConnection').getInstance().getClient();
var Rol = require('../models/Rol');
var User = require('../models/User');
var config = require('../config.json');

client.sync().then(function() {
  
var usuarios = [
  {
        uid: 'administrador',
        dni: '0000000',
        nombre: 'Root',
        password: 'root',
        rolRolId: '001',
        estado: 'Activo',
        uid_registro: 'administrador',
        correo: 'administrador@atacocha.com.pe'
  }
];

  usuarios.forEach(function(item) {
    User.create({
        uid: item.uid,
        dni: item.dni,
        nombre: item.nombre,
        password: item.password,
        rolRolId: item.rolRolId,
        estado: item.estado,
        uid_registro: item.uid_registro,
        correo: item.correo,
        //cargo:item.cargo
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

