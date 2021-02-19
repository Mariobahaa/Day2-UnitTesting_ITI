export const filterByTerm = (inputArr, searchTerm, myFunction) => {
  return inputArr.filter((arrayElement) => {
    return arrayElement.url.includes(searchTerm);
  });
};

// filterByTerm([{}, {}, {}], "link");
