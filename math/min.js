// Math.min()

// The Math.min() static method returns the smallest of the numbers given as input parameters, or //! Infinity if there are no parameters.

//!
// Parameters

// value1, …, valueN

//     Zero or more numbers among which the lowest value will be selected and returned.

//!
// Return value

// The smallest of the given numbers. Returns//! NaN if any of the parameters is or is converted into NaN. Returns Infinity if no parameters are provided.

console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

console.log(Math.min());
console.log(Math.min(1, 1, undefined));

{
  // ? Clipping a value with Math.min()
  // Math.min() is often used to clip a value so that it is always less than or equal to a boundary. For instance, this

  {
    let x = f(foo);

    if (x > boundary) {
      x = boundary;
    }
  }

  // may be written as this

  {
    const x = Math.min(f(foo), boundary);
  }
}
