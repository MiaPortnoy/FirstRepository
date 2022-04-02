var box;
function setup() {
  createCanvas(1000,2500);
  box = createSprite(300, 300, 40, 80);
  box.shapeColor = "pink"
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5;
  }
drawSprites();
}




