// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
	// check if node is define, otherwise default document.body
	node = node || document.body;
	// initialize results array
	var results = [];
	
	// check if node's classNames contain the target className
	if( node.classList.contains(className) ){
		// if so, add node to results array
		results.push(node);
	}		

	// call getElementsByClassName on each of node's children
	for( var i=0; i < node.children.length; i++ ){
		var childResult = getElementsByClassName(className, node.children[i]);
		results = results.concat( childResult );
	}

	// return results array
	return results;
};
