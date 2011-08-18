window.Travis.Collections.Repositories = Backbone.Collection.extend({
  model: window.Travis.Models.Repository,
  url: '/repositories'

});