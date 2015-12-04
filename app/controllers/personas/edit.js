import PersonasBaseController from './base';

export default PersonasBaseController.extend({
  showErrors: true,

  actions: {
    cancel() {
      this.transitionToRoute('personas.show', this.get('model'));
      return false;
    }
  }
  //isDirtyPersona: Ember.computed('model.name',
                                 //'model.description',
                                 //'model.behaviors.@each.description',
                                 //'model.behaviors.@each._destroy',
                                 //'model.goals.@each.description',
                                 //'model.goals.@each._destroy',
                                 //function () {
    //return this.model.get('hasDirtyAttributes') ||
           //this.model.areBehaviorsDirty() ||
           //this.model.areGoalsDirty();
  //}),

  //isNotDirtyPersona: Ember.computed.not('isDirtyPersona'),
});
