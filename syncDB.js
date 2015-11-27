var client = require('./dbConnection').getInstance().getClient();

client.sync().then(function() {
  console.log('tablas creadas');
})
.catch(function(err) {
  console.log(err);
});
