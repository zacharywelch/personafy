import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('behaviors/behavior-row', 'Integration | Component | behaviors/behavior row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{behaviors/behavior-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#behaviors/behavior-row}}
      template block text
    {{/behaviors/behavior-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
