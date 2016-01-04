var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Area = client.define('area', {
  areaid:  {
    type: Sequelize.INTEGER,
	primaryKey: true,
	autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING(50)
  }
});

module.exports = Area;
