import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  active: attr('boolean'),
  created: attr('date'),
  started: attr('date'),

  admins: hasMany('user', { async: true }),
  viewers: hasMany('user', { async: true }),
  presentables: hasMany('presentable')
});
