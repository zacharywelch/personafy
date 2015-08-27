import Ember from 'ember';

export default Ember.Controller.extend({
  isDirtyPersona: Ember.computed('model.name',
                                 'model.description',
                                 'model.behaviors.@each.description',
                                 'model.behaviors.@each._destroy',
                                 'model.goals.@each.description',
                                 'model.goals.@each._destroy',
                                 function () {
    return this.model.get('hasDirtyAttributes') ||
           this.model.areBehaviorsDirty() ||
           this.model.areGoalsDirty();
  }),

  isNotDirtyPersona: Ember.computed.not('isDirtyPersona'),

  activeBehaviors: Ember.computed('model.behaviors.@each._destroy', function () {
    return this.model.get('behaviors').filter(function (behavior) {
      return behavior.get('_destroy') !== '1';
    });
  }),

  activeGoals: Ember.computed('model.goals.@each._destroy', function () {
    return this.model.get('goals').filter(function (goal) {
      return goal.get('_destroy') !== '1';
    });
  })
});
