function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = 0;
  for(var i = 0; i< nums.length; i++)
    if(nums[i]<target)
        count ++;
  return count;
  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
