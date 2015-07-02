var _ = {};

(function() {
  /**
   * Returns true if `value` exists in `list`.
   */
  _.contains = function(list, value){
    var found = false;
    _.each(list, function(val){
      if (list.indexOf(value) >= 0){
        found = true;
      }
    });
    return found;
  };

  /**
   * You might find the `_.each` function useful for writing `contains`.
   * Complete the `underscore-each` task first, and copy that function into this file.
   */
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      for (var i=0; i<collection.length; i++){
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection){
        iterator(collection[key], key, collection);
      }
    }
  };

}).call(this);
