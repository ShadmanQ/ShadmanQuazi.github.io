var bg;
var fg;
var font;
var birdFlightRight;
var birdFlightLeft;
var birdFlightDead;
var theBirds = [];
var doge;
var theBird;
var theDoge;
var FlyAway;
var loseTime;
var gameStart = false;
var gameOver = false;
var PlayerWin = false;

var scoreCounter = 0;

var SpawnTime = 0;

var win_noise;
var dog_noise;
function preload(){
	bg = loadImage("clone_assets/stage.png");
	fg = loadImage("clone_assets/foreground.png");
	font = loadFont("clone_assets/duckhunt.ttf");
	birdFlightRight = loadAnimation("clone_assets/bird_01.png","clone_assets/bird_03.png");
	birdFlightLeft = loadAnimation("clone_assets/left_bird_01.png","clone_assets/left_bird_03.png");
	birdFlightDead = loadAnimation("clone_assets/dead_bird_02.png","clone_assets/dead_bird_03.png");
	win_noise = loadSound("clone_assets/win.mp3");
	dog_noise = loadSound("clone_assets/dog_laugh.mp3");
	doge = loadAnimation("clone_assets/dog_1.png","clone_assets/dog_2.png");
	FlyAway = loadAnimation("clone_assets/flyaway_1.png","clone_assets/flyaway_3.png");
	}

function setup() {
	cursor(CROSS);
	createCanvas(windowWidth, windowHeight);
	image(bg,0,0,windowWidth,windowHeight);
	fill(0);

	textFont(font);
	theBird = new Bird(random(windowWidth),random(windowHeight));
	theDoge = new Doge();
}

function draw() {
	background(bg,windowWidth,windowHeight);
	textSize(50);
	text(scoreCounter*1000,windowWidth*0.9,windowHeight*0.1);

	if(!gameOver){
		if (!gameStart){
			rect(width/3,height/4,500,300);
			textSize(100)
			fill(255);
			text("HUNT \nDUCKS",width/3+50,bg.height/3+50);
			textFont("Arial");
			textSize(20);
			text("Press Space to start!",bg.width/2-1,height/2+90);
			if (keyWentDown(" ")){
			gameStart = true;
			}
		}
		else {
			GameLogic();
			image(fg,0,0,windowWidth,windowHeight);
			}
	}
	}


function GameLogic(){
	fill(255);
	theBird.update();
	theBird.display();
		if (!theBird.isDead){
		
			if (theBird.x > windowWidth|| theBird.x < 0)		
			{
				theBird.xvelocity *=-1;
				if (theBird.x > windowWidth){
					theBird.flight = birdFlightLeft;
				}

				if (theBird.x < 0){
					theBird.flight=birdFlightRight;
				}
			}

			if((theBird.y > windowHeight)||(theBird.y<0))
			{
				theBird.yvelocity *= -1;
			}

		if (mouseIsPressed){
			var cursordist = dist(theBird.x,theBird.y,mouseX,mouseY);
			rect(0,0,5000,5000);
			if (cursordist < 50){
				theBird.health -=1;
				if(theBird.health == 0){
					theBird.isDead = true;
					PlayerWin = true;
					win_noise.play();
				}
				}
			}
		}
		if (theBird.isDead == true){
			theBird.flight = birdFlightDead;
			theBird.yvelocity = -7.0;
			if (theBird.y > windowHeight){
				Reset();
			}
		}
		if (millis() > theBird.onScreenTime + SpawnTime){
			theBird.escape = true;
			loseTime = millis()
		}
		if (theBird.y < 10){
			theBird.y = -5000;
			theDoge.display();
			if (millis() > loseTime + theDoge.displayTime)
			{
				Reset();
			}
			}
		}



function Reset(){
	if (PlayerWin == true){
		scoreCounter +=1;
	}
	SpawnTime = millis();
	PlayerWin = false;
	theBird.escape = false;
	theBird.isDead = false;
	theBird.health = 3;
	theBird.x = random(windowWidth);
	theBird.y = random(windowHeight);
	theBird.xvelocity = random(-4,8);
	theBird.yvelocity = random(0,4);
	if (theBird.xvelocity < 0)
	{
		theBird.flight = birdFlightLeft;
	}
	if (theBird.xvelocity > 0)
	{
		theBird.flight = birdFlightRight;
	}
}

function MousePressed(){
fill(38,255,7);
ellipse(mouseX,mouseY,20,20);
}


function Bird(x1,y1){
	this.x =x1;
	this.y = y1;
	this.flight = birdFlightRight;
	this.xvelocity = random(-7,5);
	this.yvelocity = random(0,2);
	this.xbound = random(windowWidth);
	this.ybound = random(windowHeight);
	this.isDead = false;
	this.escape = false;
	this.health = 5;
	this.onScreenTime = int(random(4000,7000));

	this.display = function(){
		animation(this.flight,this.x,this.y);
	}
	this.update = function(){
		this.x += this.xvelocity;
		this.y -=this.yvelocity;


	if (this.xvelocity < 0){
		this.flight = birdFlightLeft;
	}
	if (this.isDead == true){
		this.flight = birdFlightDead;
		this.yvelocity = -6.0;
	}

	if(this.escape == true){
		this.flight = FlyAway;
		this.health = 9000000;
		this.yvelocity = 6.0;
	}
}
}

function Doge(){
	this.x = 800;
	this.y = 500;
	this.body = doge;
	this.sound = dog_noise;
	this.displayTime = 2000;
	this.display = function(){
		animation(doge,this.x,this.y)
		if (!this.sound.isPlaying()){
			this.sound.play();
		}
	}
}