function myParseInt(str) {
  let num = 0;
  let sign = 1;
  let i = 0;

  // handle leading whitespace
  while (str[i] === " ") {
    i++;
  }

  // handle sign
  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  // handle digits
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    num = num * 10 + (str.charCodeAt(i) - "0".charCodeAt(0));
    i++;
  }

  return sign * num;
}

let number = null;
const sign = 1;
number &&= number * sign;

console.log(number);
