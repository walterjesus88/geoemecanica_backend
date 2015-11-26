/*cargado de las dependencias: https es para usar SSL, fs para acceder a los
archivos de las claves de cifrado SSL*/
var express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//creando la aplicacion y carga de los datos de configuracion
var app = express();
var config = require('./config.json');
process.env['JWT_SECRET'] = config.express.keyJWT;
var PORT = process.env.PORT || config.express.port;
var HOST = process.env.HOST || '';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//permitiendo el acceso desde cualquier origen
var allowCrossDomain = require('./middleware').allowCrossDomain;
app.use(allowCrossDomain);

//definicion de las rutas accesibles
var authRoutes = require('./routes/auth');
var usersRoutes = require('./routes/users');
var laboresRoutes = require('./routes/labores');
var questionsRoutes = require('./routes/questions');

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/labores', laboresRoutes);
app.use('/questions', questionsRoutes);

//archivos de cifrado ssl
var options = {
    key  : fs.readFileSync('ssl/key.pem'),
    ca   : fs.readFileSync('ssl/csr.pem'),
    cert : fs.readFileSync('ssl/cert.pem')
};

//ejecucion del servidor con los datos necesarios
https.createServer(options, app).listen(PORT, HOST, null, function() {
    console.log('Server listening on port %d in %s mode', this.address().port, app.settings.env);
});
