/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
 function smallestAndLargest(str, siz){
     var arr1 = [];
     var s = '';
     var siz2 = siz;

     for (var i = 0; i < siz2; i++) {

     	if(str.charAt(i) === '1'){
     		
     		s = str.substr(i,2) 
     	    arr1.push(s)  ;
            i++;
            siz2++;
     	} else {
     		arr1.push(str.charAt(i)) ;
     	}
     }
     var minMax = [];
     var min = arr1[0];
     var max = arr1[0];
     for (var i = 0; i < arr1.length; i++) {
     	if(arr1[i] < min){
     		min = arr1[i];
     	}
     }
       for (var i = 0; i < arr1.length; i++) {
     	if(arr1[i] > max){
     		max = arr1[i];
     	}
     }
     minMax[0] = min;
     minMax[1] = max;
     return minMax;
 }

 var inputString = '1568141291110137';
 smallestAndLargest(inputString,10)