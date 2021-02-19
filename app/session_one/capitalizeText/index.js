//input: "hamada" ===> output: Hamada.
//input: 12 ===> output: "".

// 1 - mandatory
const capitalizeText = (input) => {
  if (typeof input !== "string") return "";
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export default capitalizeText;
