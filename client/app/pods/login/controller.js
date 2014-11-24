/* global md5 */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      this.set('authService.user', Ember.Object.extend({
        email: 'ilya@burstcreations.com',
        name: 'Tester',
        gravatarUrl: function () {
          var email = this.get('email');

          return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=30';
        }.property('email'),
      }).create());
      this.transitionToRoute('dashboard');
    }
  }
});
