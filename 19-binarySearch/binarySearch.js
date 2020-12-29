class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target){
    let start = 0;
    let end = nums.length - 1;
    let mid; // Middle value
    let flag = false;
    
    
    while(!flag && start <= end){
      mid = Math.floor((start + end)/2);
      //Finds target
      if(nums[mid] === target){ 
        flag = true;
      }
      //Target on the right side 
      else if(nums[mid] < target){ 
        start = mid + 1;
      } 
      //Target on the left side
      else{ 
        end = mid - 1;
      }
    }
    return flag;
  }
  
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;