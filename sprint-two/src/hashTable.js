var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var bucketIndex = getIndexBelowMaxForKey(k, this._limit);

	// call this.retrieve() to retrieve existing bucket
	var retrieve = this.retrieve(k);

	// check result for undefined
	if ( retrieve === undefined ){
	
	// if undefined set result as key: value pair within object
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
	

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// hashTable.insert('Steven', 'Spielberg');

// storage = [  {}, {Steven:'Siegal', Diedra:'Rater', Jason: 'Elmore'}, {}, {}  ]
