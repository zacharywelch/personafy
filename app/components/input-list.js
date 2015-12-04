import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  items: null,
  description: null,

  addPlaceholder: Ember.computed('itemType', function() {
    return `What sorta ${this.itemType}s do they have?`
  }),

  addButton: Ember.computed('itemType', function() {
    return `Add ${this.itemType}`
  }),

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
