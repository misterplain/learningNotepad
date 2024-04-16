/*
Summary:
Stacks and Queues:
- Abstract data structures commonly used in computer science and software development.
- Stacks follow the Last-In-First-Out (LIFO) principle, where the most recently added element is the first to be removed.
- Queues follow the First-In-First-Out (FIFO) principle, where the oldest added element is the first to be removed.
- Both are linear data structures and support operations such as push (add), pop (remove), and peek (view the top element).

Real-World Examples:
1. Stack: Function Call Stack
   - In programming languages like JavaScript, the function call stack uses a stack data structure to manage function calls and their respective execution contexts.
2. Stack: Undo Functionality
   - Text editors and graphics software often implement undo functionality using a stack, allowing users to revert changes made to a document or image.
3. Queue: Print Job Queue
   - Printers use a queue data structure to manage print jobs, ensuring that documents are printed in the order they were submitted.
4. Queue: Breadth-First Search (BFS)
   - Algorithms like BFS in graph traversal use a queue to visit nodes in a graph level by level.

Big O Notation:
- Stacks and queues typically offer O(1) time complexity for insertion (push/enqueue) and deletion (pop/dequeue) operations.
*/

//Build a stack with an array
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();
//can do shift and unshift as well to add/remove to front of array

//stack - singly linked list
//pushing pseudocode
//the function accept a value. create a new node with that value. if there are no nodes in the stack, set the first and last property to be the newly created node. if there is at least one node, create a variable that stores the current first property on the stack. resert the first property to be the newly created node. set the next property on the node to be the previously created variable. incremebt the size o the stack by 1
//pop psuedocode - if there are no nodes in the stack, return null. create a temp variable to store the first peroperty on the stack . if there is only 1 node set the first and last property to be null. if there is more than one node, set the first property to be the next property on the current list. decrement size by 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      var currentFirst = this.first;
      this.first = currentFirst.next;
    }
    this.size--;
    return currentFirst.value;
  }
}

// Stack Implementation - linked list but in the form of an array?
class Stack {
  constructor() {
    this.items = [];
  }

  // Push: Add an item to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the top item from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek: Return the top item without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  print() {
    console.log(this.items.toString());
  }
}

//building a queue with an array
var q = [];
//add and remove from end - every single thing would have to be reindexed
q.push("test");
q.shift();
//unshift and pop - same thing it would always have to be reindexed
q.unshift("first");
q.pop(); //adds to end of the array

// Queue Implementation - with class - using Node class node from early
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Enqueue: Add an item to the back of the queue. c
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // Dequeue: Remove and return the front item from the queue
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--
    return temp.value
  }

  // Peek: Return the front item without removing it
  peek() {
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue elements
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: 1,2,3
stack.pop();
console.log(stack.peek()); // Output: 2

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print(); // Output: a,b,c
queue.dequeue();
console.log(queue.peek()); // Output: b
