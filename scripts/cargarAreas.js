var client = require('../dbConnection').getInstance().getClient();
var Area = require('../models/Area');

client.sync().then(function() {

  var areas = [
  {
    "nombre":"Gerencia"
  },
  {
    "nombre":"Superintendencia"
  },
  {
    "nombre":"Responsable"
  },
  {
    "nombre":"Jefe de guardia"
  },
  {
    "nombre":"Planeamiento"
  },
  {
    "nombre":"Geomecánica"
  },
  {
    "nombre":"Seguridad"
  },
  {
    "nombre":"Responsable"
  },
  {
    "nombre":"Jefe de guardia"
  }
];

  areas.forEach(function(item) {
    Area.create({    
      nombre: item.nombre
    })
    .then(function(tipo) {
      console.log('area ' + item.nombre + ' creada');
    })
    .catch(function(err) {
      console.log(err);
    })
  })

})
.catch(function(err) {
  console.log(err);
});
