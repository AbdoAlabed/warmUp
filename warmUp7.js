// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

var firsName = 'Abdo';
var lastName = 'Alabed';

console.log(firsName + lastName);

//////////////////////////////////////

if(13 % 3 === 0){
	console.log("13 multiple of 3");
} else{
	console.log("13 dosn't multiple by 3");
}

///////////////////////////////////////////

var ages = [13,14,13,15,16,17,19,13,16,15];
var sum =0
var averge =0
for(var i = 0 ; i < ages.length ; i++){
  sum = sum + ages[i]
}
averge = sum / ages.length ;

//////////////////////////////////////////

var myAge = 23;
var myAgeInSeconds = myAge * 365 * 24 * 60 * 60 ;