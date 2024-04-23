// Overview of Hashtables in JavaScript

// Hashtables, also known as hash maps, are a common data structure used to store key-value pairs.
// They offer efficient data retrieval and insertion, making them suitable for various applications.

// Key Characteristics:
// - Fast access time: Hashtables provide constant-time (O(1)) access to values based on their keys.
// - Key uniqueness: Each key in a hashtable must be unique; duplicates are not allowed.
// - Collision handling: Hash collisions can occur when two different keys produce the same hash value.
//   Hashtables employ various collision resolution techniques, such as chaining or open addressing.

// Basic Operations:

// 1. Insertion:
//    - To insert a key-value pair into a hashtable, the key is hashed to determine its index in the underlying array.
//    - If there's a collision, the hashtable resolves it by either chaining the entries in the same index (chaining) or probing for an available slot (open addressing).
//    - The value is then stored at the calculated index.

// 2. Retrieval:
//    - To retrieve a value based on a key, the key is hashed to find its index.
//    - The hashtable then looks up the index and returns the associated value.
//    - This operation is extremely fast due to the direct mapping from key to index.

// 3. Deletion:
//    - Deleting a key-value pair follows a similar process as retrieval.
//    - The key is hashed to determine the index, and the entry at that index is removed.

// Common Use Cases:
// - Storing and retrieving data with efficient lookups.
// - Implementing data caches and memoization.
// - Checking for duplicate values or counting occurrences.
// - Implementing data structures like sets or frequency counters.

// Implementing Hashtables in JavaScript:
// JavaScript provides native support for hashtables using objects and the Map class.
// However, you can also implement a hashtable from scratch for educational purposes or if you need custom behavior.

// In Summary:
// Hashtables are a versatile and efficient data structure for storing key-value pairs.
// They offer fast retrieval and insertion, making them valuable for a wide range of applications.
// Understanding how to implement and use hashtables is essential for any programmer.

//Map and Set are both hash tables
const a = new Map();
const b = new Set();

//creating a hashtable based on DSA course
//what makes a good hash
//fast( constant time)
//doesn't cluster outputs at specific indices, but distributes uniformly
//deterministic - same input yields same output

//hash function with just strings
hash("pink");
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    //map a to 1, b to 2
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

//improved version
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

//from course
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});


/**------------------------------------------------------------------- */

//create a new hash table
//-Insert, lookup, delete, and search are all O(1) time complexity
//          -Collission - when two keys map to the same index in an array, this
// will be 0(n) time complexity
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //hash function 0(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //end up with a number that is valid index that'll be less than the index
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      console.log(hash);
    }
    return hash;
  }

  //set method 0(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //get method 0(1)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //keys method 0(n)
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);

myHashTable._hash("grapes");
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.keys();
console.log(myHashTable.keys());
console.log(myHashTable);

//          Example question - given an array, tell me the first recurring character
//google question
//given an array = [2,5,1,2,3,5,1,2,4]
//it should return 2

//given an array = [2,1,1,2,3,5,1,2,4]
//it should return 1

//given an array = [2,3,4,5]
//it should return undefined

//naive approach - nested for loop
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

//solve using hash tables
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
}

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

//can put in difference types of data
