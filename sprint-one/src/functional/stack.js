var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    if( count > 0 ) {
      count--;
      var holdValue = storage[count];
      delete storage[count];
      return holdValue;
    }

  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
