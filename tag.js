// player 1 is "it" and drawn as a red circle
// player 2 is trying to escape capture.
// player 2 moves slightly slower but can teleport from
// bottom to top, left to right, etc. if they go off the edge

var player1X;	// create variables to store
var player1Y;	// player coordinates

var player2X;
var player2Y;

var powerupcup = {
	x: 700,
	y: 700,

	spawn: function(picture,arg1, arg2) {
	fill(255);
	image(picture,arg1,arg2,50,50);
	this.x = arg1;
	this.y = arg2;
	}
}

var powerupmult = {
	x: 700,
	y: 700,

	spawn: function(picture,arg1, arg2) {
	fill(255);
	image(picture,arg1,arg2,50,50);
	this.x = arg1;
	this.y = arg2;
	}
}
// modifiers for various power-ups
var coffeecup;
var multiplier;
var cupX;
var cupY;
var multX;
var multY;
var cafMod1 = 1.0;
var cafMod2 = 1.0;
var sizeMod1 = 1.0;
var sizeMod2 = 1.0;
var clusterMob;
// if the game ends, make this true so we can display a message
var gameOver = false;


function preload()
{
	coffeecup = loadImage("images/cup.png");
	mult = loadImage("images/2x.png");

}
function setup() {

	createCanvas(windowWidth, windowHeight)

	// set player starting positions
	player1X = 100;
	player1Y = height/2;
	player2X = width - 100;
	player2Y = height/2;
	cupX= random(width);
	cupY = random(height);
	multX = random(width);
	multY = random(height);

}

function draw() {
	background(0);
	powerupcup.spawn(coffeecup,cupX,cupY);
	powerupmult.spawn(mult,multX,multY);
	// only do game logic if game isn't over
	if(!gameOver) {

		// check keys one at a time

		// PLAYER 1
		if(keyIsDown(UP_ARROW)) {
			// UP
			// can p1 go up?
			if(player1Y > 5) {
				// if so, move up...
				player1Y = player1Y - (5*cafMod1);
			}
		}

		if(keyIsDown(40)) {
			// DOWN
			// can p1 go down?
			if(player1Y < height - 5) {
				player1Y = player1Y + (5*cafMod1);
			}
		}

		if(keyIsDown(37)) {
			// LEFT
			// check that the player isnt too far left
			if(player1X > 5) {
				player1X = player1X - (5*cafMod1);
			}
		}

		if(keyIsDown(39)) {
			// RIGHT
			// can p1 go right??
			if(player1X < width - 5) {
				player1X = player1X + (5*cafMod1);
			}
		}
		// PLAYER 2
		if(keyIsDown(87)) {
			// UP
			player2Y = player2Y - (4*cafMod2);
		}

		if(keyIsDown(83)) {
			// DOWN
			player2Y = player2Y + (4*cafMod2);
		}
		if(keyIsDown(65)) {
			// LEFT
			player2X = player2X - (4*cafMod2);
		}
		if(keyIsDown(68)) {
			// RIGHT
			player2X = player2X + (4*cafMod2);
		}
		// wrap player 2 rather than constraining, to mix things up
		// has player 2 gone off the right side of the screen?
		if(player2X > width) {
			player2X = 0;
		}
		// has player 2 gone off the left side of the screen?
		if(player2X < 0) {
			player2X = width;
		}
		// has player 2 gone off the bottom of the screen?
		if(player2Y > height) {
			player2Y = 0;
		}

		// has player 2 gone off the top of the screen?
		if(player1Y < 0) {
			player1Y = height;
		}


		if(player1X > width) {
			player1X = 0;
		}
		// has player 2 gone off the left side of the screen?
		if(player1X < 0) {
			player1X = width;
		}
		// has player 2 gone off the bottom of the screen?
		if(player1Y > height) {
			player1Y = 0;
		}

		// has player 2 gone off the top of the screen?
		if(player1Y < 0) {
			player1Y = height;
		}

		// have the two players collided?
		// the dist function returns the distance between two
		// coordinate pairs in pixels	
// coordinate pairs in pixels

var cupdist1 = dist(player1X, player1Y, powerupcup.x,powerupcup.y);
	if (cupdist1 < 80){
		cupX+=5000;
		cupY+=5000;
		cafMod1+=3.5;
	}
var cupdist2 = dist(player2X, player2Y, powerupcup.x,powerupcup.y);
	if (cupdist2 < 20){
		cupX+=5000;
		cupY+=5000;
		cafMod2+=3.5;
	}

var multdist1 = dist(player1X, player1Y, powerupmult.x,powerupmult.y);
console.log(multdist1);
	if (multdist1 < 20){
		multX+=5000;
		multY+=5000;
		sizeMod1 +=1.0;
	}
var multdist2 = dist(player2X, player2Y, powerupmult.x,powerupmult.y);
	if (multdist2 < 20){
		multX+=5000;
		multY+=5000;
		sizeMod2 +=1.0;
	}
var playerDistance = dist(player1X, player1Y, player2X, player2Y);
	if(playerDistance < 50) {
		// THEYVE COLLIDED! RED WINS!
		gameOver = true;
		}

		
	} else {

		// if game IS over...
		fill(255,255,0);
		textSize(50);
		textAlign(CENTER);
		text("SUCKS TO SUCK", width/2, height/2);

	}

	

	fill(255,0,0);	// yellow for PLAYER 1
	ellipse(player1X, player1Y, (50*sizeMod1), (50*sizeMod1));

	fill(0,0,255);	// blue for PLAYER 2
	ellipse(player2X, player2Y, (50*sizeMod2), (50*sizeMod2));



}