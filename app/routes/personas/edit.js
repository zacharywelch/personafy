import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('persona', params.persona_id);
  },
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
