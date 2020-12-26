function sumOfAllOddNumbers(nums) {
  var oddCount = 0;
  for(var i = 0; i<nums.length; i++){
    if(nums[i]%2==1)
      oddCount ++;
    }
  return oddCount;
  // Insert code here;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
