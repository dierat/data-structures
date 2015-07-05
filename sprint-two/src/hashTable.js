var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(bucketIndex);
  if ( currentBucket === undefined ){
    currentBucket = [];
    this._storage.set(bucketIndex, currentBucket);
  }

  var wasFound = false;

  _.each(currentBucket, function(val, key){
    if (key === k){
      currentBucket[key] = v;
      wasFound = true;
    }
  });

  if (!wasFound){
  	currentBucket.push([k,v]);
  }

  this._storage.set(bucketIndex, currentBucket);
};


HashTable.prototype.retrieve = function(k){

  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);

  var currentBucket = this._storage.get(bucketIndex);

  if ( currentBucket === undefined ){
  	return currentBucket;
  } else {
    var result;
  	_.each(currentBucket, function(tuple){
  	  if (tuple[0] === k) {
  	  	result = tuple[1];
  	  }
  	});
  	return result;
  }

};


HashTable.prototype.remove = function(k){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(bucketIndex);

  _.each(currentBucket, function(tuple){
    if (tuple[0] === k) {
  	  tuple[1] = null;
  	}
  });

  this._storage.set(bucketIndex, currentBucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
