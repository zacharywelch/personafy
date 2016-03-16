import Ember from 'ember';
import PersonaValidations from 'personafy/mixins/validations/persona';

export default Ember.Controller.extend(PersonaValidations, {
  behaviors: Ember.computed.filterBy('model.behaviors', '_destroy', '0'),
  goals: Ember.computed.filterBy('model.goals', '_destroy', '0'),

  actions: {
    save() {
      let model = this.get('model');

      this.validate().then(() => {
        model.save().then((persona) => {
          persona.get('behaviors').filterBy('isNew', true).invoke('unloadRecord');
          persona.get('goals').filterBy('isNew', true).invoke('unloadRecord');
          this.transitionToRoute('personas.show', persona);
        });
      }).catch(() => {
        this.set('showErrors', true);
      });

      return false;
    },

    cancel() {
      return true;
    }
  },

  isDirtyPersona: Ember.computed('model.name',
                                 'model.description',
                                 'model.color',
                                 'model.avatar',
                                 'model.behaviors.@each.description',
                                 'model.behaviors.@each._destroy',
                                 'model.goals.@each.description',
                                 'model.goals.@each._destroy',
                                 function () {
    return this.model.get('hasDirtyAttributes') ||
           this.model.areBehaviorsDirty() ||
           this.model.areGoalsDirty();
  }),

  isNotDirtyPersona: Ember.computed.not('isDirtyPersona')
});
