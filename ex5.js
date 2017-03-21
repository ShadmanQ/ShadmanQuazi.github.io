function setup() {
	createCanvas(windowWidth,windowHeight);
	stroke(0);
	strokeWeight(3);
for (var i = 0; i < width; i+=20){
	line(0+i,0,0+i,height);
	}

for (var i = 0; i<height; i+=20){

	line(0,0+i,width,0+i);
}
}

function draw() {
  
}