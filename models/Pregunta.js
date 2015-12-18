var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

var Pregunta = client.define('pregunta', {
	preguntaid: {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true
	},
	descripcion: Sequelize.TEXT,
	tipo: {
		type: Sequelize.STRING,
		validate: {
			isIn: [['Check', 'Opciones', 'MultipleCheck', 'MultipleText']]
		}
	},
	alternativas: Sequelize.ARRAY(Sequelize.STRING),
	estado: Sequelize.STRING(1),
	posicion: {
		type: Sequelize.INTEGER,
	},
	checked: Sequelize.BOOLEAN,
 });

module.exports = Pregunta;
