/**
 * @author Troy Nguyen
 * 12/13/16
 * Advent of Code 2016 Day 1 Problem 2
 */
 
// R2 L3 -> 5
// R2 R2 R2 -> 2
// R5 L5 R5 R3 -> 12
// Always first two + remaining - repeated

var directions = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1', 'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5', 'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4', 'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5', 'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3', 'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3', 'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5', 'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1', 'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2', 'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3', 'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5', 'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3', 'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1', 'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5', 'L2', 'L1', 'R4'];
// var directions = ['R8', 'R4', 'R4', 'R8'];
var cardDir = ['N', 'W', 'S', 'E'];
var currentDir;
var x = 0;
var y = 0;
var m;

var xArr = [];
var yArr = [];

if(directions[0].charAt(0) === 'L') {
	currentDir = 'W';
	for(m = 1; m <= parseInt(directions[0].substring(1, directions[0].length + 1)); m++) {
		x--;
		xArr.push(x);
		yArr.push(y);
	}
} else {
	currentDir = 'E';
	for(m = 1; m <= parseInt(directions[0].substring(1, directions[0].length + 1)); m++) {
		x++;
		xArr.push(x);
		yArr.push(y);
	}
}

for(var i = 1; i < directions.length; i++) {
	if(directions[i].charAt(0) === 'L') {
		if(currentDir === 'W') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				y--;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'S';
		} else if(currentDir === 'E') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				y++;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'N';
		} else if(currentDir === 'S') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				x++;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'E';
		} else {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				x--;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'W';
		}
	} else {
		if(currentDir === 'W') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				y++;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'N';
		} else if(currentDir === 'E') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				y--;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'S';
		} else if(currentDir === 'S') {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				x--;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'W';
		} else {
			for(m = 1; m <= parseInt(directions[i].substring(1, directions[i].length + 1)); m++) {
				x++;
				xArr.push(x);
				yArr.push(y);
			}
			currentDir = 'E';
		}
	}
}

// for(var j = 0; j < xArr.length; j++) {
	// console.log(xArr[j]);
	// console.log(yArr[j]);
	// console.log("\n");
// }

for(var j = 0; j < xArr.length && !minFound; j++) {
	for(var k = j + 1; k < xArr.length; k++) {
		if(xArr[j] == xArr[k]) {
			if(yArr[j] == yArr[k]) {
				var minFound = true;
				// console.log(xArr[j]);
				// console.log(yArr[j]);
				console.log(Math.abs(xArr[j]) + Math.abs(yArr[j]));
				break;
			}
		}
	}
}

