import Ember from 'ember';

export default Ember.Component.extend({
  avatars: ['batman', 'fizzy', 'ben10', 'cyberchase', 'adventuretime', 'bloo',
            'fusionfall', 'gumball', 'wordgirl', 'rigby', 'pokemon', 'super-why'],

  actions: {
    changeAvatar(avatar) {
      this.sendAction('changeAvatar', avatar);
    }
  }
});
