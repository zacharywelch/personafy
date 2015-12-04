import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToPersonas() {
      console.log('llegue');
      this.transitionTo('personas');
    }
  }
});
