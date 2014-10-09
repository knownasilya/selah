/**
 * This file is auto-generated, by Emberate
 * (https://www.npmjs.org/package/emberate)
 *
 * DO NOT MODIFY
 */
'use strict';

var Ember = require('ember');
var App = require('./app');

App.Router = require('./router');


Ember.TEMPLATES['application'] = require('./templates/application.hbs');
App.SocketInitializer = require('./initializers/socket');
App.ApplicationController = require('./controllers/application');

module.exports = App;
