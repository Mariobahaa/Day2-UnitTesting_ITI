export const Pizzas = [
  { name: "Chicago Pizza", desc: "small size only", quantity: 1 },
  { name: "Neapolitan Pizza", desc: "all sizes", quantity: 2 },
  { name: "New York Pizza", desc: "all sizes", quantity: 1 },
  { name: "Sicilian Pizza", desc: "large size only", quantity: 2 },
];

const myFunction = (text) => {
  console.log(text);
  return [1, 2, 3];
};

export const filterByTerm = (inputArr, searchTerm, myFunction) => {
  // myFunction(); // ===> jest.fn();
  // myFunction();

  //calling with input
  myFunction(searchTerm);

  const newArray = myFunction();
  newArray.map((item) => console.log(item));

  return inputArr.filter((arrayElement) => {
    return arrayElement.url.includes(searchTerm);
  });
};

// filterByTerm([{}, {}, {}], "link");
