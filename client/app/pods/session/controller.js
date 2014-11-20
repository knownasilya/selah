import Ember from 'ember';

export default Ember.ObjectController.extend({
  user: function () {
    return this.store.push('user', {
      id: 1,
      name: 'Ilya',
      nickname: 'il',
      username: 'knownasilya',
      email: 'ilya@burstcreations.com'
    });
  }.property(),

  actions: {
    joinSession: function (user) {
      var session = this.get('model');

      if (user && session) {
        session.get('viewers').pushObject(user);
      }
    }
  }
});
