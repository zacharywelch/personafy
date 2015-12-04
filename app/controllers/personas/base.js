import Ember from 'ember';
import PersonaValidations from 'personas/mixins/validations/persona';

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
  }
});
