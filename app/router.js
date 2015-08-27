import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('personas', function() {
    this.route('show', {
      path: ':persona_id'
    });

    this.route('edit', {
      path: ':persona_id/edit'
    }, function() {
      this.route('behaviors', function() {
        this.route('new');
      });
    });
  });
});

export default Router;
