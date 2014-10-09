'use strict';

var Ember = require('ember');

var ApplicationController = Ember.Controller.extend({
  slide: 1,

  presentationUrl: function () {
    return '/viewer/' + this.get('slide');
  }.property('slide'),

  actions: {
    changeSlide: function () {
      var slide = this.incrementProperty('slide'); 
      var socket = this.get('socket');

      if (socket) {
        socket.emit('slideChanged', slide);
      }
    }
  }
});

module.exports = ApplicationController;
