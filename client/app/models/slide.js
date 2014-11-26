import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  contents: attr('string'),

  markdown: function () {
    return '';
  }.property('contents')
});
