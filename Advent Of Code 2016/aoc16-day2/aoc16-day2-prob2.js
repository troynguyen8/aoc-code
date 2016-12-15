/**
 * @author Troy Nguyen
 * 12/13/16
 * Advent of Code 2016, day 2 problem 2
 */
 
var directions = [
'LDUDDRUDRRURRRRDRUUDULDLULRRLLLUDDULRDLDDLRULLDDLRUURRLDUDDDDLUULUUDDDDLLLLLULLRURDRLRLRLLURDLLDDUULUUUUDLULLRLUUDDLRDRRURRLURRLLLRRDLRUDURRLRRRLULRDLUDRDRLUDDUUULDDDDDURLDULLRDDRRUDDDDRRURRULUDDLLRRDRURDLLLLLUUUDLULURLULLDRLRRDDLUDURUDRLRURURLRRDDLDUULURULRRLLLDRURDULRDUURRRLDLDUDDRLURRDRDRRLDLRRRLRURDRLDRUDLURRUURDLDRULULURRLDLLLUURRULUDDDRLDDUDDDRRLRDUDRUUDDULRDDULDDURULUDLUDRUDDDLRRRRRDLULDRLRRRRUULDUUDRRLURDLLUUDUDDDLUUURDRUULRURULRLLDDLLUDLURRLDRLDDDLULULLURLULRDLDRDDDLRDUDUURUUULDLLRDRUDRDURUUDDLRRRRLLLUULURRURLLDDLDDD',
'DRURURLLUURRRULURRLRULLLURDULRLRRRLRUURRLRRURRRRUURRRLUDRDUDLUUDULURRLDLULURRLDURLUUDLDUDRUURDDRDLLLDDRDDLUUDRDUDDRRDLDUDRLDDDRLLDDLUDRULRLLURLDLURRDRUDUDLDLULLLRDLLRRDULLDRURRDLDRURDURDULUUURURDLUDRRURLRRLDULRRDURRDRDDULLDRRRLDRRURRRRUURDRLLLRRULLUDUDRRDDRURLULLUUDDRLDRRDUDLULUUDRDDDDLRLRULRLRLLDLLRRDDLDRDURRULLRLRRLULRULDDDRDRULDRUUDURDLLRDRURDRLRDDUDLLRUDLURURRULLUDRDRDURLLLDDDRDRURRDDRLRRRDLLDDLDURUULURULRLULRLLURLUDULDRRDDLRDLRRLRLLULLDDDRDRU',
'URUUDUDRDDRDRRRDLLUDRUDRUUUURDRRDUDUULDUDLLUDRRUDLLRDLLULULDRRDDULDRLDLDDULLDDRDDDLRLLDLLRDUUDUURLUDURDRRRRLRRLDRRUULLDLDLRDURULRURULRRDRRDDUUURDURLLDDUUDLRLDURULURRRDRRUUUDRDDLRLRRLLULUDDRRLRRRRLRDRUDDUULULRRURUURURRLRUDLRRUUURUULLULULRRDDULDRRLLLDLUDRRRLLRDLLRLDUDDRRULULUDLURLDRDRRLULLRRDRDLUURLDDURRLDRLURULDLDRDLURRDRLUUDRUULLDRDURLLDLRUDDULLLLDLDDDLURDDUDUDDRLRDDUDDURURLULLRLUDRDDUDDLDRUURLDLUUURDUULRULLDDDURULDDLLD',
'LRRLLRURUURRDLURRULDDDLURDUURLLDLRRRRULUUDDLULLDLLRDLUDUULLUDRLLDRULDDURURDUUULRUDRLLRDDDURLRDRRURDDRUDDRRULULLLDLRLULLDLLDRLLLUDLRURLDULRDDRDLDRRDLUUDDLURDLURLUDLRDLDUURLRRUULDLURULUURULLURLDDURRURDRLUULLRRLLLDDDURLURUURLLLLDLLLUDLDLRDULUULRRLUUUUDLURRURRULULULRURDDRRRRDRUDRURDUDDDDUDLURURRDRRDRUDRLDLDDDLURRRURRUDLDURDRLDLDLDDUDURLUDUUDRULLRLLUUDDUURRRUDURDRRUURLUDRRUDLUDDRUUDLULDLLDLRUUDUULLDULRRLDRUDRRDRLUUDDRUDDLLULRLULLDLDUULLDRUUDDUDLLLLDLDDLDLURLDLRUUDDUULLUDUUDRUDLRDDRDLDRUUDUDLLDUURRRLLLLRLLRLLRLUUDULLRLURDLLRUUDRULLULRDRDRRULRDLUDDURRRRURLLRDRLLDRUUULDUDDLRDRD',
'DDLRRULRDURDURULLLLRLDDRDDRLLURLRDLULUDURRLUDLDUDRDULDDULURDRURLLDRRLDURRLUULLRUUDUUDLDDLRUUDRRDDRLURDRUDRRRDRUUDDRLLUURLURUDLLRRDRDLUUDLUDURUUDDUULUURLUDLLDDULLUURDDRDLLDRLLDDDRRDLDULLURRLDLRRRLRRURUUDRLURURUULDURUDRRLUDUDLRUDDUDDRLLLULUDULRURDRLUURRRRDLLRDRURRRUURULRUDULDULULUULULLURDUDUDRLDULDRDDULRULDLURLRLDDDDDDULDRURRRRDLLRUDDRDDLUUDUDDRLLRLDLUDRUDULDDDRLLLLURURLDLUUULRRRUDLLULUUULLDLRLDLLRLRDLDULLRLUDDDRDRDDLULUUR'
];


