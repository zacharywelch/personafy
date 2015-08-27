import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let goals = this.modelFor('personas/edit').get('goals');
    return goals;
  }
});
