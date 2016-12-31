/**
 * @author Troy Nguyen
 * 12/28/16
 * Advent of Code 2015, Day 14 problem 1
 */
 
var input = [
'Dancer can fly 27 km/s for 5 seconds, but then must rest for 132 seconds. ',
'Cupid can fly 22 km/s for 2 seconds, but then must rest for 41 seconds.   ',
'Rudolph can fly 11 km/s for 5 seconds, but then must rest for 48 seconds. ',
'Donner can fly 28 km/s for 5 seconds, but then must rest for 134 seconds. ',
'Dasher can fly 4 km/s for 16 seconds, but then must rest for 55 seconds.  ',
'Blitzen can fly 14 km/s for 3 seconds, but then must rest for 38 seconds. ',
'Prancer can fly 3 km/s for 21 seconds, but then must rest for 40 seconds. ',
'Comet can fly 18 km/s for 6 seconds, but then must rest for 103 seconds.  ',
'Vixen can fly 18 km/s for 5 seconds, but then must rest for 84 seconds.   '
]; 

class Reindeer {
	constructor(name, speed, moveDuration, restDuration) {
		this.distanceTraveled = 0;
		this.moveTime = 0;
		this.restTime = 0;
		this.moving = true;
		
		this.name = name;
		this.speed = speed;
		this.moveDuration = moveDuration;
		this.restDuration = restDuration;
	}
	
	increment() {
		if(this.moving) {
			this.distanceTraveled += this.speed;
			this.moveTime++;
		}
		
		if(!this.moving) {
			this.restTime++;
		}
		
		if(this.moveTime === this.moveDuration) {
			this.moveTime = 0;
			this.moving = false;
		}
		
		if(this.restTime === this.restDuration) {
			this.restTime = 0;
			this.moving = true;
		}
	}
}

var reindeerArr = [];

input.forEach(curString => {
	let name = curString.match(/\w+/)[0];
	let parameters = curString.match(/\d+/g);
	parameters.forEach((num, index) => parameters[index] = parseInt(parameters[index]));
	
	reindeerArr.push(new Reindeer(name, parameters[0], parameters[1], parameters[2]));
});

for(let totalTime = 1; totalTime <= 2503; totalTime++) {
	reindeerArr.forEach(reindeer => reindeer.increment());
}

let max = reindeerArr[0].distanceTraveled;
reindeerArr.forEach(reindeer => max = Math.max(max, reindeer.distanceTraveled));

console.log(max);