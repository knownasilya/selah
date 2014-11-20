export default {
  name: 'auth-service',
  initialize: function(container, app) {
    app.inject('route', 'authService', 'service:auth');
  }
};
