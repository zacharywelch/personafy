import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    behaviors: { embedded: 'always' },
    goals:     { embedded: 'always' }
  },
  keyForAttribute: function(attr) {
    if (attr === 'behaviors') {
      return 'behaviors_attributes';
    } else if (attr === 'goals') {
      return 'goals_attributes';
    } else {
      return this._super(attr);
    }
  }
});

