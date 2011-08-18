window.Travis.Views.indexRepositoriesView = Backbone.View.extend({

  el: '#main',
  html: $('<ul class="repository-list">'),
  template: 'repositories/item',
                                                                        
  initialize: function(collection) {
    this.template = window.Travis.Templates[this.template];
    _.bindAll(this, 'render', 'attachTo', 'renderRepository', 'refresh');
    this.attachTo(collection);

    // aka super :s
    Backbone.View.prototype.initialize.apply(this, arguments);
  },

  detach: function() {
    if (this.collection) {
      this.collection.unbind('add', this.renderRepository);
      this.collection.unbind('refresh', this.refresh);
      this.collection.unbind('change', this.refresh);
      this.collection.unbind('reset', this.refresh);
    }
  },

  attachTo: function(collection) {
    this.detach();
    this.collection = collection;
    this.collection.bind('add', this.renderRepository);
    this.collection.bind('refresh', this.refresh);
    this.collection.bind('change', this.refresh);
    this.collection.bind('reset', this.refresh);
  },

  refresh: function() {
    this.collection.each(this.renderRepository, this);
  },

  renderRepository: function(repository) {
    this.html.append( this.template(repository.toJSON()) );
  },

  render: function() {
    $(this.el).html('');
    $(this.el).append(this.html);
    this.collection.fetch();
    Backbone.View.prototype.render.apply(this, arguments);
  }
});