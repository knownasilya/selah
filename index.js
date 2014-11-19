'use strict';

var server = require('./server');
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

server.listen(port, function () {
  console.log('server listening in \'%s\' on localhost:%d', env, port);
});
