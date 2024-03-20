//store values within an array in a divide and conquer fasion based on node position
//depth first traversal
//pre order, post order, and infix order traversal
//pre order traversal will travel to the left most part first, and then the right most part first. if the node === null, then you stop
//null basically means when a node neither has a left or right side
//pre order traversal will move from left right left right
//post order traversal will go from right left right left

//exaple maze (0 represents a wall, 1 represents a path)
//as you traverse through this, create an object with locations and whether you have traveled to this location before
const maze = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

//abstract level solution for this, do this as homework using recursion
//check boundary values 
//travel in a top bottom left right  - not diagonally 
