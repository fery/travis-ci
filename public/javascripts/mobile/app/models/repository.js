Travis.Models.Repository = Backbone.Model.extend({
  url: function() { return '/repositories/' + this.id; },

  color: function() {
    var status = this.get('last_build_status');
    return status == 0 ? 'green' : status == 1 ? 'red' : null;
  },

  last_build_duration: function() {
    return Utils.duration(this.get('last_build_started_at'), this.get('last_build_finished_at'));
  },

  toJSON: function(options) {
    return _.extend(Backbone.Model.prototype.toJSON.apply(this), {
      color: this.color(),
      last_build_duration: this.last_build_duration()
    });
  }
});