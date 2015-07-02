var _ = {};

(function() {
  /**
   * Return a function that can be called at most one time. Subsequent calls
   * should return the previously returned value.
   */
  _.once = function(func) {
    var called = false;
    return function(){
      if (!called){
        func.apply(this, arguments);
        called = true;
      }
    }
  };

}).call(this);
