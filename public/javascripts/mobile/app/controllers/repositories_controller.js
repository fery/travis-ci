window.Travis.Controllers.Repositories = Backbone.Router.extend({
  routes: {
    '' : 'index',
    '/repositories/:owner/:name': 'show',
    '/repositories/:owner/:name/:line': 'show'
  },

  // shows recent built repositories
  index: function () {
    this.collection = new Travis.Collections.Repositories();
    this.view = new Travis.Views.indexRepositoriesView(this.collection);
    this.view.render();
  },

  // shows repository details
  show: function (owner, name, line) {
    console.log('ouuu yehh');
    var repository = Collections.Repositories.getBySlog(owner + '/' + name);
    this.view = new showRepositoryView(repository, line);
    this.view.render();
  }

});