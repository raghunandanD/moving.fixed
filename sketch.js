var moving,fixed;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "purple";
  moving = createSprite(300,200,50,50);
  moving.shapeColor = "yellow";

}

function draw() {
  background(0);  
  drawSprites();
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 &&
    fixed.x - moving.x <= moving.width/2 + fixed.width/2 && 
    moving.y - fixed.y <= moving.width/2 + fixed.width/2 &&
    fixed.y - moving.y <= moving.width/2 + fixed.width/2){
   fixed.shapeColor = "white";
   moving.shapeColor = "green";

  }
else{
fixed.shapeColor = "purple";
moving.shapeColor = "yellow";
}

}