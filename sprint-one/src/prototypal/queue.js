var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceQueue = Object.create(queueMethods);
  instanceQueue.front = 0;
  instanceQueue.end = 0;

  return instanceQueue;
};

var queueMethods = {
	size: function() {
		return this.end - this.front;
	},
	enqueue: function(value) {
		this[this.end] = value;
		this.end++;
	},
	dequeue: function() {
		if( this.end - this.front > 0 ){
			var holdValue = this[this.front];
			delete this[this.front];
			this.front++;
			return holdValue;
		}
	}
};


