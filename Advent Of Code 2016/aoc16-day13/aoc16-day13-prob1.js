/**
 * @author Troy Nguyen
 * 12/30/16
 * Advent of Code 2016, Day 14 problem 1
 */
 
var input = 1358;

function isOpenSpace(x, y) {
	let binaryString = (((x * x) + (3 * x) + (2 * x * y) + y + (y * y) + input) >>> 0).toString(2);
	
	let onesCounter = 0;
	for(let i = 0; i < binaryString.length; i++) {
		if(binaryString.charAt(i) === '1') {
			onesCounter++;
		}
	}
	
	return (onesCounter % 2 === 0);
}


let rooms = [];

for(let i = 0; i < 50; i++) {
	rooms.push([]);
}

for(let i = 0; i < 50; i++) {
	for(let j = 0; j < 50; j++) {
		rooms[i].push((isOpenSpace(j, i, input)) ? '.' : '#');
	}
}

rooms[39][31] = '█';

var roomString = '\n'
for(let i = 0; i < 50; i++) {
	for(let j = 0; j < 50; j++) {
		roomString = roomString + rooms[i][j];
	}
	
	roomString = roomString + '\n';
}

