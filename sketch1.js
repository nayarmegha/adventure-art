let sourceText = "Enter the world of Jean-Michel Basquiat";
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}
function draw() {
    background("rgb(245,245,222)");  fill(255);
  textSize(16);
  fill(0)
  textAlign(CENTER, CENTER);
  let middle = sourceText.length / 2;
  let left = middle - ((mouseX / width) * middle);
  let right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}