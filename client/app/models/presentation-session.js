import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  summary: attr('string'),
  created: attr('date'),
  started: attr('date'),
  ended: attr('date'),
  scheduledStart: attr('date'),

  admins: hasMany('user', { async: true }),
  viewers: hasMany('user', { async: true }),
  presentables: hasMany('presentable'),

  active: function () {
    var started = this.get('started');
    var scheduledStart = this.get('scheduledStart');

    if (started) {
      return started > scheduledStart;
    }
  }.property('started', 'scheduledStart'),
});
