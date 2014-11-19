/* global presentationData */
import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  slide: 1,

  loadData: function () {
    var data = presentationData;

    this.store.pushPayload('presentation', data);
  }.on('init'),

  presentationUrl: function () {
    return '/presentation/' + this.get('slide');
  }.property('slide'),

  actions: {
    changeSlide: function () {
      var slide = this.incrementProperty('slide');
      var socket = this.get('socket');

      if (socket) {
        socket.emit('changeSlide', slide);
      }
    }
  }
});

export default ApplicationController;
