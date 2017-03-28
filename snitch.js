
//context: I've been watching the Harry Potter movies again, hence the names
// declare an array of Quaffles
var collectibles = [];

// also make a singular player object
var player;


//the ball of interest
var snitch;
var snitchimg;

// need this variable so that if the player scores enough points
// the game is over and we can stop drawing it
var gameOver = false;

// a bunch of flying balls
var collectibleCount = 180;

function preload(){
	snitchimg = loadImage("goldensnitch.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // since there is only one single player object
  // we initialize it like this
  player = new Player();

  snitch = new Snitch();
  // and as a basic example, we can simply spawn
  // 20 collectibles to begin with
  for (var i = 0; i < collectibleCount; i++) {
    collectibles.push(new Quaffle());
  }
imageMode(CENTER);
  

}

function draw() {

  background(0);

  if(!gameOver) {


  		//snitch methods
	snitch.x += snitch.speed;
  	snitch.y += snitch.speed;
  	if (snitch.x > width){
  		snitch.x = 0;
  	}
  	if (snitch.y > height){
  		snitch.y = 0;
  	}

  	//win condition, if player comes in contact with the golden snitch, they win
  	var snitchdist = dist(snitch.x,snitch.y,player.x,player.y);
  	console.log(snitchdist);
  	if (snitchdist < 20){
  		gameOver =true;

  	}
  	snitch.update();
  	// cycle thru every object in our array and
    // call their method(s)
  	for(var i = 0; i < collectibles.length; i++) {
  		collectibles[i].x+=collectibles[i].speed;
  		collectibles[i].y+=collectibles[i].speed;
  		if (collectibles[i].x > width){
  			collectibles[i].x = 0;
  		}
  		if(collectibles[i].y > height){
  			collectibles[i].y = 0;
  		}

  		//psedo-collision mechanic, if they balls collide, go in the opposite direction
  		var theDist = dist(collectibles[i].x,collectibles[i].y+20,player.x+20,player.y);
  		for (var j = i; j < collectibles.length-1; j++){
  			if (theDist < 20){
  				collectibles[i].speed*=-1;
  			}
  			//given that I'm not sure how to properly change the trajectory of the snitch
  			//I'm using this loop to offset the snitch by a slight amount
  			//to confuse the players, hence confusiondist
  			var confusiondist = dist(collectibles[j].x,collectibles[j].y,snitch.x,snitch.y);
  			if (confusiondist < 10){
  				snitch.x+=50;
  				 snitch.update();
  			} 
  		}
  		//allows the balls to wrap around the screen
  		if (collectibles[i].x < 0)
  		{
  			collectibles[i].x = width;
  		}
  		if(collectibles[i].y < 0)
  		{
  			collectibles[i].y = height;
  		}
  		collectibles[i].update(); 

  	}

  
    // handle keyboard input
    // notice the syntax is a bit different than before
    // it's just as valid, but shorthand (without curly brackets)
    // this way an if statement only applies to the line directly
    // after it
    if (keyIsDown(LEFT_ARROW))
      player.x -= player.speed;

    if (keyIsDown(RIGHT_ARROW))
      player.x += player.speed;

    if (keyIsDown(UP_ARROW))
      player.y -= player.speed;

    if (keyIsDown(DOWN_ARROW))
      player.y += player.speed;

    // and since there is only one single player object
    // no need for a for loop
    player.display();

    // is it game over?
    if(player.score >= collectibleCount) {
      gameOver = true;
    }

  } else {

    // game is apparently over, so display something
    fill(255,0,0);
    textSize(40);
    text("Game over! You win?", width/2, height/2);
    //
  }

}

//        --- COLLECTIBLE CLASS ---
function Quaffle() {

	// internal variables
	this.x = random(width);
	this.y = random(height);
  	this.diameter = 65;
 	this.speed = random(5.0,15.0);

	// internal function for object
	this.update = function() {
		// do stuff

    // for example, draw to screen
    fill(255,0,0);
    stroke(255,0,0);
    ellipse(this.x, this.y, this.diameter, this.diameter);

	}

}

function Snitch() {

	// internal variables
	this.x = random(width);
	this.y = random(height);
  	this.diameter = 100;
 	this.speed = 60;

	// internal function for object
	this.update = function() {
		// do stuff

    // for example, draw to screen
    fill(150,200,25);
    strokeWeight(5);
    stroke(0);
    image(snitchimg, this.x, this.y, this.diameter, this.diameter);

	}

}
//        --- PLAYER CLASS ---
function Player() {

  this.x = width/2;
  this.y = height/2;
  this.diameter = 40;
  this.speed = 5;
  this.score = 0;

  this.display = function() {
    noStroke();
    fill(127);
    ellipse(this.x, this.y, this.diameter, this.diameter);

    // also show score
  }

}