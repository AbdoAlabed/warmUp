// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function classMates(name , age , address , phoneNum, gender){
	return {
		name: name,
		age: age,
		address: address,
		phoneNum: phoneNum,
		gender: gender
};
}
var array = [];
array.push(classMates('Abdo','23','triopli','09234984','male'));
array.push(classMates('omar','43','triopli','092874334','male'));
array.push(classMates('rana','42','triopli','0928364578','female'));

function displayFriend(array , index){
	return "his name is : "+array[index]['name'] ;
}

function addFriend(mate){
	return array.push(classMates(mate))
}
function nbOfMale(array){
	var sumOFMale = 0;
	for (var i = 0 ; i< array.length; i++) {
		if(array[i]['gender'] === 'male')
		sumOFMale ++ ;
	}
	return sumOFMale;
}