import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('presentationSession', params.presentation_session_id);
  }
});
