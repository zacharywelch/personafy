import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('persona', params.persona_id);
  },
  actions: {
    save() {
      var model = this.modelFor('personas/edit');

      // TODO need to do this based on https://github.com/emberjs/data/issues/2850
      model.save().then(() => {
        model.get('behaviors').
          filter(function (behavior) {
            return behavior.get('isNew');
          }).invoke('unloadRecord');
        model.get('goals').
          filter(function (goal) {
            return goal.get('isNew');
          }).invoke('unloadRecord');
      });
    },
    cancel() {
      this.modelFor('personas/edit').rollback();
    },
    remove(model) {
      if (model.get('isNew')) {
        model.deleteRecord();
      } else {
        model.set('_destroy', '1');
      }
    },
    addBehavior(description) {
      var persona = this.modelFor('personas/edit');
      this.store.createRecord('behavior', {
        description: description,
        persona: persona
      });
    },
    addGoal(description) {
      var persona = this.modelFor('personas/edit');
      this.store.createRecord('goal', {
        description: description,
        persona: persona
      });
    }
  }
});
