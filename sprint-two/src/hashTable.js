var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(bucketIndex);
  if ( currentBucket === undefined ){
    currentBucket = {};
  }
  currentBucket[k] = v;
  this._storage.set(bucketIndex, currentBucket);
};

HashTable.prototype.retrieve = function(k){

  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);

  var object = this._storage.get(bucketIndex);


  if ( object === undefined ){
  	return object;
  } else {
  	return object[k];
  }

};

HashTable.prototype.remove = function(k){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
   var retrieve = this._storage.get(bucketIndex);
   retrieve[k] = null;
   this._storage.set(bucketIndex, retrieve);
};

 /*

this._storage = [  [ [],[] ], [ ['key1','val1'],['key2','val2'] ]  ]

 */

/*
 * Complexity: What is the time complexity of the above functions?
 */
