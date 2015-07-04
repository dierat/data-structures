var BinarySearchTree = function(value){
  var tree = {
  	value: value,
  	left: undefined,
  	right: undefined
  };

  tree.insert = function(value){
    var newTree = BinarySearchTree(value);

    var searchAndInsert = function(newTree, currenTree){
      if (newTree.value < currenTree.value){
        if (currenTree.left === undefined){
    	  currenTree.left = newTree;
        } else {
          searchAndInsert(newTree, currenTree.left);
        }
      } else {
        if (currenTree.right === undefined){
          currenTree.right = newTree;
        } else {
          searchAndInsert(newTree, currenTree.right);
        }
      }
    }

    searchAndInsert(newTree, tree);
  }

  tree.contains = function(value){

  }

  tree.depthFirstLog = function(){

  }

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
