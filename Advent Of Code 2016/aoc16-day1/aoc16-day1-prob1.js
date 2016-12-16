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

var regex = /\d+/g;
var magnitude = parseInt(directions[0].match(regex)[0]);
if(directions[0].charAt(0) === 'L') {
	currentDir = 'W';
	x -= magnitude;
} else {
	currentDir = 'E';
	x += magnitude;
}

for(var i = 1; i < directions.length; i++) {
	magnitude = parseInt(directions[i].match(regex)[0]);
	if(directions[i].charAt(0) === 'L') {
		if(currentDir === 'W') {
			y -= magnitude;
			currentDir = 'S';
		} else if(currentDir === 'E') {
			y += magnitude;
			currentDir = 'N';
		} else if(currentDir === 'S') {
			x += magnitude;
			currentDir = 'E';
		} else {
			x -= magnitude;
			currentDir = 'W';
		}
	} else {
		if(currentDir === 'W') {
			y += magnitude;
			currentDir = 'N';
		} else if(currentDir === 'E') {
			y -= magnitude;
			currentDir = 'S';
		} else if(currentDir === 'S') {
			x -= magnitude;
			currentDir = 'W';
		} else {
			x += magnitude;
			currentDir = 'E';
		}
	}
}

console.log(Math.abs(x) + Math.abs(y));