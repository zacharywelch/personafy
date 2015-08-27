import Ember from 'ember';

export default Ember.Controller.extend({
  isDirtyPersona: Ember.computed('model.name',
                                 'model.description',
                                 'model.behaviors.@each.description',
                                 'model.goals.@each.description',
                                 function () {
    return this.model.get('hasDirtyAttributes') ||
           this.model.areBehaviorsDirty() ||
           this.model.areGoalsDirty();
  }),
  isNotDirtyPersona: Ember.computed.not('isDirtyPersona')
});
