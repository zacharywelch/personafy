import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('persona', params.persona_id);
  },

  deactivate() {
    this.modelFor('personas/edit').rollback();
  },

  actions: {
    createBehavior(description) {
      this.create('behavior', description);
    },

    createGoal(description) {
      this.create('goal', description);
    },

    destroy(model) {
      var isNew = model.get('isNew');
      isNew ? model.deleteRecord() : model.set('_destroy', '1');
    },

    changeColor(color) {
      this.modelFor('personas/edit').set('color', color);
    },

    changeAvatar(avatar) {
      this.modelFor('personas/edit').set('avatar', avatar);
    }
  },

  create(record, description) {
    this.store.createRecord(record, {
      description: description,
      persona: this.modelFor('personas/edit')
    });
  }
});
