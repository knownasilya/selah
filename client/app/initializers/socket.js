var socket = io.connect('http://localhost:3000');

export var initialize = function(container, application) {
  container.register('socket:main', socket, { singleton: true, instantiate: false });

  application.inject('route', 'socket', 'socket:main');
  application.inject('controller', 'socket', 'socket:main');
};

export default {
  name: 'socket',

  initialize: initialize
};
