var booze = ['vodka','gin','beer','wine','everclear','absinthe','bourbon','whiksey','sake','soju', 'moonshine','mead','rum','brandy','schnapps'];
var grossstuff = ['pickle juice','sriracha','peanuat butter','peach cobbler', 'twix bars','gizzards','marmite','vegemite','brussels sprouts','orange juice','popcorn','existential dread','raw beef','beans'];


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	fill(255);
	textSize(50);
	textAlign(CENTER);
	text("You ever tried mixing " + booze[int(random(booze.length))] + " and " + grossstuff[int(random(grossstuff.length))] + '?\n Not bad surprisingly.', width/2, height/2);
}

function draw() {
  
}