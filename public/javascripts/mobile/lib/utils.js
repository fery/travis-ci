Utils = {
  duration: function(started, finished) {
    started  = new Date(started);
    finished = finished ? new Date(finished) : new Date();
    return started ? Math.round((finished - started) / 1000) : 0;
  }
};