'use strict';

var Ember = require('ember');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

Ember.Application.initializer({
  name: 'socket',

  initialize: function (container, application) {
    container.register('socket:main', socket, { singleton: true, instantiate: false });

    application.inject('route', 'socket', 'socket:main');
    application.inject('controller', 'socket', 'socket:main');
  }
});
