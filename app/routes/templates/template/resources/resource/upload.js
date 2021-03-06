import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'resources.resource.upload',
  renderTemplate: function(controller, model) {
    this.render('templates.template.resources.index');
    this.render('resources.resource.upload', {
      into: 'application',
      outlet: 'modal',
      model: model,
    });
  },
  model: function() {
    return this.modelFor('templates.template.resources.resource');
  },
  setupController: function(controller) {
    this._super(...arguments);
    controller.set('file', null);
  },
});
