const express = require('express'),
  bodyParser = require('body-parser'),
  UUID = require("uuid"),
  session = require('express-session'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  port = process.env.PORT || 80;

app.set('view engine', 'pug');

app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
  extended: false
}));

//static componentes to express in app server side
let appmod = require('./routes/static');
appmod.static(app);

app.get('/', function (req, res) {
  res.render('www')
});


http.listen(port, function () {
  console.log('listening on *:' + port);
});