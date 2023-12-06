function calculate({ courses, text }) {
  const lowerBound = "0".charCodeAt();
  const uppperBound = "9".charCodeAt();
  const eurSign = "€";
  const usdSign = "$";
  const uahSign = "грн";

  let number = 0;

  let uahSum = 0;
  let usdSum = 0;
  let eurSum = 0;
  let totalUAHSum = 0;

  let isSum = true;
  let word = "";

  const textLen = text.length;
  for (let i = 0; i < textLen; i++) {
    const ch = text[i];
    const cp = ch.charCodeAt();
    word += ch;

    if (cp >= lowerBound && cp <= uppperBound) {
      const value = cp - lowerBound;
      number = number * 10 + value;
      continue;
    }

    if (ch === ".") {
      isSum = false;
      continue;
    }

    if (!isSum) {
      number = 0;
      isSum = true;
    } else {
      continue;
    }

    if (ch == " ") {
      word = "";
    }

    if (word == uahSign) {
      uahSum += number;
      totalUAHSum += number;
    } else if (word == usdSign) {
      usdSum += number;
      totalUAHSum += number * courses.usd;
    } else if ((word = eurSign)) {
      eurSum += number;
      totalUAHSum += number * courses.eur;
    } else {
    }

    number = 0;
  }
  return { uahSum, usdSum, eurSum, totalUAHSum };
}

// { uah: 809748, usd: 4414, eur: 2242, totalUAH: 1064475.17 }

const data = `
- 02.10 Эдик 23524 грн
- 03.10 Саша 17328 грн
- 04.10 Денис 21570 грн
- 10.10 Данил 9200 грн
- 11.10 Саша 31050 грн
- 13.10 Денис 20264 грн
- 18.10 Данил 17250 грн
- 03.10 Илья 315$
- 04.10 Денис 277 €
- 06.10 Денис 503$
- 11.10 Денис 525€
- 23.10 Илья 650 $
- 31.10 Денис 596-$
- 31.10 Тимур 2350$
- 04.10 Федя 360€
- 17.10 Федя 720€
- 24.10 Федя 360€
- 04.10 Виталик 52000 грн
- 10.10 Виталик 54500 грн
- 10.10 Виталик 48700 грн 
- 20.10 Виталик 52200 грн
- 06.10 Максим 83472 грн
- 10.10 Федя 54690 грн
- 10.10 Саша 91000 грн
- 16.10 Илья 108800 грн
- 17.10 Игорь 72000 грн
- 26.10 Федя 52200 грн
`;

const freshCourses = { usd: 37.44, eur: 39.905 };
console.log(calculate(freshCourses, data));
