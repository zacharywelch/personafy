import Ember from 'ember';

export default Ember.Component.extend({
  all_avatars: ['batman', 'bloo', 'chowder', 'dexter', 'finn', 'gumball',
                'hero', 'kai', 'pokemon', 'rigby', 'steven', 'tom',
                'totaldrama', 'ben10', 'chima', 'clarence', 'ed', 'jtest',
                'mordecai', 'powerpuff', 'robin', 'toothless'],

  avatars: ['batman', 'bloo', 'dexter', 'kai', 'pokemon', 'finn',
            'tom', 'powerpuff', 'robin', 'rigby', 'jtest', 'ben10'],

  actions: {
    changeAvatar(avatar) {
      this.sendAction('changeAvatar', avatar);
    }
  }
});
