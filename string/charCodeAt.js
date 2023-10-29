// String.prototype.charCodeAt()

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// Expected output: "The character code 113 is equal to q"

// ! Parameters
//  Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

// ! Return value

// An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. If index is out of range of 0 – str.length - 1, charCodeAt() returns // ! NaN.

{
  const str = "𠮷𠮾";
  console.log(str.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
  console.log(str.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character
}

// Below is a possible algorithm to convert a pair of UTF-16 code units into a Unicode code point, adapted from the Unicode FAQ:

// constants
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
