var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceQueue = {
  	front: 0,
  	back: 0
  };
  _.extend(instanceQueue, queueMethods);
  return instanceQueue;
};

var queueMethods = {
	size: function() {
		return this.back - this.front;
	},
	enqueue: function(value) {
		this[this.back] = value;
		this.back++;
	},
	dequeue: function() {
		if( this.back - this.front > 0 ){
			var holdValue = this[this.front];
			delete this[this.front];
			this.front++;
			return holdValue;
		}
	}
};



