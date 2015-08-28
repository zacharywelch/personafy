import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  items: null,
  description: null,
  remaining: Ember.computed.filterBy('items', '_destroy', '0'),
  actions: {
    removeItem(item) {
      this.sendAction('remove', item);
    },
    addItem(description) {
      this.sendAction('add', description);
      this.set('description', '');
    }
  }
});
