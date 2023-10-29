// String.prototype.normalize()

// The normalize() method of String values returns the Unicode Normalization Form of this string.

{
  const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
  const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

  console.log(`${name1}, ${name2}`);
  // Expected output: "Amélie, Amélie"
  console.log(name1 === name2);
  // Expected output: false
  console.log(name1.length === name2.length);
  // Expected output: false

  const name1NFC = name1.normalize("NFC");
  const name2NFC = name2.normalize("NFC");

  console.log(`${name1NFC}, ${name2NFC}`);
  // Expected output: "Amélie, Amélie"
  console.log(name1NFC === name2NFC);
  // Expected output: true
  console.log(name1NFC.length === name2NFC.length);
  // Expected output: true
}

//!
// Parameters

// form Optional

//     One of "NFC", "NFD", "NFKC", or "NFKD", specifying the Unicode Normalization Form. If omitted or undefined, "NFC" is used.

//     These values have the following meanings:

//     "NFC"

//         Canonical Decomposition, followed by Canonical Composition.
//     "NFD"

//         Canonical Decomposition.
//     "NFKC"

//         Compatibility Decomposition, followed by Canonical Composition.
//     "NFKD"

//         Compatibility Decomposition.

//!
// Return value

// A string containing the Unicode Normalization Form of the given string.
