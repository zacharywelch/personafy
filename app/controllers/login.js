import Ember from 'ember';

export default Ember.Controller.extend({
  authManager: Ember.inject.service('session'),

  showErrors: false,

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');

      this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {
        this.transitionTo('personas');
      }, (error) => {
        this.get('flashMessages').danger('Invalid email or password');
      });
    }
  }
});
