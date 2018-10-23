var imageJukebox;
var mySong1;
var mySong2;
var mySong3;
var mySong4;
var mySong5;
var mySong6;
var dis = 7;
var wid;
var hei = 300;
var ang = 10;
var per = 2000;
var dx;
var yvalues;

function preload(){
  // put preload code here
  imageJukebox = loadImage("./assets/jukebox.png");
  //canzoni
  mysong1 = loadSound("./assets/classical.mp3");
  mysong2 = loadSound("./assets/dragonBallZ.mp3");
  mysong3 = loadSound("./assets/faded.mp3");
  mysong4 = loadSound("./assets/rock.mp3");
  mysong5 = loadSound("./assets/retrosoul.mp3");
  mysong6 = loadSound("./assets/thejazzpiano.mp3");
  //cover album
  imagecover1 = loadImage("./assets/coverCopertine/classicalcover.jpg");
  imagecover2 = loadImage("./assets/coverCopertine/dragonballcover.jpg");
  imagecover3 = loadImage("./assets/coverCopertine/fadedcover.jpg");
  imagecover4 = loadImage("./assets/coverCopertine/rockcover.jpg");
  imagecover5 = loadImage("./assets/coverCopertine/Jazzcover.jpg");
  imagecover6 = loadImage("./assets/coverCopertine/retrosuolcover.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  var buttonPlay = createButton('Change song');
  buttonPlay.position(windowWidth/2-45, windowHeight/2+200);
  buttonPlay.mousePressed(songChange);

  var buttonStop = createButton('Pause');
  buttonStop.position(windowWidth/2-26, windowHeight/2+225);
  buttonStop.mousePressed(songStop);

  var buttonResume = createButton('Resume');
  buttonResume.position(windowWidth/2-30, windowHeight/2+250);
  buttonResume.mousePressed(songResume);

  mysong1.loop();

  wid = width;
  dx = (TWO_PI / per) * dis;
  yvalues = new Array(floor(wid/dis));

  analyzer = new p5.Amplitude();
  analyzer.setInput(mysong1);
  analyzer.setInput(mysong2);
  analyzer.setInput(mysong3);
  analyzer.setInput(mysong4);
  analyzer.setInput(mysong5);
  analyzer.setInput(mysong6);
}

function draw() {
  // put drawing code here
  //COLORE BACKGROUND
  background('black');
  //jukebo
  if(mysong1.isPlaying()){
    background('#d3ac81');
  }
  if(mysong2.isPlaying()){
     background('#6598f1');
  }
  if(mysong3.isPlaying()){
     background('#25313b');
  }
  if(mysong4.isPlaying()){
    background('#f3010f');
  }
  if(mysong5.isPlaying()){
    background('#609875');
  }
  if(mysong6.isPlaying()){
    background('#e76939');
  }
  calcWave();
  displayWave();

  imageMode(CENTER);
  image(imageJukebox, width/2, height/2, 300, 419);
fill('black');
//canzoni nome
textAlign(CENTER);
textFont('Saira');
textSize(10);
//prima colonna
//1
text('Classical', width/2 - 43, height/2-94);
textStyle(NORMAL);
//3
text('Faded', width/2 - 43, height/2-52);
//5
text('Retrosoul', width/2 - 43, height/2-11);
//seconda colonna
//2
text('Dragon Ball', width/2 + 43, height/2-94);
//4
text('Rock', width/2 + 43, height/2-52);
//6
text('Jazz', width/2 + 43, height/2-11);

fill('black');
if(mysong1.isPlaying()){
  textStyle(BOLD);
  text('Classical', width/2 - 43, height/2-94);
  textStyle(NORMAL);
  text('Jazz', width/2 + 43, height/2-11);
  image(imagecover1, width/2, height/2+40, 70, 70);
  // background('#3A015C');
}
if(mysong2.isPlaying()){
  textStyle(BOLD);
  text('Dragon Ball', width/2 + 43, height/2-94);
  textStyle(NORMAL);
  text('Classical', width/2 - 43, height/2-94);
  image(imagecover2, width/2, height/2+40, 70, 70);
   // background('#023F7C');
}
if(mysong3.isPlaying()){
  textStyle(BOLD);
  text('Faded', width/2 - 43, height/2-52);
  textStyle(NORMAL);
  text('Dragon Ball', width/2 + 43, height/2-94);
  image(imagecover3, width/2, height/2+40, 70, 70);
   // background('#04062D');
}
if(mysong4.isPlaying()){
  textStyle(BOLD);
  text('Rock', width/2 + 43, height/2-52);
  textStyle(NORMAL);
  text('Faded', width/2 - 43, height/2-52);
  image(imagecover4, width/2, height/2+40, 70, 70);
  // background('#83D4EA');
}
if(mysong5.isPlaying()){
  textStyle(BOLD);
  text('Retrosoul', width/2 - 43, height/2-11);
  textStyle(NORMAL);
  text('Rock', width/2 + 43, height/2-52);
  image(imagecover6, width/2, height/2+40, 70, 70);
  // background('#E98338');
}
if(mysong6.isPlaying()){
  // background('#984447');
  textStyle(BOLD);
  text('Jazz', width/2 + 43, height/2-11);
  textStyle(NORMAL);
  text('Retrosoul', width/2 - 43, height/2-11);
  image(imagecover5, width/2, height/2+40, 70, 70);
}

  }

function songChange(){
  if ( mysong1.isPlaying() ) {
 mysong1.stop();
 mysong2.loop();
} else if( mysong2.isPlaying() ){
 mysong3.loop();
 mysong2.stop();
} else if( mysong3.isPlaying() ){
 mysong4.loop();
 mysong3.stop();
} else if( mysong4.isPlaying() ){
 mysong5.loop();
 mysong4.stop();
} else if( mysong5.isPlaying() ){
 mysong6.loop();
 mysong5.stop();
} else if( mysong6.isPlaying() ){
 mysong1.loop();
 mysong6.stop();

}

}

function songStop(){
mysong1.pause();
mysong2.pause();
mysong3.pause();
mysong4.pause();
mysong5.pause();
mysong6.pause();
}

function songResume(){
if(mysong1.isPaused()){
  mysong1.loop();
};
if(mysong2.isPaused()){
  mysong2.loop();
};
if(mysong3.isPaused()){
  mysong3.loop();
};
if(mysong4.isPaused()){
  mysong4.loop();
};
if(mysong5.isPaused()){
  mysong5.loop();
};
if(mysong6.isPaused()){
  mysong6.loop();
};

}

function calcWave() {
  var vol = analyzer.getLevel();
  ang += vol/7; // angle increment
  var x = ang;

  // sine function
  for (var a = 0; a < yvalues.length; a++) {
    yvalues[a] = sin(x)*hei;
    x+=windowWidth;
  }
}

function displayWave() {
  noStroke();
  fill(255,100);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*dis, height/2+yvalues[x], 10, 10);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
