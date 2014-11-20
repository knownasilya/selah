import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  nickname: attr('string'),
  username: attr('string'),
  email: attr('string'),

  activeSessions: hasMany('sessionOption')
});
