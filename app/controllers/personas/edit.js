import Ember from 'ember';

export default Ember.Controller.extend({
  isDirtyPersona: Ember.computed('model.name',
                                 'model.description',
                                 'model.color',
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

  behaviors: Ember.computed.filterBy('model.behaviors', '_destroy', '0'),
  goals: Ember.computed.filterBy('model.goals', '_destroy', '0')
});
