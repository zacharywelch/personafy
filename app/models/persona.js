import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  photoUrl: DS.attr('string'),
  behaviors: DS.hasMany('behavior', { async: false }),
  goals: DS.hasMany('goal', { async: false })
});
