let char;
let corpus;
let bluecrown;
let eggs;
let yellowbluecrown;
let xpos = 10;
let ypos = 10;
let myFont;
let img;
let dot;
let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let redking1;
let redking2;

let born;
let death;
let gogh;
let warhol;
let spray;
let mov;
let neoexp;
let samo;

function preload() {
  myFont = loadFont('RobotoMono-VariableFont_wght.ttf');
  char = createImg('char11.png', "char");
  corpus = createImg('corpus.png', "corpse");
  bluecrown= createImg('bluecrown.png', "bluecrown" );
  yellowbluecrown = createImg('yellobluecrown.png', "yellow");
 // img = createImg('help.png', 'help');
  dot = createImg("glow.png", "whitedot")
  dot.position(509,66)
  dot.addClass("glow")
  dot.hide()

  born = createImg("1960s.png", "born")
  death = createImg("1988.png", "death")
  warhol = createImg("warhol.png", "andy warhol")
  spray = createImg("spray.png", "wall art")
  mov = createImg("movie.png", "movie")
  neoexp = createImg("neoExp.png", "neo expressionism")
  samo =  createImg("SAMO.png", "SAMO")
  redking1 = createImg("redking2.png", "redking1")
  redking1.hide()
  redking1.addClass("img")

  a1 = createA('https://www.wikiart.org/en/jean-michel-basquiat/all-works#!#filterName:all-paintings-chronologically,resultType:masonry', 'Take me to his paintings');
  a1.addClass("a")
  a1.hide()

  a2 = createA('https://www.dazeddigital.com/art-photography/gallery/24243/3/samo-archive', 'SAMO archive');
  a2.addClass("a")
  a2.hide()

  a3 = createA('https://www.youtube.com/watch?v=foerFJqupYM', 'Sate of the Art');
  a3.addClass("a")
  a3.hide()

  a4 = createA('page3.html', 'CLICK HERE to create your own grafitti');
  a4.addClass("a")
  a4.hide()

  a5 = createA('https://www.youtube.com/watch?v=GsWZyvtX5tU', 'Watch the trailer');
  a5.addClass("a")
  a5.hide()

  a6 = createA('https://www.youtube.com/watch?v=5k0qMxpeUSI', '1985');
  a6.addClass("a")
  a6.hide()
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(myFont);
    frameRate(100)

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
  if ((200 <= xpos && xpos <= 306) && (-20 <= ypos && ypos <= 88)){
    fill(50);
    textFont(myFont);
    a1.position(200, 30);
    a1.show()
    text('Basquiat remains to be one of the most influencial artists of the modern and contemporary art period.', 300, 250);

  }

  else if ((213 <= xpos && xpos <= 263) && (320 <= ypos && ypos <= 433)){
    fill(50);
    textFont(myFont);
    text('He was known for using crown motifs, the first of which appreared in Red Kings (1981).', 370, 420);
    redking1.position(265,588)
    redking1.show();
    dot.position(550,120)
    dot.show()

  }


  else if ((442 <= xpos && xpos <= 530) && (25 <= ypos && ypos <= 120)){
    fill(50);
    textFont(myFont);
    text('Basquiat used the crown motif to convey different kinds of messages: to depict himself as king;' , 300, 250);
    text("to acknowledge the people who influence him;", 700, 270); 
   text("to portray his amibition to become great.", 700, 290);

   dot.position(480,530)
   dot.show()
  }



  else if ((5 <= xpos && xpos <= 15) && (5 <= ypos && ypos <= 15)){
    fill(50);
    textFont(myFont);

    text('You have entered the world of Jean Michel Basquiat. Use the arrowkeys in your keyboard to navigate your character.', 100, 250);
  }


  else if ((10 <= xpos && xpos <= 96) && (55 <= ypos && ypos <= 180)){
    fill(50);
    textFont(myFont);
    text('Basquiat was born in the 1960s in Brooklyn, New York, to Haitian and Puerto Rican parents.', 100, 250);
    dot.position(290,420)
    dot.show()
  }

  else if ((17 <= xpos && xpos <= 140) && (260 <= ypos && ypos <= 355)){
    fill(50);
    a2.position(100, 320)
    a2.show()
    textFont(myFont);
    text('He first gained some attention with his graffiti work under the tag "SAMO" (pronounced Same-oh). ', 370, 420);
  }

  else if ((451 <= xpos && xpos <= 550) && (198 <= ypos && ypos <= 307)){
    fill(50);
    a3.position(400, 200)
    a3.show()
    textFont(myFont);
    text('He is known for his collaborations and friendship with pop-artist Andy Warhol.', 100, 250);
  }

  else if ((382 <= xpos && xpos <= 485) && (420 <= ypos && ypos <= 520)){
    fill(50);
    a4.position(400, 480)
    a4.show()
  }
  
  else if ((850 <= xpos && xpos <= 955) && (540 <= ypos && ypos <= 680)){
    fill(50);
    text('The biographical film titled "Basquiat" tells the incredible story of the life of the young black artist.', 190, 650);
    a5.position(800, 500)
    a5.show()
  }
  
  else if ((10 <= xpos && xpos <= 100) && (552 <= ypos && ypos <= 600)){
    fill(50);
    text("Basquiat's paintings were part of the 1970s-80s Neo-Expressionist movement in art." , 190, 670);
    
  }
  else if ((226 <= xpos && xpos <= 310) && (510 <= ypos && ypos <= 700)){
    fill(50);
    a6.position(386,604)
    a6.show()    
  }

  else if ((629 <= xpos && xpos <= 773) && (464 <= ypos && ypos <= 578)){
    fill(50);
    text("He died of an accidental drug overdose in 1988 at just 27 years old," , 370, 225);
    text("but not before leaving behind art that would inspire people all over the world.", 370, 240);
  }


  char.position(xpos,ypos)
  char.addClass("img")
  
  corpus.position(250,10)  
  corpus.addClass("img")
 
  bluecrown.position(240,350) 
  bluecrown.addClass("img")


  yellowbluecrown.position(500,50);
  yellowbluecrown.addClass('img');

  born.position(50, 90)
  born.addClass('img');

  death.position(700, 500)
  death.addClass('img');

  warhol.position(500,250)
  warhol.addClass('img');

  spray.position(460, 450)
  spray.addClass('img');

  mov.position(900, 600)
  mov.addClass('img');

  neoexp.position(50, 600)
  neoexp.addClass('img');

  samo.position(80, 300)
  samo.addClass("img")


  
}