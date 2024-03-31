//Classes with ES2015 class syntax
//What is a class? A class is a blueprint for creating objects with pre-defined properties and methods
//mozilla - js classes introduced with ecmascript 2015, are primarily syntactical sugar over js existing prototype-based inheritance. the class syntax does not introduce a new object-oriented inheritance model to js

//example
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    //the this.X will be what's tied to the instantiation
    this.grade = year;
    //only be later X times
    this.tardies = 0;
    //argument
    this.scores = [];
  }

  //instance method - functionality that pertains to a specific instance
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  //mark late
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  //class methods - pertinant to classes but not necessarily individual instances of a class, defines a static method are called without instantiating their class and cannot be caleld through a class instance. static methods are option used to create utility functions for an application
  //called liked this ->   Student.enrollStudents(firstStudent, secondStudent)
  static enrollStudents(...students) {
    //maybe send an email here
    return "Enrolling students";
  }
}

//instantiate
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
let thirdStudent = new Student("Email", "Katz", 3);
// console.log(thirdStudent.fullName());
console.log(thirdStudent.markLate());
console.log(thirdStudent);
console.log(thirdStudent.markLate());
console.log(thirdStudent.markLate());
console.log(secondStudent.addScore(90));
console.log(secondStudent.addScore(20));
console.log(secondStudent.calculateAverage());
console.log(Student.enrollStudents(firstStudent, secondStudent));

//another example of how status methods are used
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    //hypotenus
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1,p2))

///////////////

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2

// 2. Queue using ES2015 class syntax
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example Usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2

// 3. Linked List using ES2015 class syntax
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      const node = new Node(element);
      let current, previous;
      current = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let i = 0;

        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      let current,
        previous,
        i = 0;
      current = this.head;
      previous = current;

      if (index === 0) {
        this.head = current.next;
      } else {
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      this.size--;
      return current.element;
    }
  }

  printList() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.element + " ";
      current = current.next;
    }
    console.log(str);
  }
}

// Example Usage:
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.insertAt(15, 1);
linkedList.removeFrom(2);
linkedList.printList(); // Output: 10 15 30
