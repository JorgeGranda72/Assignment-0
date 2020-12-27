function frequencyCounter(word) {
  let object ={};
  for(let ch of word)
    if(!object[ch]){
      object[ch] = 1;
    }
    else{
      object[ch] = object[ch]  + 1;
    }
  return object;
}

// Do not edit this line;
module.exports = frequencyCounter;
