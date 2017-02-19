var prewords = ["ridiculous","idiotic","pointless","terrible"];
var words = ["rumors","accusations","claims","ideas","thoughts"];
var accusations = ["my gross incompetence", "my love affair with Putin","my tiny hands spilling coffee \non the nuclear codes","my failing marriage","my totally NOT Islamophobic ban","my VERY GOOD WALL"];
var people = ["Bad Hombres","The Lizard People", "MSNBC", "Crooked Hillary and her team", "The illegals", "my sworn enemy, my conscience"];
var altnames = ["fake news", "..well, those might actually be valid \npoints","a load of baloney","PURE LIES", "INSIDIOUS DISSENT", "SEVERE ACTS OF TREASON"];
var exclamation = ["SAD!","LOSERS!","STUPID.","LIES.", "FIRED.","IDIOTS!","PUNISHMENT WILL BE HARSH!"];

var font;
var img;

function preload()
{
	font = loadFont("HelveticaNeue Light.ttf");
	font2 = loadFont("Helvetica Neu Bold.ttf");
	img = loadImage("verified.jpg");
	img2 = loadImage("head.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	randoPreWord = int(random(prewords.length));
	randoWord = int(random(words.length));
	randoAccu = int(random(accusations.length));
	randoPeeps = int(random(people.length));
	randoAlt = int(random(altnames.length));
	randoExcl = int(random(exclamation.length));

	image(img2,0,height/5,100,100);

	textSize(40);
	textFont(font2);
	text("Donald J. Trump",100,(height/5)+40);

	image(img,425,(height/5),100,100);

	textFont(font);
	text("@RealDonaldTrump",100,(height/5)+90);
	textSize(60);
	textAlign(LEFT,TOP);
	var tweet ="The " + prewords[randoPreWord]+ " "+ words[randoWord] +" of "+ accusations[randoAccu] +"\nare clearly " + altnames[randoAlt] + " from " + people[randoPeeps] + ".\n" + exclamation[randoExcl];
	text(tweet,0,(height/5)+100);
	tweetbox = font.textBounds(tweet,0,(height/5+100));

	var timestamps = ["AM","PM"]
	var months= ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	textSize(25);
	text(+int(random(1,12)) +":" +int(random(9,59)) + random(timestamps) + " " + int(random(1,31)) + " " + random(months) + " 2017", tweetbox.x,tweetbox.y+tweetbox.h+220);
}

function draw() {
  
}
