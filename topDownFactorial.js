// top down recursive function calculates the solutions to each subproblem in the forward phase, passing the results of the calculation to the recursive call
// solution is incrementally calculated


function factorial(number, total = 1) {
  console.log("Forward phase", number, "*", total);

  // Base case
  // by the time the base case is reached the full solution is calculated
  if (number <= 1) {
    console.log("base case", number);
    return total;
  }

//   recursive case (also forward case, when the function is calling itself)
// total is a bit like an accumulator, starting value set in parameter
// the solution is not always calculated in the recursive case, but it is here
  total = factorial(number - 1, total * number);

  console.log("Backward phase", number, total);
  return total;
}

console.log(factorial(5));
