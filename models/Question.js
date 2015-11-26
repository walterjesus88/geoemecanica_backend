var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Question = client.define('question', {
	codigo: {
	    type: Sequelize.INTEGER(),
	    primaryKey: true
	},
	description: Sequelize.TEXT,
  	state: Sequelize.STRING(1),
  	position: Sequelize.INTEGER()

 });

module.exports = Question;