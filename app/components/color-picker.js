import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['denim', 'blue', 'gray', 'light', 'light-blue', 'turquoise',
           'navy-dark', 'purple', 'green', 'yellow', 'red', 'orange'],

  actions: {
    changeColor(color) {
      this.sendAction('changeColor', color);
    }
  }
});
