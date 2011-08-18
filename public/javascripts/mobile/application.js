if (!window.Travis) window.Travis = {};

window.Travis.Controllers = {};
window.Travis.Collections = {};
window.Travis.Helpers = {};
window.Travis.Models  = {};
window.Travis.Views   = {};

window.Travis.start = function() {
  _(window.Travis.Controllers).each(function (klass, name) { new klass });

  window.Travis.Templates = JST;
  Backbone.history.start();
};

window.Travis.trigger = function(event, data) {
  Travis.app.trigger(event, data);
};

$(document).ready(window.Travis.start);