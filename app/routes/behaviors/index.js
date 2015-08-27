import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let behaviors = this.modelFor('personas/edit').get('behaviors');

    //
    // The return value from an async relationship is a PromiseArray.
    // The property isFulfilled will become true when the proxied
    // promise has been fulfilled. In this case, that would be when we
    // get a response from the API.
    //
    if (behaviors.get('isFulfilled')) {
      behaviors.reload();
    }

    return behaviors;
  }
});
