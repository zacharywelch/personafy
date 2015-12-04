import Ember from 'ember';

export default Ember.Controller.extend({
  hasName:        Ember.computed.notEmpty('model.name'),
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasColor:       Ember.computed.notEmpty('model.color'),
  hasAvatar:      Ember.computed.notEmpty('model.avatar'),

  isValid: Ember.computed.and(
    'hasName',
    'hasDescription',
    'hasColor',
    'hasAvatar'
  ),

  behaviors: Ember.computed.filterBy('model.behaviors', '_destroy', '0'),
  goals: Ember.computed.filterBy('model.goals', '_destroy', '0'),

  actions: {
    save() {
      console.log('base controller save');

      if (this.get('isValid')) {
        this.get('model').save().then((persona) => {
          persona.get('behaviors').filterBy('isNew', true).invoke('unloadRecord');
          persona.get('goals').filterBy('isNew', true).invoke('unloadRecord');
          this.transitionToRoute('personas.show', persona);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },

    cancel() {
      console.log('base controller cancel');
      return true;
    }
  }
});
