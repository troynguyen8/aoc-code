/**
 * @author Troy Nguyen
 * 12/27/16
 * Advent of Code 2015, Day 11 problem 2
 */
 
var input = 'cqjxjnds';
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function isValidPassword(password) {
	if(password.includes('i') || password.includes('o') || password.includes('l')) {
		return false;
	}
	
	var containsStraight = false;
	for(let i = 0; i <= password.length - 3; i++) {
		if(ALPHABET.includes(password.substring(i, i + 3))) {
			containsStraight = true;
			break;
		}
	}
	
	if(!containsStraight) {
		return false;
	}
	
	if(password.search(/(\w)\1/) === -1) {
		return false;
	}
	
	if(password.match(/(\w)\1/g).length < 2) {
		return false;
	}
	
	return true;
}

function incrementPassword(password) {
	var passwordArr = [...password];
	passwordArr.forEach((a, index) => passwordArr[index] = passwordArr[index].charCodeAt(0));
	
	passwordArr[passwordArr.length - 1]++;
	
	for(let i = passwordArr.length - 1; i >= 0; i--) {
		if(passwordArr[i] === 123) {
			passwordArr[i] = 97;
			passwordArr[i - 1]++;
		}
	}
	
	let adjustedPassword = '';
	for(let i = 0; i < passwordArr.length; i++) {
		adjustedPassword = adjustedPassword + String.fromCharCode(passwordArr[i]);
	}
	
	return adjustedPassword;
}

let validPasswordCount = 0;
while(true) {
	if(isValidPassword(input)) {
		validPasswordCount++;
	}
	
	if(validPasswordCount === 2) {
		break;
	}
	
	input = incrementPassword(input);
}

console.log(input);