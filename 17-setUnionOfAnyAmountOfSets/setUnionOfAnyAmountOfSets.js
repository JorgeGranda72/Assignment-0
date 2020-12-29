function setUnionOfAnyAmountOfSets(...args) {
    //Creates a union set
    let unionSet = new Set()
    //Traverses the argument sets
    for (var i = 0; i < args.length; i++){
      for (let value of args[i]){
        //Adds unique elements to the set
        unionSet.add(value);
      }
    }
    return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;