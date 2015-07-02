var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  return newStack;
};

var stackMethods = {
	size: function(){
		return this.count;
	},
	push: function(value){
		this[this.count] = value;
		this.count++;
	},
	pop: function(){
		if(this.count > 0){
			this.count--;
			var holdValue = this[this.count];
			delete this[this.count];
			return holdValue;
		}
	}
};


