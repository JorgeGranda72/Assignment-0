function countOfAllIndexMatchingNumbers(nums) {
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(i == nums[i])
      count ++;
  }
  return count;
  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
