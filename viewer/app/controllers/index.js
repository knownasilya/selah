import Ember from 'ember';

var IndexController = Ember.ObjectController.extend({
  queryParams: {
    slideIndex: 'slide'
  },
  slideIndex: 1,

  currentSlide: function () {
    var slides = this.get('model.slides');
    var index = this.get('slideIndex');

    if (slides) {
      return slides.objectAt(index - 1);
    }
  }.property('model.slides', 'slideIndex'),

  initSlideSocket: function () {
    var socket = this.get('socket');
    var self = this;

    if (socket) {
      socket.on('changeSlide', function (index) {
        var numSlides = self.get('model.slides.length');

        if (index <= numSlides) {
          self.set('slideIndex', index); 
        }
      });
    }
  }.on('init')
});

export default IndexController;
