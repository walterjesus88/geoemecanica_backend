var client = require('../dbConnection').getInstance().getClient();
var Rol = require('../models/Rol');
var User = require('../models/User');
var config = require('../config.json');

process.env.JWT_SECRET = config.express.keyJWT;

client.sync().then(function() {

  var roles = [
    {
      id: '001',
      nombre: 'Administrador'
    },
    {
      id: '101',
      nombre: 'Operaciones'
    },
    {
      id: '102',
      nombre: 'Seguridad'
    },
    {
      id: '103',
      nombre: 'Geomecanica'
    },
    {
      id: '104',
      nombre: 'Responsable'
    },
    {
      id: '105',
      nombre: 'Super Intendencia'
    },
    {
      id: '106',
      nombre: 'Gerencia General'
    },
    {
      id: '107',
      nombre: 'Planeamiento'
    }
  ];

  roles.forEach(function(item) {
    Rol.create({
      rol_id: item.id,
      nombre_rol: item.nombre
    })
    .then(function() {
      console.log('Rol ' + item.nombre + ' creado');
      if (item.id === '001') {
        User.create({
          uid: 'administrador',
          dni: '0000000',
          nombre: 'Root',
          password: 'root',
          rolRolId: '001',
          estado: 'Activo',
          uid_registro: 'administrador',
          correo: 'administrador@atacocha.com.pe'
        }
        )
        .then(function(user){
          console.log('Super Usuario creado, cambie el password en el primer accesso');
          console.log('Usuario: administrador');
          console.log('Password: root');
        })
        .catch(function(err) {
          console.log(err);
        });
      }
    })
  });

})
.catch(function(err) {
  console.log(err);
});
