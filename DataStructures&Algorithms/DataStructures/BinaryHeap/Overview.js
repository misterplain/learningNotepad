/*
Binary Heap is a complete binary tree where each node has a value greater than or equal to its children (max heap) or less than or equal to its children (min heap). It is commonly implemented using an array where the parent node is stored at index i, and its left child is stored at index 2*i + 1 and the right child at index 2*i + 2.

Binary Heaps are used for implementing priority queues, where elements with higher priority are served before elements with lower priority. They are also used in algorithms like heap sort and graph algorithms (Dijkstra's algorithm, Prim's algorithm) for efficiently finding the minimum or maximum element repeatedly.

Heap operations:
- Insertion: Adds a new element to the heap while maintaining the heap property.
- Deletion: Removes the root element (minimum or maximum) from the heap while maintaining the heap property.
- Heapify: Converts an array into a heap by rearranging its elements.

Binary Heap types:
1. Max Heap: The value of each parent node is greater than or equal to the values of its children. The maximum element is at the root.
2. Min Heap: The value of each parent node is less than or equal to the values of its children. The minimum element is at the root.

Overall, Binary Heaps provide efficient insertion and deletion of elements while maintaining the heap property, making them suitable for priority queue implementations and various other applications requiring efficient access to the minimum or maximum element.
*/

//within DSA course
//max binary heap notes
//each parent has at most two child nodes. the value of each parent node is always greater than its child nodes
//in a maxBinaryHeap the parent is greater than the children, but there are no guarantees between sibling nodes
//a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
//minBinaryHeap will have opposite rule, smallest is root node, both children have to be largest etc
//binaryHeaps are used to implement priority queues, which are very commonly used data structures. they are also used quite a bit, with graph traversal algorithms.
//to store within an array, for any index of n the left child is stored at 2n+1 and the right child is stored at 2n+2
//from child to parent its (n-1)/2 - floored to get rid of decimal point

//pseudocode for bubble / insert
//push the value into the values property of the heap
//bubble the value up to its correct spot
//
class MaxBinaryHeap2 {
  constructor() {
    this.values = [];
  }
  //insert pseudocode
  //push the value into the values property on the heap
  /*Bubble Up
    Create a variable called index which is the length of the values property - 1
    create a variable called parentIndex which is the floor of (index-1)/2
    Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    //swap the val of the values element at the parentIndex with the value of the elemnt property at the child index
    set the index to be the parentIndex and start over

    */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

//provided by chatGPT
class MaxBinaryHeap2 {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //remove the root, replace with the most recently added, adjust and sink down
  /**PSEUDOCODE REMOVING AND SINK DOWN
   * Swap the first value in the values roperty with the last one
   * Pop from the values prorperty, so you can return the value at the end
   * have the new root "sink down" to the correct spot
   * - your parent index starts at 0
   * find the index of the left child which is 2 * index + 1 (make sure its not out of the bounds)
   * find the index of the right child 2 * index + 2 (make sure it's not out of bounds
   * if the left or right child is greater than the element, swap. if both the left and right children are larger, swap with the largest child)
   * the child index you swapped now becomes the new parent index
   * keep looping and swapping unti lneither child is larger than the element
   * return the old root
   */
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//Priority Queue via minHeap, taking into account priority of node
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //remove the root, replace with the most recently added, adjust and sink down
  /**PSEUDOCODE REMOVING AND SINK DOWN
   * Swap the first value in the values roperty with the last one
   * Pop from the values prorperty, so you can return the value at the end
   * have the new root "sink down" to the correct spot
   * - your parent index starts at 0
   * find the index of the left child which is 2 * index + 1 (make sure its not out of the bounds)
   * find the index of the right child 2 * index + 2 (make sure it's not out of bounds
   * if the left or right child is greater than the element, swap. if both the left and right children are larger, swap with the largest child)
   * the child index you swapped now becomes the new parent index
   * keep looping and swapping unti lneither child is larger than the element
   * return the old root
   */
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priotiry) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

//from chatGPT
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Example usage:

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);

console.log(maxHeap.values); // [41, 39, 33, 18, 27, 12]

console.log(maxHeap.extractMax()); // 41
console.log(maxHeap.values); // [39, 27, 33, 18, 12]

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 3);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("C", 2);

console.log(priorityQueue.values); // [{ val: 'B', priority: 1 }, { val: 'C', priority: 2 }, { val: 'A', priority: 3 }]
console.log(priorityQueue.dequeue()); // { val: 'B', priority: 1 }
