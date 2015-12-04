import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('persona');
  },

  actions: {
    onSelectItem(item) {
      this.transitionTo('personas.show', item);
    }
  }
});
