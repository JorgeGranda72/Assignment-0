function productOfAnyAmountOfNumbers(...args) {
  //Passing a callback function with reduce() to
  //return the product of arguments
  return theArgs.reduce((previous, current) => {
    return previous * current;});
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;