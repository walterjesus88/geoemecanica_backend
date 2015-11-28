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
      this.setDataValue('token', this.generateToken());
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
    },
    generateToken: function() {
      return jwt.sign(this, process.env.JWT_SECRET);
    }
  }
});

User.belongsTo(Rol);

module.exports = User;
