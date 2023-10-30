// Math.random()

// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

// Return value

// A floating-point, //! pseudo-random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// ? Getting a random number between two values

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
