export default {
  name: 'time-pulse-service',
  initialize: function(container, app) {
    app.inject('controller', 'timePulseService', 'service:time-pulse');
  }
};
