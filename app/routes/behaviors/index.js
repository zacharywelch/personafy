import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let behaviors = this.modelFor('personas/edit').get('behaviors');
    return behaviors;
  }
});
