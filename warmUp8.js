//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function(arr1 , arr2){
	var value = false;
	for (var i = 0 ; i < arr2.length; i++ {
		
			if(arr2[i] - arr1[i]){
              value = true;
			}
			else{
				value = false;
			}
		
	}
	console.log("the result of second array subset the first array is : "+value);
}