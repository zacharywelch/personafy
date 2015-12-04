import Ember from 'ember';

export default Ember.Component.extend({
  items: null,
  description: null,

  addPlaceholder: Ember.computed('itemType', function() {
    return `What sorta ${this.itemType}s do they have?`;
  }),

  addButton: Ember.computed('itemType', function() {
    return `Add ${this.itemType}`;
  }),

  actions: {
    removeItem(item) {
      this.sendAction('remove', item);
    },
    addItem(description) {
      if (description !== '' && description !== null) {
        this.sendAction('add', description);
        this.set('description', '');
      }
    }
  }
});
