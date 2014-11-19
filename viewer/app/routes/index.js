/* global presentationId */
import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('presentation', presentationId);
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    console.log(model);
  }
});

export default IndexRoute;
