// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr(str){
	var arr = [];
	var s = '';
	
	for (var i = 0; i < str.length; i++) {
         
		if(str[i]!==' '){
		
			s=s+str[i]
		}else{
			
			arr.push(s);
			s = '';
		}
	}
	s= '';

	for (var i = str.length-1; i > 0; i--) {
		if(str[i]!==' '){
			s=s+str[i]
		}else{
			arr.push(s);
			s = '';
			i=0;
		}
	} var st = '';
	 for (var i = arr.length-1; i >= 0; i--) {
	 	st = st + arr[i] + ' ';
	 }
	 return st;
	
}