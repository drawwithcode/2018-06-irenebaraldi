
function preload(){
  // put preload code here
  myData = loadJSON('./assets/GoT-screentimes.json');

}

var balls = [] ;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  frameRate(12);

  for(var i = 0; i < myData.people.length; i++) {
  var chara = myData.people[i];

  var x = chara.posizione * 85;
  var y = random(height);
  var d = chara.screentime + 5;
  var l01 = chara.name;
  var l02 = chara.screentime;
  var l03 = chara.episodes;
  var d02 = chara.episodes;


  var newBall = new Ball(x, y, d, d02, l01, l02, l03);
  balls.push(newBall);
} }

function draw() {
	background(40);
  for(var j = 0; j < balls.length; j++) {
    if (mouseIsPressed == true) {
  balls[j].display02(); } else {
    balls[j].display();
  } }

  textFont('Almendra SC');
  textSize(50);
  textAlign(CENTER);
  text('Game of Thrones infographic', 900, 100);

  textSize(10);
  textAlign(CENTER);
  text('press to see the number of episodes!', 1115, 130);

}


function Ball(_x, _y, _diameter, _diameter02, _label01, _label02, _label03) { //(_label print the astronaut name)
	// Properties defined by constructor
	this.size = _diameter;
  this.size02 = _diameter02;
	this.x = _x;
	this.y = 270;
  this.label01 = _label01;
  this.label02 = _label02;
  this.label03 = _label03;
	// Hardcoded properties
	this.color = 'white';
	this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;

	this.display = function() {

    noStroke();
    fill(lerpColor(color('#ea0043'), color('#ffffff'), frameCount/120));
		rect(this.x, this.y, 10, this.size);

    fill('white');
    textSize(7);
    textAlign(CENTER);
    text(this.label01, this.x + 5, this.y - 30);

    textSize(7);
    textAlign(CENTER);
    text(this.label02, this.x + 5, this.y - 10);

    textSize(50);
    text('screentime in minutes', 295, 190);


	}

  this.display02 = function() {

    noStroke();
    fill(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/120));
    rect(this.x, this.y, 10, this.size02 * 3);
    fill('white');


    textSize(7);
    textAlign(CENTER);
    text(this.label01, this.x + 5, this.y - 30);

    textSize(7);
    textAlign(CENTER);
    text(this.label03, this.x + 5, this.y - 10);

    textSize(50);
    text('number of episodes', 280, 190);

  }
}
