var prewords = ["ridiculous","idiotic","pointless","terrible"];
var words = ["rumors","accusations","claims","ideas","thoughts"];
var accusations = ["my gross incompetence", "my love affair with Putin","my tiny hands spilling \ncoffee on the nuclear codes","my failing marriage","my totally NOT Islamophobic ban","my VERY GOOD WALL"];
var people = ["Bad Hombres","The Lizard People", "MSNBC", "Crooked Hillary and her team", "The illegals", "my sworn enemy, \n my conscience"];

var exclamation = ["SAD!","LOSERS!","STUPID.","LIES."];

var font;
//var img;
var d = day();

function preload()
{
	//font = loadFont("HelveticaNeue.ttf");
//	img = LoadImage("head.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	randoPreWord = int(random(prewords.length));
	randoWord = int(random(words.length));
	randoAccu = int(random(accusations.length));
	randoPeeps = int(random(people.length));
	randoExcl = int(random(exclamation.length));

	textFont("Comic Sans MS");
	textSize(30);
	textAlign(LEFT)
	text("@RealDonaldTrump",0,(height/2)-50);
	textSize(60);
	textAlign(LEFT, BASELINE);
	text("The " + prewords[randoPreWord]+ " "  + words[randoWord] + " of " + accusations[randoAccu] + "\nare clearly fake news from " + people[randoPeeps] + ". " + exclamation[randoExcl],0,height/2);
	text("Current day: \n" + d, 5, 50);

}

function draw() {
  
}