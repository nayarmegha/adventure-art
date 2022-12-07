let crown;

function preload() {
    crown = createImg("crown.png", "born")
    crown.addClass("img")
}
    
    function setup() {
      createCanvas(windowWidth, windowHeight);
      fill(255)
      text("Drag your mouse and/or press and drag it to draw your grafitti", 10, 30)
    }
    
    function draw() {
   
      if (mouseIsPressed) {
        fill("rgb(184,24,24)");
        textSize(10)
        textStyle(BOLD)
        crown.show();
        crown.position(mouseX,mouseY)
        text("1/2", mouseX, mouseY)

      } else {
        noStroke()
        fill(255);
          ellipse(mouseX, mouseY, 5, 5);
    
      }
    }