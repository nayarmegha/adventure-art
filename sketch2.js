let char;
let corpus;
let bluecrown;
let eggs;
let yellowbluecrown;
let xpos = 10;
let ypos = 10;

function preload() {
  char = loadImage('char11.png');
  corpus = loadImage('corpus.png');
  bluecrown= loadImage('bluecrown.png');
    eggs = loadImage('eggs.png');
  yellowbluecrown = loadImage('yellowbluecrown.png');

  
}
function setup() {
    createCanvas(windowWidth, windowHeight);
   
}
  
function draw() {
      background("rgb(245,245,222)");
  if(keyIsPressed){
    if (keyCode == UP_ARROW){ //keycode for up
    ypos --;
  }
  
  else if(keyCode === DOWN_ARROW){ //keycode for down

    ypos ++;

  }
   else if(keyCode === LEFT_ARROW){ //keycode for C
     xpos--;
  }
    else if(keyCode === RIGHT_ARROW){ //keycode for D
      xpos++;
  }
  }
  if ((110 <= xpos && xpos <= 200) && (80 <= ypos && ypos <= 120)){
    fill(50);
    textFont('Helvetica');
    text('Duality. Dichotomy.', 300, 250);
  }

  else if ((100 <= xpos && xpos <= 132) && (320 <= ypos && ypos <= 360)){
    fill(50);
    textFont('Helvetica');
    text('King among all kings.', 300, 250);
  }


  else if ((400 <= xpos && xpos <= 480) && (70 <= ypos && ypos <= 125)){
    fill(50);
    textFont('Helvetica');
    text('crowns/heads — perceived self-worth/marginalization, divinity/destitution, material world/the intellect.', 300, 250);
  }


  else if ((466 <= xpos && xpos <= 528) && (365 <= ypos && ypos <= 434)){
    fill(50);
    textFont('Helvetica');
    text('“I am not a black artist, I am an artist…”', 300, 250);
  }

  else if ((5 <= xpos && xpos <= 15) && (5 <= ypos && ypos <= 15)){
    fill(50);
    textFont('Helvetica');
    text('Hover over the elements on the screen or place the crowns on your head.', 100, 250);
  }

image(char, xpos, ypos, 200, 220)
image(corpus, 200, 100, 100, 120)
  image(bluecrown, 100, 200, 220, 320)
  image(eggs, 500, 400, 200, 200)
  image(yellowbluecrown, 500, 50, 100, 150)
  
}