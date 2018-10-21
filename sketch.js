var imageJukebox;
function preload(){
  // put preload code here
  imageJukebox = loadImage("./assets/jukebox.png");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  //COLORE BACKGROUND
  background('#eea7a6');
  //jukebox
  imageMode(CENTER);
  image(imageJukebox, width/2, height/2, 414, 579);

//canzoni nome
textAlign(CENTER);
textFont('Saira');
textSize(12);
//prima colonna
text('First', width/2 - 35, height/2-130);
text('Third', width/2 - 35, height/2-73);
text('Fifth', width/2 - 35, height/2-15);
//seconda colonna
text('Second', width/2 + 35, height/2-130);
text('Fourth', width/2 + 35, height/2-73);
text('Sixth', width/2 + 35, height/2-15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
