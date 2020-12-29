function productOfAnyAmountOfNumbers(...args) {
  //Passing a callback function with reduce() that
  //returns the product of arguments
  return args.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;});
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;