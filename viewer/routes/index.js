'use strict';

var Ember = require('ember');

var IndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('presentation', global.presentationId);
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    console.log(model);
  }
});

module.exports = IndexRoute;
