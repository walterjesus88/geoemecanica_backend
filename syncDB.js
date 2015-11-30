var client = require('./dbConnection').getInstance().getClient();

client.sync().then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.log(err);
});