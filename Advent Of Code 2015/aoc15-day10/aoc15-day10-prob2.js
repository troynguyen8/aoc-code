/**
 * @author Troy Nguyen
 * 12/26/16
 * Advent of Code 2016, Day 10 problem 2
 */
 
var input = '1113122113';

function lookAndSay(numberString) {
	let returnString = '';
	let splitString = numberString.match(/(\d)\1*/g);
	
	splitString.forEach(entry => returnString = returnString + entry.length + entry.charAt(0));
	
	return returnString;
}

for(let i = 1; i <= 50; i++) {
	input = lookAndSay(input);
}

console.log(input.length);