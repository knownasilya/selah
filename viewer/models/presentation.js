'use strict';

var DS = require('ember-data');
var attr = DS.attr;
var hasMany = DS.hasMany;

var PresentationModel = DS.Model.extend({
  title: attr('string'),
  type: attr('string'),
  slides: hasMany('slide')
});

module.exports = PresentationModel;
