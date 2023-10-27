{
  const times = [100, 10000, 100000, 1000000, 10000000];

  console.log("\n");

  for (let i = 0; i < times.length; i++) {
    const data = [];
    for (let j = 0; j < times[i]; j++) {
      data.push(i);
    }

    console.log("Data length: ", data.length);

    {
      console.time("FOR loop");
      for (let i = 0; i < data.length; i++);
      console.timeEnd("FOR loop");
    }

    {
      console.time("FOR loop(cached length)");
      const length = data.length;
      for (let i = 0; i < length; i++);
      console.timeEnd("FOR loop(cached length)");
    }

    {
      console.time("WHILE loop");
      let it = 0;
      while (it !== data.length) {
        it++;
      }
      console.timeEnd("WHILE loop");
    }

    {
      console.time("WHILE loop(cached length)");
      let it = 0;
      const length = data.length;
      while (it !== length) {
        it++;
      }
      console.timeEnd("WHILE loop(cached length)");
    }

    {
      console.time("DO WHILE loop");
      let it = 0;
      do {
        it++;
      } while (it !== data.length);
      console.timeEnd("DO WHILE loop");
    }

    {
      console.time("DO WHILE loop(cached length))");
      let it = 0;
      const length = data.length;
      do {
        it++;
      } while (it !== length);
      console.timeEnd("DO WHILE loop(cached length))");
    }

    console.time("FOR IN loop");
    for (const idx in data);
    console.timeEnd("FOR IN loop");

    console.time("FOR OF loop");
    for (const it of data);
    console.timeEnd("FOR OF loop");

    console.time("FOREACH loop");
    data.forEach((it) => it);
    console.timeEnd("FOREACH loop");
    console.log("\n");
  }
}

// {
//   function calculateFactorial(n) {
//     if (n === 0) return 1;
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   const times = [5, 10, 15, 20, 25, 30];

//   const numberToCalculate = 20; // Change this to the desired number
//   console.time("Factorial Calculation");
//   const result = calculateFactorial(20);
//   console.timeEnd("Factorial Calculation");
//   console.log(`Factorial of ${numberToCalculate} is ${result}`);
// }
