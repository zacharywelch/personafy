import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('persona', params.persona_id);
  },
  actions: {
    save() {
      this.modelFor('personas/edit').save();
    },
    cancel() {
      this.modelFor('personas/edit').rollback();
    },
    remove(model) {
      model.deleteRecord();
    }
  }
});
