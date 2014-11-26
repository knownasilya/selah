import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('presentation');
  },

  actions: {
    willTransition: function (transition) {
      var model = this.currentModel;

      if (model.get('isNew')) {
        model.deleteRecord();
      }
      else if (model.get('isDirty')) {
        if (!confirm('Leaving this page will result in loosing ALL changes')) {
          transition.abort();
        } 
      }
    }
  }
});
