var message = "catch me if you can!";
var font;
var textBox;
var fontsize = 100;
var textX, textY;

function preload() {
  font = loadFont('OstrichSans-Heavy.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER);

  textX = width/2;
  textY = height/2;

}

function draw() {
 //clears the background and prevents a trail of text from showing up
  background(244, 44, 4);

  fill(0);
  text(message, textX, textY);
  textBox = font.textBounds(message,textX,textY,fontsize);

  // if statement which checks if the mouse position is INSIDE the textBox
  // if that's the case, the string "jumps" in any random direction within 200 pixels
  // of the original X and Y
  if ((mouseX >= textBox.x && mouseX <= textBox.x + textBox.w) &&
    (mouseY >= textBox.y && mouseY <= textBox.y + textBox.h)) {
    textX += random(-200, 200);
    textY += random(-200, 200);
  }
}