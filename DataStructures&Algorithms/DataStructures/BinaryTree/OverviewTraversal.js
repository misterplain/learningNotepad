/*
Binary Search Tree (BST) is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. It satisfies the binary search property, where the value of the left child is less than the parent node, and the value of the right child is greater than the parent node. This property allows for efficient search, insertion, and deletion operations.

BSTs are used when you need to store data in a sorted manner and require fast searching, insertion, and deletion operations. They are commonly used in applications such as:

1. Symbol tables: BSTs are efficient for implementing symbol tables, where keys are associated with values and need to be stored in sorted order.
2. Database indexing: BSTs are used in databases for indexing, allowing quick retrieval of data based on keys.
3. Implementing priority queues: BSTs can be used to implement priority queues, where elements are stored and retrieved based on their priority.
4. Balanced BSTs (like AVL trees and Red-Black trees) are used in various applications where guaranteed logarithmic performance is required for search, insertion, and deletion operations.
5. Implementing various algorithms like binary search, interval trees, and more.

BST operations:
- Insertion: Adds a new node with a given value to the BST while maintaining the binary search property.
- Search: Checks whether a given value exists in the BST.
- Traversal: Visits all nodes in a specific order (in-order, pre-order, post-order) for processing or printing.

Overall, BSTs provide a balance between efficient search and efficient insertion/deletion, making them suitable for a wide range of applications.
*/
// Binary Search Tree (BST) Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert: Add a new node with the given value to the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node in the correct position
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    } else {
      var current = this.root;
      found = false;
      while (current && !true) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return undefined;
      return current;
    }
  }

  // Search: Check if a value exists in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a value in the BST
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  //when to use BFS vs DFS
  //for BFS will the queue require a huge memory if the tree is quite wide?, smaller queue for thinner trees
  //DFS has fewer nodes to keep track of 
  //dfs variants, when to use one over the other
  //pre order - could be useful if you're trying to clone or duplicate a tree, given in an order where you can reconstruct the tree(starts with root)
  //post order - 
  //in order, we will receive back an ORDERED list

  //breadth first and depth first
  //BFS - visit every sibling child before we look at the children, working horizontally
  //iterative steps
  //create a queue (this can be an array and a variable to store the values of nodes visited
  //place the root node in the queue
  //look as long as there is anything in the queue
  //dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  //if there is a left property of the node dequeueus, add it to the queue
  //if there is a right property on the node deuqueueued, add it to the queue
  //return the variable that stores the values
  //basically we're using the queue array to store items that WILL be visited
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //Depth first search (pursue all n odes vertically down to the end of the tree before visiting sibling nodes)
  //pre order - visit the node first (add it to the list). visit next node down and ALSo add it to list of data
  //steps recursive
  //create a variable to store the values of the nodes visited
  //store the root of the BST in a variable called current
  //write a helper function which accepts a node
  //push the value of the node to the variable that stores teh values
  //if the node has a left property, call the helper function witht the left property on the node
  //if the node has a right property, call the helper runfction with the right property of the node
  //invoke the helper function with the current variable
  //return the array of values
  DFSPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  //post order - visit a node AFTER we look at the left and the right, explore the entire branch first and THEN we visit the node. Same pseudocode as before except the location of the data.push(node)
  DFSPostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }

  //DFS - in order traversal. traverse the entire left side, THEN visit the node, THEN visit the entire left side. so traverse left, visit node, traverse right
  DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // In-order Traversal: Visit nodes in ascending order
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform in-order traversal
  inOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node.value);
      this.inOrderTraversalNode(node.right, callback);
    }
  }

  // Pre-order Traversal: Visit root node first
  preOrderTraversal(callback) {
    this.preOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform pre-order traversal
  preOrderTraversalNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversalNode(node.left, callback);
      this.preOrderTraversalNode(node.right, callback);
    }
  }

  // Post-order Traversal: Visit root node last
  postOrderTraversal(callback) {
    this.postOrderTraversalNode(this.root, callback);
  }

  // Helper method to recursively perform post-order traversal
  postOrderTraversalNode(node, callback) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callback);
      this.postOrderTraversalNode(node.right, callback);
      callback(node.value);
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order traversal:");
bst.inOrderTraversal((value) => console.log(value)); // Output: 20, 30, 40, 50, 60, 70, 80

console.log("Pre-order traversal:");
bst.preOrderTraversal((value) => console.log(value)); // Output: 50, 30, 20, 40, 70, 60, 80

console.log("Post-order traversal:");
bst.postOrderTraversal((value) => console.log(value)); // Output: 20, 40, 30, 60, 80, 70, 50

console.log("Search 40:", bst.search(40)); // Output: true
console.log("Search 100:", bst.search(100)); // Output: false
