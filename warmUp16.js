// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function balloonWord(str){
	var arr = [];
	var words = ' ';
	var s = 'balloon';
	var output = 0;
  for (var i = 0; i < str.length; i++) {
     arr.push(str[i])
  } 
  for (var i = 0; i < s.length; i++) {
  	for (var j = 0; j < arr.length; j++) {
  		if(arr[j] === s[i]){
  			words = words + arr[j];
  			s.slice(i+1);
  		}
  	}
  } return words;
}