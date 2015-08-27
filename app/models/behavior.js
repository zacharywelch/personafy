import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  _destroy: DS.attr('string', {
    defaultValue: '0'
  }),
  persona: DS.belongsTo('persona')
});
