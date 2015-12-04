import PersonasBaseController from './base';

export default PersonasBaseController.extend({
  showErrors: true,

  actions: {
    cancel() {
      this.transitionToRoute('personas.show', this.get('model'));
      return false;
    }
  }
});
