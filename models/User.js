var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');
var crypto = require('crypto');

var User = client.define('user', {
  uid: {
    type: Sequelize.STRING(30),
    primaryKey: true
  },
  dni: Sequelize.STRING(8),
  nombre : Sequelize.STRING(50),
  password: {
    type: Sequelize.STRING,
    set: function(val) {
      this.setDataValue('salt', User.makeSalt());
      this.setDataValue('password', this.encryptPassword(val));
    }
  },
  salt: Sequelize.STRING,
  token: Sequelize.STRING,
  estado: Sequelize.STRING(20),
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

module.exports = User;
