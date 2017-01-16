var song;
var sliderRate;
var sliderPan;
var button;
var jumpButton;

function setup() {
  createCanvas(1280,720);
  song = loadSound("derezzed.mp3", loaded);
  background(51);
  amp = new p5.Amplitude();
  sliderPan = createSlider(-1.0,1.0,0.0,0.01);
  song.addCue(4.20, changeBackground, color(0,0,133));
}

function loaded(){
 button = createButton("Play!");
 button.mousePressed(togglePlaying);

 jumpButton = createButton("Jump!");
 jumpButton.mousePressed(jumpSong);

}

function changeBackground(col){
	background(col);
}

function jumpSong(){
	var length = song.duration();
	var t = random(length);
	song.jump(t);
	console.log(t);
}

function togglePlaying(){
	if (!song.isPlaying()){
	song.play();
	button.html("Pause!")
	}
	else{
		song.pause();
	button.html("Play!")

	}
}


function draw() {
	background(51);

	//background(song.currentTime(),0,255);
	//song.rate(sliderRate.value());
	var vol = amp.getLevel();
	var diam = map(vol, 0, 0.4, 25, 450);
	var diam2 = map(vol, 0, 0.4, 10, 150);
	song.pan(sliderPan.value());


	if (amp.getLevel > 0.2)
	{
		fill(random(255),random(255),random(255));
	}
	ellipse(width/2, height/2, diam, diam);
	ellipse(width/3, height/2, diam2, diam2);
	ellipse((width/(3/2)), height/2, diam2,diam2);

	

}