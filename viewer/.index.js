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
Ember.TEMPLATES['index'] = require('./templates/index.hbs');
App.DataInitializer = require('./initializers/data');
App.SocketInitializer = require('./initializers/socket');
App.ApplicationAdapter = require('./adapters/application');
App.PresentationModel = require('./models/presentation');
App.SlideModel = require('./models/slide');
App.ApplicationController = require('./controllers/application');
App.IndexController = require('./controllers/index');
App.IndexRoute = require('./routes/index');

module.exports = App;
