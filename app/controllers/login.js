import Ember from 'ember';

export default Ember.Controller.extend({
  authManager: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');

      this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {
        console.log('transitioning');
        this.transitionTo('personas');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});
