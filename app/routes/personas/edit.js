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
    },
    addBehavior() {
      var persona = this.modelFor('personas/edit');
      var controller = this.controllerFor('personas/edit');
      var description = controller.get('newBehavior');
      this.store.createRecord('behavior', {
        description: description,
        persona: persona
      });
      controller.set('newBehavior', '');
    },
    addGoal() {
      var persona = this.modelFor('personas/edit');
      var controller = this.controllerFor('personas/edit');
      var description = controller.get('newGoal');
      this.store.createRecord('goal', {
        description: description,
        persona: persona
      });
      controller.set('newGoal', '');
    }    
  }
});
