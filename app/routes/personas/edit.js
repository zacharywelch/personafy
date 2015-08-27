import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      var model = this.modelFor('personas/edit');

      model.save().then(() => {
        this.transitionTo('personas');
      });
    },
    cancel() {
      this.transitionTo('personas');
    }
  }
});
