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
