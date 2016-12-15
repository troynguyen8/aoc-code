/**
 * @author Troy Nguyen
 * 12/13/16
 * Advent of Code 2016 Day 1 Problem 1
 */
 
// R2 L3 -> 5
// R2 R2 R2 -> 2
// R5 L5 R5 R3 -> 12
// Always first two + remaining - repeated

var directions = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1', 'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5', 'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4', 'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5', 'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3', 'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3', 'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5', 'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1', 'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2', 'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3', 'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5', 'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3', 'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1', 'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5', 'L2', 'L1', 'R4'];
// var directions = ['R5', 'L5', 'R5', 'R3'];
var cardDir = ['N', 'W', 'S', 'E'];
var currentDir;
var x = 0;
var y = 0;

if(directions[0].charAt(0) === 'L') {
	currentDir = 'W';
	x -= parseInt(directions[0].substring(1, directions[0].length + 1));
} else {
	currentDir = 'E';
	x += parseInt(directions[0].substring(1, directions[0].length + 1));
}

for(var i = 1; i < directions.length; i++) {
	if(directions[i].charAt(0) === 'L') {
		if(currentDir === 'W') {
			y -= parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'S';
		} else if(currentDir === 'E') {
			y += parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'N';
		} else if(currentDir === 'S') {
			x += parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'E';
		} else {
			x -= parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'W';
		}
	} else {
		if(currentDir === 'W') {
			y += parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'N';
		} else if(currentDir === 'E') {
			y -= parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'S';
		} else if(currentDir === 'S') {
			x -= parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'W';
		} else {
			x += parseInt(directions[i].substring(1, directions[i].length + 1));
			currentDir = 'E';
		}
	}
}

console.log(Math.abs(x) + Math.abs(y));