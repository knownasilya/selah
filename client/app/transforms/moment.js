/* global moment */
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    var fromNow = moment(serialized).fromNow();

    return {
      pretty: fromNow,
      raw: serialized
    };
  },

  serialize: function(deserialized) {
    return deserialized.raw;
  }
});
