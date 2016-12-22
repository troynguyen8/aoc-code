/**
 * @author Troy Nguyen
 * 12/21/16
 * Advent of Code 2016, Day 8 problem 2
 */
 
var input = [
'rect 1x1               ',
'rotate row y=0 by 7    ',
'rect 1x1               ',
'rotate row y=0 by 5    ',
'rect 1x1               ',
'rotate row y=0 by 5    ',
'rect 1x1               ',
'rotate row y=0 by 2    ',
'rect 1x1               ',
'rotate row y=0 by 3    ',
'rect 1x1               ',
'rotate row y=0 by 5    ',
'rect 1x1               ',
'rotate row y=0 by 3    ',
'rect 1x1               ',
'rotate row y=0 by 2    ',
'rect 1x1               ',
'rotate row y=0 by 3    ',
'rect 2x1               ',
'rotate row y=0 by 7    ',
'rect 6x1               ',
'rotate row y=0 by 3    ',
'rect 2x1               ',
'rotate row y=0 by 2    ',
'rect 1x2               ',
'rotate row y=1 by 10   ',
'rotate row y=0 by 3    ',
'rotate column x=0 by 1 ',
'rect 2x1               ',
'rotate column x=20 by 1',
'rotate column x=15 by 1',
'rotate column x=5 by 1 ',
'rotate row y=1 by 5    ',
'rotate row y=0 by 2    ',
'rect 1x2               ',
'rotate row y=0 by 5    ',
'rotate column x=0 by 1 ',
'rect 4x1               ',
'rotate row y=2 by 15   ',
'rotate row y=0 by 5    ',
'rotate column x=0 by 1 ',
'rect 4x1               ',
'rotate row y=2 by 5    ',
'rotate row y=0 by 5    ',
'rotate column x=0 by 1 ',
'rect 4x1               ',
'rotate row y=2 by 10   ',
'rotate row y=0 by 10   ',
'rotate column x=8 by 1 ',
'rotate column x=5 by 1 ',
'rotate column x=0 by 1 ',
'rect 9x1               ',
'rotate column x=27 by 1',
'rotate row y=0 by 5    ',
'rotate column x=0 by 1 ',
'rect 4x1               ',
'rotate column x=42 by 1',
'rotate column x=40 by 1',
'rotate column x=22 by 1',
'rotate column x=17 by 1',
'rotate column x=12 by 1',
'rotate column x=7 by 1 ',
'rotate column x=2 by 1 ',
'rotate row y=3 by 10   ',
'rotate row y=2 by 5    ',
'rotate row y=1 by 3    ',
'rotate row y=0 by 10   ',
'rect 1x4               ',
'rotate column x=37 by 2',
'rotate row y=3 by 18   ',
'rotate row y=2 by 30   ',
'rotate row y=1 by 7    ',
'rotate row y=0 by 2    ',
'rotate column x=13 by 3',
'rotate column x=12 by 1',
'rotate column x=10 by 1',
'rotate column x=7 by 1 ',
'rotate column x=6 by 3 ',
'rotate column x=5 by 1 ',
'rotate column x=3 by 3 ',
'rotate column x=2 by 1 ',
'rotate column x=0 by 1 ',
'rect 14x1              ',
'rotate column x=38 by 3',
'rotate row y=3 by 12   ',
'rotate row y=2 by 10   ',
'rotate row y=0 by 10   ',
'rotate column x=7 by 1 ',
'rotate column x=5 by 1 ',
'rotate column x=2 by 1 ',
'rotate column x=0 by 1 ',
'rect 9x1               ',
'rotate row y=4 by 20   ',
'rotate row y=3 by 25   ',
'rotate row y=2 by 10   ',
'rotate row y=0 by 15   ',
'rotate column x=12 by 1',
'rotate column x=10 by 1',
'rotate column x=8 by 3 ',
'rotate column x=7 by 1 ',
'rotate column x=5 by 1 ',
'rotate column x=3 by 3 ',
'rotate column x=2 by 1 ',
'rotate column x=0 by 1 ',
'rect 14x1              ',
'rotate column x=34 by 1',
'rotate row y=1 by 45   ',
'rotate column x=47 by 1',
'rotate column x=42 by 1',
'rotate column x=19 by 1',
'rotate column x=9 by 2 ',
'rotate row y=4 by 7    ',
'rotate row y=3 by 20   ',
'rotate row y=0 by 7    ',
'rotate column x=5 by 1 ',
'rotate column x=3 by 1 ',
'rotate column x=2 by 1 ',
'rotate column x=0 by 1 ',
'rect 6x1               ',
'rotate row y=4 by 8    ',
'rotate row y=3 by 5    ',
'rotate row y=1 by 5    ',
'rotate column x=5 by 1 ',
'rotate column x=4 by 1 ',
'rotate column x=3 by 2 ',
'rotate column x=2 by 1 ',
'rotate column x=1 by 3 ',
'rotate column x=0 by 1 ',
'rect 6x1               ',
'rotate column x=36 by 3',
'rotate column x=25 by 3',
'rotate column x=18 by 3',
'rotate column x=11 by 3',
'rotate column x=3 by 4 ',
'rotate row y=4 by 5    ',
'rotate row y=3 by 5    ',
'rotate row y=2 by 8    ',
'rotate row y=1 by 8    ',
'rotate row y=0 by 3    ',
'rotate column x=3 by 4 ',
'rotate column x=0 by 4 ',
'rect 4x4               ',
'rotate row y=4 by 10   ',
'rotate row y=3 by 20   ',
'rotate row y=1 by 10   ',
'rotate row y=0 by 10   ',
'rotate column x=8 by 1 ',
'rotate column x=7 by 1 ',
'rotate column x=6 by 1 ',
'rotate column x=5 by 1 ',
'rotate column x=3 by 1 ',
'rotate column x=2 by 1 ',
'rotate column x=1 by 1 ',
'rotate column x=0 by 1 ',
'rect 9x1               ',
'rotate row y=0 by 40   ',
'rotate column x=44 by 1',
'rotate column x=35 by 5',
'rotate column x=18 by 5',
'rotate column x=15 by 3',
'rotate column x=10 by 5',
'rotate row y=5 by 15   ',
'rotate row y=4 by 10   ',
'rotate row y=3 by 40   ',
'rotate row y=2 by 20   ',
'rotate row y=1 by 45   ',
'rotate row y=0 by 35   ',
'rotate column x=48 by 1',
'rotate column x=47 by 5',
'rotate column x=46 by 5',
'rotate column x=45 by 1',
'rotate column x=43 by 1',
'rotate column x=40 by 1',
'rotate column x=38 by 2',
'rotate column x=37 by 3',
'rotate column x=36 by 2',
'rotate column x=32 by 2',
'rotate column x=31 by 2',
'rotate column x=28 by 1',
'rotate column x=23 by 3',
'rotate column x=22 by 3',
'rotate column x=21 by 5',
'rotate column x=20 by 1',
'rotate column x=18 by 1',
'rotate column x=17 by 3',
'rotate column x=13 by 1',
'rotate column x=10 by 1',
'rotate column x=8 by 1 ',
'rotate column x=7 by 5 ',
'rotate column x=6 by 5 ',
'rotate column x=5 by 1 ',
'rotate column x=3 by 5 ',
'rotate column x=2 by 5 ',
'rotate column x=1 by 5 '
];

