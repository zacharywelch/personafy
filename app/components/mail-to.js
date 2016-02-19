import Ember from 'ember';

export default Ember.Component.extend({

  subject: 'A persona was shared with you!',

  body: window.location.href,

  tagName: 'a',

  classNames: ['btn', 'btn-default'],

  attributeBindings: ['mailHref:href'],

  mailHref: Ember.computed('this.subject', 'this.body', function () {
    return `mailto:?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  })

});
