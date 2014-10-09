'use strict';

var DS = require('ember-data');

var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

module.exports = ApplicationAdapter;
