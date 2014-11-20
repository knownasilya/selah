import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  title: attr('string'),
  created: attr('date'),
  lastModified: attr('date'),
  lastModifiedBy: belongsTo('user')
});
