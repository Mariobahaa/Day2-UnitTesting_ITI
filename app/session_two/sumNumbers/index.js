const calcPizzaQuantity = (number) => {
  const unit = "pizza";
  return `these are ${number} ${unit}`;
};

const myRecipes = () => ["cheese", "tomato"];

export const getPizzas = (a, b, calcPizzaQuantity, myRecipes) => {
  console.log("here");
  myRecipes().map((item) => console.log(item)); // fake function () => ["", ""]
  calcPizzaQuantity(a + b); // () => {}
};