var screenPixels = [];
for(let i = 0; i < 6; i++) {
	screenPixels.push([]);
}

for(let i = 0; i < 6; i++) {
	for(let j = 0; j < 50; j++) {
		screenPixels[i].push(false);
	}
}

for(let i = 0; i < input.length; i++) {
	var specifications = input[i].match(/\d+/g);
	specifications.forEach((string, index, arr) => arr[index] = parseInt(string));
	
	if(input[i].includes('rect')) {
		for(let j = 0; j < specifications[1]; j++) {
			for(let k = 0; k < specifications[0]; k++) {
				screenPixels[j][k] = true;
			}
		}
	} else if(input[i].includes('x=')) {
		var colCopy = [];
		for(let j = 0; j < 6; j++) {
			colCopy.push(screenPixels[j][specifications[0]]);
		}
		
		for(let j = 1; j <= specifications[1]; j++) {
			let poppedElement = colCopy[colCopy.length - 1];
			colCopy.pop();
			colCopy.splice(0, 0, poppedElement);
		}
		
		for(let j= 0; j < 6; j++) {
			screenPixels[j][specifications[0]] = colCopy[j];
		}
		
		colCopy = [];
	} else { 
		for(let j = 1; j <= specifications[1]; j++) {
			let poppedElement = screenPixels[specifications[0]][screenPixels[specifications[0]].length - 1];
			screenPixels[specifications[0]].pop();
			screenPixels[specifications[0]].splice(0, 0, poppedElement);
		}
	}
}

for(let i = 0; i < 6; i++) {
	for(let j = 0; j < 50; j++) {
		screenPixels[i][j] = (screenPixels[i][j]) ? '█' : '░';
	}
}

for(let i = 0; i < 50; i += 5) {
	let letterString = '';
	for(let j = 0; j < 6; j++) {
		let rowString = '';
		for(let k = 0; k <= 4; k++) {
			rowString = `${rowString}${screenPixels[j][i+k]}`
		}

		letterString = `${letterString}${rowString}\n`;
	}
	
	console.log(letterString);
}