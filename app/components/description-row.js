import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  description: '',
  actions: {
    save() {
      this.sendAction('save', this.get('description'));
      this.set('description', '');
    }
  }
});
