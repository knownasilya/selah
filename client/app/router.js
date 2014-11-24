import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('login');

  this.resource('session', { path: '/session/:presentation_session_id' });
  this.resource('dashboard');
  this.resource('presentations', function () {
    this.route('new');
  });
});

export default Router;
