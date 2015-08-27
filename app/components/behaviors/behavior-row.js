import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  behavior: null,
  actions: {
    save(behavior) {
      this.sendAction('saveBehavior', behavior);
    }
  }
});
