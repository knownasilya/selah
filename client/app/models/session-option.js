import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  chatEnabled: attr('boolean', { defaultValue: true }),
  sessionId: attr('string')
});
