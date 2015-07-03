var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (!this.head){
      this.head = newNode;
    } else{
      this.tail.next = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function(){
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target, node){
    node = node || this.head;
    
    if (target === node.value){
      return true;
    } else if (node.next !== null){
        return this.contains(target, node.next);
    } else {
      return false;
    }

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

