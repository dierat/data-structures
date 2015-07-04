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
  	var wasFound = false;

  	var search = function(value, treeInput){
  	  var treeInput = treeInput || tree;
	  if (treeInput.left !== undefined){
	    if (treeInput.left.value === value){
	    	wasFound = true;
	    }
	  }
	    
	  if (treeInput.right !== undefined){
	  	if (treeInput.right.value === value){
	  		wasFound = true;
	  	}
	  }

      if (treeInput.left !== undefined){ search(value, treeInput.left); }
      if (treeInput.right !== undefined){ search(value, treeInput.right); }
  	};

  	search(value, tree);

  	return wasFound;
  }


  tree.depthFirstLog = function(func){
    
  	var recursive = function(treeInput, func){
  	  func(treeInput.value);
  	  if (treeInput.left !== undefined){
  	  	recursive(treeInput.left, func);
  	  }
  	  if (treeInput.right !== undefined){
  	  	recursive(treeInput.right, func);
  	  }
  	}

  	recursive(tree, func);

  }


  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
