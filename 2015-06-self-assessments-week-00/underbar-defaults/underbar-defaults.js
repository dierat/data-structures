var _ = {};

(function() {
  /**
   * Fills in undefined properties of the passed-in object with provided defaults.
   * Doesn't overwrite keys that already have defined values in `obj`.
   * Example:
   *
   *   var obj1 = { beads: 'bees?' };
   *
   *   _.defaults(obj1, {
   *     beads: 'how hard can it bees?',
   *     cousins: 'dangereaux'
   *   }, {
   *     huge: 'mistake'
   *   }); // obj1 is { beads: 'bees?', cousins: 'dangereaux', huge: 'mistake' }
   */
  _.defaults = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    _.each(args, function(argObj){
      _.each(argObj, function(val, key){
        if (obj[key] === undefined){
          obj[key] = val;
        }
      });
    });
    return obj;
  };

  /**
   * You might find the `_.each` function useful for writing `defaults`.
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
