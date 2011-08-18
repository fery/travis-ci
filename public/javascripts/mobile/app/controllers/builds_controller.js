window.Travis.Controllers.Builds = Backbone.Router.extend({
  routes: {
    '/repositories/:owner/:name/builds': 'index',
    '/repositories/:owner/:name/builds/:id': 'show',
    '/repositories/:owner/:name/builds/:id/:line': 'show'
  },

  index: function (owner, name) {

  },


  show: function (owner, name, id, line) {

  }

});