//overlapping subproblems and optimal substructure
//solve some problems with dynamic programming
//defintion - a ethod for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solution
//use dynamic programming when there are overlapping subproblems (if it can be broken down into subproblems which are reused several times) and optimal substructure (a problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems)

//Fibonacci sequence
//Fib(n) = Fib(n-1) + Fib(n-2)
//time complexity is horrible for below implementation O 2^n

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//dynamic programming, storing the solutions of previous subproblems. dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

//memoization - storing answer of an expensive function calls and returning the cached result when the same inputs occur again

function fib2(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}

//base case built in
function fib3(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}

//tabulation - storing the result of a previous result in a "table" (usually an array). Usually done using iteration. Better space complexity can be achieved using tabulation

function fibTab(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
