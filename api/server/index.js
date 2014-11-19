'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var env = process.env.NODE_ENV || 'development';
var hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
    json: require('./helpers/json')
  }
});

if (env === 'developemnt') {
  app.enable('view cache');
  app.use(morgan('dev'));
}

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(session({
  secret: 'supersecret123',
  resave: true,
  saveUninitialized: true
}));
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (req, res) {
  console.log(req.session);
  res.render('main', {
    title: 'My Ember App'
  });
});

app.get('/api/presentations/:id', function (req, res) {
  var id = req.param('id');

  res.json(mockPresentation(id));
});

app.get('/viewer/:sessionId', function (req, res) {
  console.log(req.session);
  var sessionId = req.param('sessionId');

  res.render('viewer', {
    presentationId: 1,
    presentationData: mockPresentation(1)
  });
});

io.on('connection', function (socket) {
  socket.on('slideChanged', function (slide) {
    console.log('slideChanged at source to: ', slide);
    socket.broadcast.emit('changeSlide', slide);
  });
});

function mockPresentation(id) {
  return {
    presentation: {
      id: id,
      title: 'Amazing Grace',
      type: 'song',
      slides: [1, 2, 3]
    },

    slides: [
      {
        id: 1,
        content: 'amazing grace'
      }, {
        id: 2,
        content: 'how sweet the sound'
      }, {
        id: 3,
        content: 'that saved a wretch'
      }
    ]
  };
}

module.exports = server;
