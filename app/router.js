import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('personas', function () {
    this.route('new', function () {
      this.route('behaviors');
      this.route('goals');
    });

    this.route('show', {
      path: ':persona_id'
    }, function () {
      this.route('behaviors');
      this.route('goals');
    });

    this.route('edit', { path: ':persona_id/edit' }, function () {
      this.route('behaviors');
      this.route('goals');
    });
  });

  this.route('login');
});

export default Router;
