var $          = require('./Utils/Promises');
var path       = require('path');
var express    = require('express');
var exphbs     = require('express-handlebars');
var bodyParser = require('body-parser');
var routes     = require('./routes.js');

var port       = 8080;
var server     = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(__dirname + '/Static'));
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
server.set('view engine', '.hbs');
server.set('views', path.join(__dirname + '/views'));

routes(server);

server.listen(port, function(err) {
    if (err) return console.log('Web server failed', err);
    console.log("Web server listening on port " + port);
});
