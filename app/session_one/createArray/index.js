// 3 - mandatory
// input number 3 ==> output should be [0,1,2]
const createArray = (number) => {
  let myArray = Array.from(Array(number).keys());
  return myArray;
};

export default createArray;

// 4 - optional
//Assert on array length;
