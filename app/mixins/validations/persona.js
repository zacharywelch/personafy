import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    'model.name': {
      presence: true
    },
    'model.description': {
      presence: true
    },
    'model.avatar': {
      presence: true
    },
    'model.color': {
      presence: true
    }
  }
});
