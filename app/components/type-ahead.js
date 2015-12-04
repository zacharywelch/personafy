import Ember from 'ember';
import suggestionTemplate from '../templates/components/search-item';

export default Ember.TextField.extend({
  didInsertElement() {
    if (!this.get('content')) {
      throw 'Error';
    }

    this.initTypeahead(this.get('content'));
  },

  classNames: ['stretch', 'typeahead'],

  filterContent() {
    let self = this;

    return function findMatches(query, cb) {
      const regex = new RegExp(query, 'i');
      const content = self.get('content');
      const searchProperty = self.get('searchProperty');

      if (!query) {
        return cb(content);
      }

      return cb(content.filter(function (item) {
        return regex.test(item.get(searchProperty));
      }));
    };
  },

  initTypeahead() {
    let self = this;

    this.typeahead = this.$().typeahead({
      hint: true,
      highlight: true,
      minLength: 1,
    }, {
      name: self.get('name') || 'components',
      source: self.filterContent(self.get('content')),
      templates: {
        suggestion(item) {
          const searchComponent = Ember.Component.create({
            model: item,
            layout: suggestionTemplate
          }).createElement();
          return searchComponent.element;
        }
      }
    }).on('typeahead:selected', function (event, item) {
      self.sendAction('onSelectItem', item);
    });
  }
});
