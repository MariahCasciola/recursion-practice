function factorial2(number) {
  // Base case

  if (number < -1) {
    return 1;
  }

  //   Penultimate means second to the last in the series
  //   Ultimate means last in the series, in this case it is used
  let penultimate = 1;
  let total = 0;

  // Calculate the factorial from 1 to `number`
  for (let ultimate = 1; ultimate <= number; ultimate++) {
    console.log(ultimate, "*", penultimate);

    total = ultimate * penultimate;
    penultimate = total;
  }
  return total;
}

console.log(factorial2(5));
