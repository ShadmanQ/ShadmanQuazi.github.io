var prewords = ["ridiculous","idiotic","pointless","terrible"];
var words = ["rumors","accusations","claims","ideas","thoughts"];
var accusations = ["my gross incompetence", "my love affair with Putin","my tiny hands spilling coffee \non the nuclear codes","my failing marriage","my totally NOT Islamophobic ban","my VERY GOOD WALL"];
var people = ["Bad Hombres","The Lizard People", "MSNBC", "Crooked Hillary and her team", "The illegals", "my sworn enemy, my conscience"];
var altnames = ["fake news", "..well, those might actually be valid \npoints","a load of baloney","PURE LIES", "INSIDIOUS DISSENT", "SEVERE ACTS OF TREASON"];
var exclamation = ["SAD!","LOSERS!","STUPID.","LIES.", "FIRED.","IDIOTS!","PUNISHMENT WILL BE HARSH!"];

var font;
//var img;

function preload()
{
	font = loadFont("HelveticaNeue Light.ttf");
//	img = LoadImage("head.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	randoPreWord = int(random(prewords.length));
	randoWord = int(random(words.length));
	randoAccu = int(random(accusations.length));
	randoPeeps = int(random(people.length));
	randoAlt = int(random(altnames.length));
	randoExcl = int(random(exclamation.length));

	textFont(font);
	textSize(30);
	textAlign(LEFT)
	text("@RealDonaldTrump",0,(height/2)-50);
	textSize(60);
	textAlign(LEFT, BASELINE);
	text("The " + prewords[randoPreWord]+ " "+ words[randoWord] +" of "+ accusations[randoAccu] +"\nare clearly " + altnames[randoAlt] + " from " + people[randoPeeps] + ".\n" + exclamation[randoExcl],0,height/2);
}

function draw() {
  
}
