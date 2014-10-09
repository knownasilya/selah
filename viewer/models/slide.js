'use strict';

var DS = require('ember-data');
var attr = DS.attr;

var SlideModel = DS.Model.extend({
  content: attr('string')
});

module.exports = SlideModel;
