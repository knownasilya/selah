import DS from 'ember-data';

var attr = DS.attr;

var SlideModel = DS.Model.extend({
  content: attr('string')
});

export default SlideModel;
