//series of arrays for the tweet itself
var prewords = ["ridiculous","idiotic","stupid","nonsense","poppy-cock"];
var words = ["rumors","accusations","claims","ideas","thoughts","words"];
var accusations = ["my gross incompetence", "my love affair with Putin","my tiny hands \nspilling coffee on the nuclear codes","my failing marriage","my totally NOT Islamophobic ban","my VERY GOOD WALL"];
var people = ["Bad Hombres","The Lizard People", "MSNBC", "Crooked Hillary \nand her team", "The illegals", "my sworn enemy, \n my conscience"];
var altnames = ["fake news", "...well, those might actually be \nvalid concerns","a load of baloney","PURE LIES", "INSIDIOUS DISSENT\n", "TREASONOUS"];
var exclamation = ["SAD!","LOSERS!","STUPID.","LIES.", "FIRED.","IDIOTS!","PUNISHMENT WILL BE HARSH!"];

//variables to store asset files
var font;
var font2;
var img;
var img2;

function preload()
{
	//Twitter uses a very specific font and I wanted to keep authenticity
	font = loadFont("HelveticaNeue Light.ttf");
	font2 = loadFont("Helvetica Neu Bold.ttf");
	//for the icon and verified symbol
	img = loadImage("verified.png");
	img2 = loadImage("head.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	//uses the random function to pick out one entry from each of the arrays
	randoPreWord = int(random(prewords.length));
	randoWord = int(random(words.length));
	randoAccu = int(random(accusations.length));
	randoPeeps = int(random(people.length));
	randoAlt = int(random(altnames.length));
	randoExcl = int(random(exclamation.length));

	//places twitter icon on the page
	image(img2,0,height/5,100,100);

	//places the username on the page
	textSize(45);
	textFont(font2);
	text("Donald J. Trump",100,(height/5)+40);

	//places the verified icon as well
	image(img,450,(height/5),100,100);

	//puts the twitter handle underneath the name
	textSize(40)
	textFont(font);
	text("@RealDonaldTrump",100,(height/5)+100);
	
	//creates a fully formed tweet based on the phrases previously selected
	textSize(60);
	textAlign(LEFT,TOP);
	var tweet ="The " + prewords[randoPreWord]+ " "+ words[randoWord] +" of "+ accusations[randoAccu] +"\nare clearly " + altnames[randoAlt] + " from " + people[randoPeeps] + ".\n" + exclamation[randoExcl];
	text(tweet,0,(height/5)+100);
	tweetbox = font.textBounds(tweet,0,(height/5)+100,60);

	//generates a random timestamp
	var timestamps = ["AM","PM"]
	var months= ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	textSize(25);
	text(+int(random(1,12)) +":" +int(random(9,59)) + random(timestamps) + "  -  " + int(random(1,31)) + " " + random(months) + " 2017", tweetbox.x,tweetbox.y+tweetbox.h+220);
}

function draw() {
  
}
