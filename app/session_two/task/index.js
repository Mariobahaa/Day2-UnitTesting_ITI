// const getPositive = (vals) => {
//   return vals.filter((x) => {
//     return x > 0;
//   });
// };

// const incrementByOne = (count) => {
//   count += 1;
// },

// vals array of numbers
const sumFunction = (vals, getPositive, incrementByOne) => {
  let sum = 0;

  sum = incrementByOne(sum);

  vals.forEach((val) => {
    sum += val;
  });

  sum = incrementByOne(sum);

  const positiveValues = getPositive(vals);
  console.log(positiveValues);

  return sum;
};

export default sumFunction;
