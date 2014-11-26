import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addSlide: function () {
      var slides = this.get('model.slides');
      var slide = this.store.createRecord('slide', {
        contents: ''
      });

      slides.pushObject(slide);

      if (!this.get('selectedSlide')) {
        this.set('selectedSlide', slide);
      }
    },

    selectSlide: function (slide) {
      if (slide) {
        this.set('selectedSlide', slide);
      }
    }
  }
});
