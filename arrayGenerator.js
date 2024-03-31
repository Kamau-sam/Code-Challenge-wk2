// Declare a function that takes two parameters starting number and the last number
function inBetweenArray(start, last) {
  // initialize an empty arry where our numbers will be stored
  let numbers = [];
  //   We iterate over our numbers from the start to the last using for loop
  // loop i start at start and we increment by 1 as long as i is less than or equal to last
  for (let i = start; i <= last; i++) {
    // New value of i is pushed into the numbers array
    numbers.push(i);
  }
  //   return updated numbers array after the loop stops executing
  return numbers;
}
// print out an example in the console
console.log(inBetweenArray(7, 37));
