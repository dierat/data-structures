var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	
	this.children.push( Tree(value) );

};

treeMethods.contains = function(target){

	var check = false;

	var search = function(target, node){

		_.each(node.children, function(child) {
			if ( child.value === target ){
				check = true;
			} else{
				search(target, child);
			}
		});

		/*if( node.children.length > 0){
			if ( node.children[0].value === target ){
				check = true;
			} 
		} else if (node.children[0].children.length > 0 ){
			_.each(node.children[0].children, function(child){
				return search(target, child);
			});
		}*/
	}

	search(target, this);
	
	return check;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */