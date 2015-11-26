/*conexion a la base de datos con los parametros del archivo config.json y
utilizando el modulo sequeliza*/

var config = require('./config.json');
var host = config.postgres.host;
var database = config.postgres.db;
var username = config.postgres.user;
var password = config.postgres.password;
var Sequelize = require('sequelize');

var dbConnection = (function() {
  var instance = null;
  function PrivateContructor(){
    var client = new Sequelize(database, username, password, {
        host: host,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    );

    this.getClient = function() {
      return client;
    }
  }

  return new function() {
    this.getInstance = function() {
      if (instance == null) {
        instance = new PrivateContructor();
        instance.constructor = null;
      }
      return instance;
    }
  }
})();

module.exports = dbConnection;
