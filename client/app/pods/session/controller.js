/* global moment */
import Ember from 'ember';

export default Ember.ObjectController.extend({
  yetToStart: Ember.computed.gt('currentTime', 'model.scheduledStart'),

  currentTime: function () {
    return new Date();
  }.property('timePulseService.pulse'),

  user: function () {
    return this.store.push('user', {
      id: 1,
      name: 'Ilya',
      nickname: 'il',
      username: 'knownasilya',
      email: 'ilya@burstcreations.com'
    });
  }.property(),

  timeToStart: function () {
    var now = new Date();
    var scheduled = this.get('model.scheduledStart');
    var ago = now > scheduled ? ' ago' : '';

    return moment.duration(scheduled).humanize() + ago;
  }.property('model.scheduledStart', 'timePulseService.pulse'),

  runningFor: function () {
    var scheduled = this.get('model.scheduledStart');
    
    return moment.duration(scheduled).humanize();
  }.property('model.scheduledStart', 'timePulseService.pulse'),

  actions: {
    joinSession: function (user) {
      var session = this.get('model');

      if (user && session) {
        session.get('viewers').pushObject(user);
      }
    }
  }
});
