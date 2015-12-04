import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('persona');
  },

  deactivate() {
    let model = this.modelFor('personas/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
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
      this.modelFor('personas/new').set('color', color);
    },

    changeAvatar(avatar) {
      this.modelFor('personas/new').set('avatar', avatar);
    }
  },

  create(record, description) {
    this.store.createRecord(record, {
      description: description,
      persona: this.modelFor('personas/new')
    });
  }

  //actions: {
    //save() {
      //// TODO need to do this based on https://github.com/emberjs/data/issues/2850
      //var model = this.modelFor('personas/edit');
      //model.save().then(() => {
        //model.get('behaviors').filterBy('isNew', true).invoke('unloadRecord');
        //model.get('goals').filterBy('isNew', true).invoke('unloadRecord');
      //});
    //},

    //cancel() { this.modelFor('personas/edit').rollback(); },

    //createBehavior(description) { this.create('behavior', description); },
    //createGoal(description) { this.create('goal', description); },

    //destroy(model) {
      //var isNew = model.get('isNew');
      //isNew ? model.deleteRecord() : model.set('_destroy', '1');
    //}
  //},

  //create(record, description) {
    //this.store.createRecord(record, {
      //description: description,
      //persona: this.modelFor('personas/edit')
    //});
  //}
});