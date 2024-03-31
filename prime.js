// Define a function
function pickPrime(number) {
  // we checks if the number is prime and return false if not prime numbers start from 2
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    //check if the number is divisible by 2 ,if it is it's not a prime thus return false
    if (number % i === 0) {
      return false;
    }
  }
  //return true if number is not divisible by 2
  return true;
}
// iterate over each element to check if its prime
// if it return true its included in new array if false its excluded
function filterPrimes(numbers) {
  //return a new array of prime numbers
  return numbers.filter(pickPrime);
}
//print out of an example in the console
console.log(filterPrimes([7, 10, 13, 16, 19, 21, 22, 27, 30, 37, 39, 40]));
