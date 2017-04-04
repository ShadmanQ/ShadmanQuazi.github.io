var sounds = [];
var animalsounds = [];
var cowimg, dogimg, chickenimg, goatimg, catimg;

var fft;
var kickInterval = 500;
var lastKick = 0;
var lastSnare = 250;

// load in all the music sounds!
function preload() {
	sounds[0] = loadSound("assets/drum/kick2.wav");
	sounds[1] = loadSound("assets/drum/snare1.wav");

	animalsounds[0] = loadSound("assets/animals/dog.mp3");
	animalsounds[1] = loadSound("assets/animals/cat.mp3");
	animalsounds[2] = loadSound("assets/animals/chicken.mp3");
	animalsounds[3] = loadSound("assets/animals/goat.mp3");
	animalsounds[4] = loadSound("assets/animals/moo.mp3");

	dogimg = loadImage("assets/images/doge.png");
	catimg = loadImage("assets/images/cat.png");
	chickenimg = loadImage("assets/images/chicken.png");
	goatimg = loadImage("assets/images/goat.png");
	cowimg = loadImage("assets/images/cow.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	fft = new p5.FFT();
}

function draw() {
	background(255);

	fill(0);
	textSize(70);
	textAlign(CENTER);
	text("Add an animal! \nPress A for Dog, S for cat, D for chicken,\n F for goat, G for cow", width/2, 200);
	textAlign(RIGHT);
	textSize(30);
	text("to make the kick faster \nor slower, press O or P", width, .8*height);
if (millis()  > lastKick + kickInterval){
	sounds[0].play();
	lastKick = millis();
}


//if (millis() >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         


	var spectrum = fft.analyze();
	noStroke();
	spectRed = map(spectrum[0],0,50,50,200);
	spectGreen = map(spectrum[20],0,200,0,180);
	spectBlue = map(spectrum[40],0,200,0,160);
	fill(spectRed,spectGreen,spectBlue);
	 for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h );
  }

	// if nothing is being played...
}

function keyPressed() {
	// for specific keys play and do specific thing
	if(key == 'A') {
		animalsounds[0].play();
		image(catimg, random(width),random(height),500,500);
	}
	if(key == 'S') {
		animalsounds[1].play();
	}
	if(key == 'D') {
		animalsounds[2].play();
	}
	if(key=='F'){
		animalsounds[3].play();
	}
	if(key=='G'){
		animalsounds[4].play();
	}

	if(key == 'O'){
		kickInterval -= 100;
	}

	if(key == 'P'){
		kickInterval +=100;	
	}
}