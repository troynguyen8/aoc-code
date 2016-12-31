/**
 * @author Troy Nguyen
 * 12/28/16
 * Advent of Code 2016, Day 12 problem 1
 */
 
var input = [
'cpy 1 a ',
'cpy 1 b ',
'cpy 26 d',
'jnz c 2 ',
'jnz 1 5 ',
'cpy 7 c ',
'inc d   ',
'dec c   ',
'jnz c -2',
'cpy a c ',
'inc a   ',
'dec b   ',
'jnz b -2',
'cpy c b ',
'dec d   ',
'jnz d -6',
'cpy 19 c',
'cpy 11 d',
'inc a   ',
'dec d   ',
'jnz d -2',
'dec c   ',
'jnz c -5'
];

class Register {
	constructor(id, numberVal) {
		this.id = id;
		this.numberVal = numberVal;
	}
	
	increase() {
		this.numberVal++;
	}
	
	decrease() {
		this.numberVal--;
	}
}

function findValue(val) {
	return (isNaN(+val)) ? regArr[regMap.get(val)].numberVal : +val;
}

var regMap = new Map();
regMap.set('a', 0);
regMap.set('b', 1);
regMap.set('c', 2);
regMap.set('d', 3);

var regArr = [
(new Register('a', 0)),
(new Register('b', 0)),
(new Register('c', 0)),
(new Register('d', 0))
];

var iterations = 0;
for(let i = 0; i < input.length; i++) {
	let instrucs = input[i].match(/-?\w+/g);
	
	if(instrucs[0] === 'cpy') {
		let copiedValue = findValue(instrucs[1]);
		
		regArr[regMap.get(instrucs[2])].numberVal = copiedValue;
	} else if(instrucs[0] === 'inc') {
		regArr[regMap.get(instrucs[1])].increase();
	} else if(instrucs[0] === 'dec') {
		regArr[regMap.get(instrucs[1])].decrease();
	} else {
		let checkedValue = findValue(instrucs[1]);
		
		if(checkedValue !== 0) {
			i += (+instrucs[2]) - 1;
		}
	}
	
}

console.log(regArr[regMap.get('a')].numberVal);