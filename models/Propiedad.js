var dbConnection = require('../dbConnection');
var client = dbConnection.getInstance().getClient();
var Sequelize = require('sequelize');

//propiedad son las caracteristicas de los tipos de roca
var Propiedad = client.define('propiedad', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: Sequelize.STRING(2),
    unique: true,
    validate: {
      isIn: [['F', 'MF', 'IF', 'B', 'R', 'MP']]
    }
  },
  tipo: {
    type: Sequelize.STRING(25),
    validate: {
      isIn: [['ESTRUCTURA', 'CONDICION SUPERFICIAL']]
    }
  },
  condicion: {
    type: Sequelize.STRING(50)
  },
  descripcion: {
    type: Sequelize.STRING(100)
  }
});

module.exports = Propiedad;
