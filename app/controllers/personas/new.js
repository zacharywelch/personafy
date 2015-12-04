import PersonasBaseController from './base';

export default PersonasBaseController.extend({
  showErrors: false,

  actions: {
    cancel() {
      this.transitionToRoute('personas');
      return false;
    }
  }
});
