//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

function countingValleys(steps, path) {
  let level = 0;
  let numValleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "D") {
      level--;
    }
    if (path[i] === "U") {
      if (level == -1) {
        numValleys++;
      }
      level++;
    }
  }

  console.log(numValleys);
  return numValleys;
}

console.log(countingValleys(10, "DUDDDUUDUU"));