function isValidCoord(xCoord, yCoord) {
	if((xCoord === -2 || xCoord === 2) && yCoord === 0) {
		return true;
	} else if(xCoord === -1 || xCoord === 1) {
		if(yCoord === -1 || yCoord === 0 || yCoord === 1) {
			return true;
		}
	} else if(xCoord === 0) {
		if(yCoord >= -2 && yCoord <= 2) {
			return true;
		}
	}
	
	return false;
}
// var directions = [
// 'ULL',
// 'RRDDD',
// 'LURDL',
// 'UUUUD',
// ];

var currentXCoord = -2;
var currentYCoord = 0;

for(var i = 0; i < directions.length; i++) {
	for(var j = 0; j < directions[i].length; j++) {
		currentDir = directions[i].charAt(j);
		
		if (currentDir === 'L') {
			if(!isValidCoord(currentXCoord - 1, currentYCoord)) {
				continue;
			}
			
			currentXCoord--;
		} else if (currentDir === 'R') {
			if(!isValidCoord(currentXCoord + 1, currentYCoord)) {
				continue;
			}
			
			currentXCoord++;
		} else if (currentDir === 'U') {
			if(!isValidCoord(currentXCoord, currentYCoord + 1)) {
				continue;
			}
			
			currentYCoord++;
		} else {
			if(!isValidCoord(currentXCoord, currentYCoord - 1)) {
				continue;
			}
			
			currentYCoord--;
		}
	}
	
	//Finds which button I'm on based on the current coordinate
	var button = 0;
	
	if(currentXCoord === -2) {
		button = 5
	} else if(currentXCoord === -1) {
		if(currentYCoord === -1) {
			button = 'A';
		} else if(currentYCoord === 0) {
			button = 6;
		} else {
			button = 2;
		}
	} else if(currentXCoord === 0) {
		if(currentYCoord === 2) {
			button = 1;
		} else if(currentYCoord === 1) {
			button = 3;
		} else if(currentYCoord === 0) {
			button = 7;
		} else if(currentYCoord === -1) {
			button = 'B';
		} else {
			button = 'D';
		}
	} else if(currentXCoord === 1) {
		if(currentYCoord === 1) {
			button = 4;
		} else if(currentYCoord === 0) {
			button = 8;
		} else {
			button = 'C';
		}
	} else {
		button = 9;
	}
	
	console.log(button);
}