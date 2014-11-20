import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  nickname: attr('string'),
  username: attr('string'),
  email: attr('string')
});
