let button;


function preload(){
  sfondo2 = loadImage('./resources/images/sfondo2.gif')
  immagine = loadImage('./resources/images/Ranabox.png')
  ditosx = loadImage('./resources/images/ditogif sx.gif')
  ditodx = loadImage('./resources/images/ditogif dx.gif')
  balloon = loadImage('./resources/images/balloons.gif')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resizeCanvas(windowWidth, windowHeight);
  
   button = createButton('Clicca qui!');                                                    //bottone per fullscreen (ATTENZIONE: DA IOS NON FUNZIONA ANCHE DANDO IL CONSENSO)
   button.size(80,20);
   button.position((windowWidth/2)-65, windowHeight/2);
   button.mousePressed(scarica)
}

function draw() {
  background("yellow");
  push()
  imageMode(CORNER);
  if(windowHeight/windowWidth<=sfondo2.height/sfondo2.width){                       //immagine di sfondo adattabile a dimensione
    image(sfondo2, 0, 0, windowWidth, sfondo2.height*windowWidth/sfondo2.width);
  }else{
    image(sfondo2, 0, 0, sfondo2.width*windowHeight/sfondo2.height, windowHeight);
  }
  pop()
  x = windowWidth/2
  push()
  imageMode(CENTER)
  image(ditosx, (windowWidth/3), windowHeight/2,ditosx.width*0.2, ditosx.height*0.2)
  image(ditodx, 2*windowWidth/3, windowHeight/2,ditodx.width*0.2, ditodx.height*0.2)
  image(balloon, windowWidth/7, windowHeight/5, balloon.width*0.5, balloon.height*0.5)
  image(balloon, 6*windowWidth/7, windowHeight/5, balloon.width*0.5, balloon.height*0.5)
  image(balloon, windowWidth/7, 4*windowHeight/5, balloon.width*0.5, balloon.height*0.5)
  image(balloon, 6*windowWidth/7, 4*windowHeight/5, balloon.width*0.5, balloon.height*0.5)
  let textx = x + random(-2, 2);
  textFont("EB Garamond");
  textSize(50);
  textAlign(CENTER, TOP);
  fill("blue");
  text("Comliment1! Sei il 10.000.000 v1sitatore!!!",windowWidth/2, windowHeight/3);
  text("Hai v1nto grande premio!!", textx, (2*windowHeight/3)+random(-2, 2))
  pop()
}

function scarica(){
  immagine.save('Ranabox', 'png')
}
