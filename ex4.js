function setup() {
	createCanvas(windowWidth,windowHeight);

}

function draw() {
	var theX = map(mouseX, 0,width,0,255);
	var theY = map(mouseY, 0, height,0,255);
	var diff = theX-theY;
	var otherthing = map(diff, -200,2000, 0,255);
  background(theX,theY, otherthing);
}