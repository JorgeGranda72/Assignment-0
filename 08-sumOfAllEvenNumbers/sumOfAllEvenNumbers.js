function sumOfAllEvenNumbers(nums) {
  var evenCount = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i]%2==0)
      evenCount ++;
    }
  return evenCount;
  // Insert code here;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
