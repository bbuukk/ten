// Math.max()

// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

//!
// Parameters

// value1, …, valueN

//     Zero or more numbers among which the largest value will be selected and returned.

//!
// Return value

// The largest of the given numbers. //! Returns NaN if any of the parameters is or is converted into NaN.

//!Returns -Infinity if no parameters are provided.

Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20

console.log(Math.max());

//? Getting the maximum element of an array
{
  const arr = [1, 2, 3];
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
}
{
  const arr = [1, 2, 3];
  console.log(Math.max(...arr));
}

{
  //!
  const array = [1, 1, , 1];
  console.log(Math.max(...array));
}

//  ! However, both spread (...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. See Using apply and built-in functions for more details. The reduce solution does not have this problem.
