function factorial(number) {
    //records each forward phase
    //forward phase: everytime the funtion is calling itself
  console.log("Forward phase", number); 
  // Base case
  if (number <= 1) {
    console.log("base case", number);
    return 1;
  }
  // Recursive case
  const numberMinusOneFactorial = factorial(number - 1);

//   records each  backward phase
// backward phase starts when a fucntion call satisfies the base case
  console.log("Backward phase", number, "*", numberMinusOneFactorial);

  return number * numberMinusOneFactorial;
}

// this call does not return until all recursive calls have returned
console.log(factorial(5));
