// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function example(str){
	var result = '1';
	var arr = [];
	arr[0] = str[0];
	var c = 1;
    var sum = 1;
    var sum2 = 1;
    var stop = str.length;
   for (var i = 0; i < arr.length; i++) {
   	 
   	 	if(str[c] !== arr[i] ){
            result = result + sum;
   	 		 arr[c] = str[c];
   	 		 c++;
   	 	     
   	 } else if(str[c] === arr[i]) {
   	 	sum2++;
   	 	result = result +sum2;
   	 	arr[c] = str[c];
   	 	c++;
   	 }
   	 if(stop === 0){
   	 	break;
   	 }
      stop --;
   }return result;
}