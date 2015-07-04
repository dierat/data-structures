

var Graph = function(){
	this.nodes = {};
	this.edges = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = node;
};

Graph.prototype.contains = function(node){
	return node in this.nodes ? true : false;
};

Graph.prototype.removeNode = function(node){
	delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if( this.edges[fromNode] ){
		return _.indexOf( this.edges[fromNode], toNode) >= 0 ? true : false;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if( this.edges[fromNode] ){
		this.edges[fromNode].push(toNode);
	} else {
		this.edges[fromNode] = [toNode];
	}

};

Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(node){
		cb(node);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
