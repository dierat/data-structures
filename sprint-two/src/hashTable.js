var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);
  // call this.retrieve() to retrieve existing bucket
  var retrieve = this._storage.get(bucketIndex);
  // check result for undefined
  if ( retrieve === undefined ){
    // if undefined set result as object
    retrieve = {};
  }
  // if defined add key: value pair to exisiting object
  retrieve[k] = v;
  // call this.set() to place inside storage at bucketIndex
  this._storage.set(bucketIndex, retrieve);
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
   // retrieve bucket
   var retrieve = this._storage.get(bucketIndex);
   // setting obj key: value to null
   retrieve[k] = null;
   // set back into storage
   this._storage.set(bucketIndex, retrieve);
};

 /*

this._storage = [  [ [],[] ], [ ['key1','val1'],['key2','val2'] ]  ]

 */

/*
 * Complexity: What is the time complexity of the above functions?
 */
