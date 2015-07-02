// functional-shared pattern

var Car = function(loc){
  var obj = {loc:loc};
  extend(obj, Car.methods);
  return obj;
}
Car.methods = {
  move: function(){this.loc++;};
};