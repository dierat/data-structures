var Queue = function(){
  var front = 0;
  var end = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end ++;
  };

  someInstance.dequeue = function(){
    if (end - front > 0){
      var holdValue = storage[front];
      delete storage[front];
      front++;
      return holdValue;
    }
  };

  someInstance.size = function(){

    return end - front;
  };

  return someInstance;
};
