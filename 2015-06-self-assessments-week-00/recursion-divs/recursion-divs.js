// Accepts a DOM element and returns true if the element contains five or more
// `div` elements, and false if the element contains fewer than five.
var containsFiveOrMoreDivs = function(domElement) {
  var count = 0;

  var countDivs = function(node){
    count += node.children.length;
    for (var i=0; i<node.children.length; i++){
      countDivs(node.children[i]);
    }
  }

  countDivs(domElement);

  return count >= 5 ? true : false;
};
