function sumOfNumsWithinARange(nums, start, end) {
    var rangeCount = 0;
    for(var i = 0; i < nums.length; i++){
      if(nums[i] >= start && nums[i] <= end)
        rangeCount ++;
      }
    return rangeCount;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
