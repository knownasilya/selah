import Ember from 'ember';

export default Ember.Object.extend({
  interval: 1000,

  metronome: function () {
    var interval = this.get('interval');

    Ember.run.later(this, function () {
      this.notifyPropertyChange('pulse');
      this.metronome();
    }, interval);
  }.on('init')
});
