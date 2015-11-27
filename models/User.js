var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var Rol = require('./Rol');

var User = client.define('user', {
  uid: {
    type: Sequelize.STRING(30),
    primaryKey: true
  },
  dni: {
    type: Sequelize.STRING(8),
    validate: {
        isNumeric: true
    }
  },
  nombre : {
    type: Sequelize.STRING(50)
  },
  password: {
    type: Sequelize.STRING(100),
    set: function(val) {
      this.setDataValue('salt', User.makeSalt());
      this.setDataValue('password', this.encryptPassword(val));
    }
  },
  correo: {
    type: Sequelize.STRING(40),
    validate: {
      isEmail: true
    }
  },
  salt: Sequelize.STRING(50),
  token: Sequelize.STRING(1234),
  estado: {
    type: Sequelize.STRING(20),
    validate: {
      isIn: [['Activo', 'Inactivo']]
    }
  },
  uid_registro: Sequelize.STRING(30)
}, {
  classMethods: {
    makeSalt: function() {
      return Math.round((new Date().valueOf() * Math.random())) + '';
    }
  },
  instanceMethods: {
    encryptPassword: function(password) {
      try {
        return crypto
          .createHmac('sha1', this.salt)
          .update(password)
          .digest('hex');
      } catch (err) {
        return err;
      }
    },
    authenticate: function(pwd) {
      return (this.encryptPassword(pwd) === this.password);
    }
  }
});

User.belongsTo(Rol);

/*script de creacion de tablas, creacion de los roles mas importantes y
creacion del superusuario*/
client.sync().then(function() {
  console.log('Tablas Creadas');

  Rol.create({
    rol_id: '001',
    nombre_rol: 'Administrador'
  })
  .then(function() {
    console.log('Rol Administrador creado');
    User.create({
      uid: 'administrador',
      dni: '0000000',
      nombre: 'Root',
      password: 'root',
      rolRolId: '001',
      estado: 'Activo',
      uid_registro: 'administrador',
      correo: 'administrador@atacocha.com.pe'
    })
    .then(function(user){
      user.token = jwt.sign(user, process.env.JWT_SECRET);
      user.save().then(function() {
        console.log('Super Usuario creado, cambie el password en el primer accesso');
        console.log('Usuario: administrador');
        console.log('Password: root');
      }).catch(function(err) {
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

  Rol.create({
    rol_id: '101',
    nombre_rol: 'Inspector'
  })
  .then(function() {
    console.log('Rol Inspector creado');
    Rol.create({
      rol_id: '102',
      nombre_rol: 'Responsable'
    })
    .then(function() {
      console.log('Rol responsable creado');
    })
    .catch(function(err) {
      console.log(err);
    });
  })
  .catch(function(err) {
    console.log(err);
  });
});

module.exports = User;
