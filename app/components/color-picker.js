import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['dark', 'blue', 'denim', 'navy', 'turquoise', 'navy-dark',
           'teal', 'yellow', 'green', 'purple', 'red', 'orange'],

  actions: {
    changeColor(color) {
      this.sendAction('changeColor', color);
    }
  }
});
