//store values within an array in a divide and conquer fasion based on node position
//depth first traversal
//pre order, post order, and infix order traversal
//pre order traversal will travel to the left most part first, and then the right most part first. if the node === null, then you stop
//null basically means when a node neither has a left or right side
//pre order traversal will move from left right left right
//post order traversal will go from right left right left

//exaple maze (0 represents a wall, 1 represents a path)
//as you traverse through this, create an object with locations and whether you have traveled to this location before
//abstract level solution for this, do this as homework using recursion
//check boundary values
//travel in a top bottom left right  - not diagonally

//ITERATIVE

const maze = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

function traverseMaze(maze) {
  const visited = Array.from({ length: maze.length }, () =>
    Array(maze[0].length).fill(false)
  );
  let i = 0;
  let j = 0;
  while (i <= maze.length - 1 && j <= maze[i].length - 1 && !visited[i][j]) {
    visited[i][j] = true;
    console.log(visited);
    //if reach the end, hit console.log(success)
    if (i === maze.length - 1 && j === maze[i].length - 1) {
      console.log("success");
      return true;
    }

    //move to the right
    if (j + 1 < maze[i].length && maze[i][j + 1] === 1) {
      j = j + 1;
      console.log("moved to the right at " + "i: " + i + " and j: " + j);
    }

    //move down
    else if (i + 1 < maze.length && maze[i + 1][j] === 1) {
      i = i + 1;
      console.log("moved down at " + "i: " + i + " and j: " + j);
    }

    //move left
    else if (j - 1 >= 0 && maze[i][j - 1] === 1) {
      j = j - 1;
      console.log("moved to the left at " + "i: " + i + " and j: " + j);
    }

    //move up
    else if (i - 1 >= 0 && maze[i - 1][j] === 1) {
      i = i - 1;
    }

    //no valid move
    else {
      break;
    }

    //if none of the above are 1s, mark current spot as a 0 and start fresh
  }

  console.log("No path to the end of the maze.");
  return false;
}

console.log(traverseMaze(maze));

//RECURSIVE

const maze2 = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

function traverseMaze(maze, i = 0, j = 0) {
  const visited = Array.from({ length: maze.length }, () =>
    Array(maze[0].length).fill(false)
  );

  if (i === maze.length - 1 && j === maze[i].length - 1) {
    console.log("success");
    return true;
  }

  //move to the right
  if (j + 1 < maze[i].length && maze[i][j + 1] === 1) {
    traverseMaze(maze, i, j + 1);
    console.log("moved to the right at " + "i: " + i + " and j: " + j);
  }

  //move down
  else if (i + 1 < maze.length && maze[i + 1][j] === 1) {
    // i = i + 1;
    traverseMaze(maze, i + 1, j);
    console.log("moved down at " + "i: " + i + " and j: " + j);
  }

  //move left
  else if (j - 1 >= 0 && maze[i][j - 1] === 1) {
    // j = j - 1;
    traverseMaze(maze, i, j - 1);
    console.log("moved to the left at " + "i: " + i + " and j: " + j);
  }

  //move up
  else if (i - 1 >= 0 && maze[i - 1][j] === 1) {
    // i = i - 1;
    traverseMaze(maze, i - 1, j);
  }

  //no valid move
  else {
    return false;
  }

  console.log("No path to the end of the maze.");
  return false;
}

console.log(traverseMaze(maze));

function mazeSolver(maze, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x >= maze.length ||
    y >= maze[0].length ||
    maze[x][y] === 0
  ) {
    return false; // Base case: out of bounds or blocked path
  } else if (x === maze.length - 1 && y === maze[0].length - 1) {
    return true; // Base case: reached the exit
  } else {
    // Explore all four directions recursively
    return (
      mazeSolver(maze, x + 1, y) ||
      mazeSolver(maze, x, y + 1) ||
      mazeSolver(maze, x - 1, y) ||
      mazeSolver(maze, x, y - 1)
    );
  }
}

// Example maze (0 represents wall, 1 represents path)
const maze3 = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

console.log(mazeSolver(maze2, 0, 0)); // Output: true (if there exists a path)
