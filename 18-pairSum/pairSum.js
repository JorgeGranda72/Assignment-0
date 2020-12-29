function pairSum(nums, target) {
  if(nums.length <= 1) throw "Length of `nums` array is 1 or lower";
  //Checks the combinations through each element, finds value that equals target     
  for(var i = 0; i < nums.length; i++){
    for(var j = 1; j < nums.length; j++){
      if(nums[i] + nums[j] == target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;