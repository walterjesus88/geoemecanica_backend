var client = require('../dbConnection').getInstance().getClient();
var Empresa = require('../models/Empresa');

client.sync().then(function() {

  var empresas = [
    {
      id: 'CMA',
      nombre: 'Milpo Atacocha'
    },
    {
      id: 'IESA',
      nombre: 'IESA SA'
    },
    {
      id: 'COPSEM',
      nombre: 'COPSEM'
    }
  ];

  empresas.forEach(function(item) {
    Empresa.create({
      empresaid: item.id,
      nombre: item.nombre
    })
    .then(function(tipo) {
      console.log('empresa ' + item.nombre + ' creada');
    })
    .catch(function(err) {
      console.log(err);
    })
  })

})
.catch(function(err) {
  console.log(err);
});
