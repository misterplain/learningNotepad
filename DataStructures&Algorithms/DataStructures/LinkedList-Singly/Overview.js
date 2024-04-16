//what is a linked list?
//a data structure that contains a head, tail, and length property
//linked list consist of nodes and each node has a value and a pointer to another node or null
//one node points to the next one
//great for insertio and deletion because unlike arrays it'll not shift out the other values

590071;

/* ----------------------- */

// Implementation of a Singly Linked List using ES2015 class syntax

// Node class to represent each node in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Pointer to the next node in the list
  }
}

var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("what's");
first.next.next.next = new Node("up");

// LinkedList class representing the linked list
class SinglyLinkedList {
  constructor() {
    this.head = null; // Head pointer initially points to null, indicating an empty list
    this.tail;
    this.size = 0; // Size of the list, initially set to 0
  }

  //push, accepts a value and creates a new node using that value. if there is no head, set the head and tail to be that newly created node. otherwise, set the next property on the current tail to be the new node, and set the tail as the newly created node. increment the length by 1.
  push(val) {
    var newNode = new Node(val);
    //if this is an empty list
    if (!this.head) {
      this.head = newNodethis;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  //traverse
  traverse() {
    var current = this.head;
    //will break out at end as the current.next value for the last item will be null
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  //pop, removing a node from the end of the linked list. which involves going through the entire list to determine WHICH is pointing to the tail. if there are no nodes in the lsit, return indefined - loop through the list until you reach the tail, set the next property to the 2nd to last node to be null. set the tail to be the 2nd to last node. decrement the length of ht elist by 1. return the value of the node removed
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.fail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //shift - remove a new node from the beginning of the linked list
  // if no nodes, return undefined. store the current head property in a variable. set the head property to be the current heads next property. decrement the length by 1. return the value of the node removed.
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  //unshift - adding a new node to the beginning of the linked list
  //the function should accept a value. create a new node using the value passed to the function
  // if there is no head property on the list, set the head and tailt o be the newly created node
  //otherwise set the newly created noes next property to be the current head property on the list. set the head property on the list to be that newly created node. increment the length of the list by 1. return the link list.
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //get - retrieve a node by it's position in a linked list. loop / manually count until we've hit that value
  //will accept an index. if the index is less than 0 or greater than the or equal to the length of the list, return null
  //loop through the list until you reach the index and return the node at that specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  //set - changing the value of a node based on its position in the linked list. accepts value and an index
  //use your get function to find the specific node. if node is not found return false. if it is, update it's value and return true
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  //insert - adding a node to the linked list at a specific position
  //take in index and value. if the index is less than 0 or greater than the length, reutrn false
  //if the index is the same as the length, push a new node to the end of the list
  //if the index is 0, unshift a new node to start of the list
  //otherwise, using the get method, access the node at index - 1 to get the BEFORE node. set the next property on that node to the NEW node. set the next property on the new node to the previous next
  //increment the length, return true
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    var newNode = new Node(val);
    var previous = this.get(index - 1);
    var temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //remove - removing a node from the linked list at a specific position
  //if the index is the same as lenth-1, use pop. if it's equal to 0, shift
  //otherwise, use get to find index-1, set the next property on that node to be the next of the next ndoe
  //decrement and return the value of the removed node
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  //reverse - reversing the linked list in place
  //swap the head and the tail
  //create a variable called next, create a variable called previous
  //create a variable called node and initialize it to the head property
  //loop through the list
  //set next to be the next property on whatever node is
  //same thing for previous, set the node variable to be the value of the next variable

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    var previous = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // Method to insert a new node at the beginning of the list
  insertFirst(data) {
    const newNode = new Node(data); // Create a new node with the given data
    newNode.next = this.head; // Point the new node's next pointer to the current head
    this.head = newNode; // Update the head pointer to the new node
    this.size++; // Increment the size of the list
  }

  // Method to insert a new node at the end of the list
  insertLast(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (!this.head) {
      // If the list is empty, set the new node as the head
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        // Traverse the list until the last node
        current = current.next;
      }
      current.next = newNode; // Point the next pointer of the last node to the new node
    }
    this.size++; // Increment the size of the list
  }

  // Method to remove the first node from the list
  removeFirst() {
    if (!this.head) {
      // If the list is empty, return null
      return null;
    }
    const removedNode = this.head; // Store the reference to the first node
    this.head = this.head.next; // Update the head pointer to the next node
    removedNode.next = null; // Set the next pointer of the removed node to null
    this.size--; // Decrement the size of the list
    return removedNode.data; // Return the data of the removed node
  }

  // Method to remove the last node from the list
  removeLast() {
    if (!this.head) {
      // If the list is empty, return null
      return null;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      // Traverse the list until the last node
      previous = current;
      current = current.next;
    }
    if (!previous) {
      // If there's only one node in the list
      this.head = null; // Set the head pointer to null
    } else {
      previous.next = null; // Set the next pointer of the second last node to null
    }
    this.size--; // Decrement the size of the list
    return current.data; // Return the data of the removed node
  }

  // Method to find the index of a given data value in the list
  indexOf(data) {
    let index = 0;
    let current = this.head;
    while (current) {
      // Traverse the list until the end
      if (current.data === data) {
        // If the current node's data matches the given data, return the index
        return index;
      }
      index++;
      current = current.next; // Move to the next node
    }
    return -1; // Return -1 if the data is not found in the list
  }

  // Method to remove a node at a specific index from the list
  removeAt(index) {
    if (index < 0 || index >= this.size || !this.head) {
      // If the index is out of range or the list is empty, return null
      return null;
    }
    if (index === 0) {
      // If the first node is to be removed
      return this.removeFirst();
    }
    let current = this.head;
    let previous = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      // Traverse the list until the node at the given index
      previous = current;
      current = current.next;
      currentIndex++;
    }
    previous.next = current.next; // Skip the node at the given index
    current.next = null; // Set the next pointer of the removed node to null
    this.size--; // Decrement the size of the list
    return current.data; // Return the data of the removed node
  }

  // Method to get the data of the first node in the list
  getFirst() {
    return this.head ? this.head.data : null;
  }

  // Method to get the data of the last node in the list
  getLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      // Traverse the list until the last node
      current = current.next;
    }
    return current.data; // Return the data of the last node
  }

  // Method to check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Method to get the size of the list
  getSize() {
    return this.size;
  }

  // Method to print the elements of the list
  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example Usage:
const list = new SinglyLinkedList();
list.insertFirst(10);
list.insertLast(20);
list.insertLast(30);
list.insertFirst(5);
list.printList(); // Output: 5 -> 10 -> 20 -> 30
console.log(list.removeFirst()); // Output: 5
console.log(list.removeLast()); // Output: 30
console.log(list.indexOf(20)); // Output: 1
list.removeAt(0);
list.printList(); // Output: 10 -> 20
console.log(list.getFirst()); // Output: 10
console.log(list.getLast()); // Output: 20
console.log(list.isEmpty()); // Output: false
console.log(list.getSize()); // Output: 2
