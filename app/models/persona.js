import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  photoUrl: DS.attr('string'),
  behaviors: DS.hasMany('behavior', { async: false }),
  goals: DS.hasMany('goal', { async: false }),
  areBehaviorsDirty() {
    let dirtyBehaviors = false;
    this.get('behaviors').forEach(function (behavior) {
      console.log(behavior.get('hasDirtyAttributes'));
      if (behavior.get('hasDirtyAttributes')) {
        dirtyBehaviors = true;
      }
    });

    return dirtyBehaviors;
  },
  areGoalsDirty() {
    let dirtyGoals = false;
    this.get('goals').forEach(function (goal) {
      console.log(goal.get('hasDirtyAttributes'));
      if (goal.get('hasDirtyAttributes')) {
        dirtyGoals = true;
      }
    });

    return dirtyGoals;
  }
});
