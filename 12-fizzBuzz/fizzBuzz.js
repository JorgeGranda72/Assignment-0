function fizzBuzz(start, end) {
  var arr = [];
/*for(var i=start;i<=end;i++){
	arr.push(i);
}*/
    for(var i = start; i <= end; i++){
        if(i%3 === 0 && i%5 ===  0){
            arr[i] = "FizzBuzz";

        }
            else if(i%3 === 0){
            arr[i] = "Fizz";
        }
            else if(i%5 === 0){
                arr[i] = "Buzz";
        }
            else{
                arr[i] = i;
        }

     }
     //return arr;
     var filteredArr = arr.filter(function (el) {
        return el != null;
      });
     return filteredArr;
}

// Do not edit this line;
module.exports = fizzBuzz;
