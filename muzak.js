var song;
var fft;

function preload(){
song = loadSound("derezzed.mp3");
}

function setup() {
createCanvas(windowWidth,windowHeight);
fft = new p5.FFT();
song.play();
strokeWeight(2);
}

function draw() {
	var spectrum = fft.analyze();
	var wave = fft.waveform();
	//var AnaRed = map(spectrum[0],0,512,0,255);
	//var AnaGreen = map(spectrum[256],0,512,0,255);
	//var AnaBlue = map(spectrum[512],0,512,0,255);

	background(255);

	stroke(spectrum[32],spectrum[64],spectrum[128]);
	
	for (var i = 0; i < spectrum.length; i++){
		var amp = spectrum[i];
		var y = map(amp, 0,1024,height,-height*2);
		line(i*2, height, i*2, y);
	}
	console.log(wave);
  
}
