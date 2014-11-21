import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  chatEnabled: attr('boolean', { defaultValue: true }),
  sessionId: attr('string'),
  user: belongsTo('user', { inverse: 'activeSessions' })
});
