var car,wall;
var speed,weight,rating;
var deformation;
var state="pre";

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car = createSprite(50,200,50,50);
}

function draw() {
  background("black");  

  if(state==="pre") {
    textSize(20);
    fill("white");

   

    if(keyDown("space")) {
      state="running";
    }
  }

  if(state==="running") {
    weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    car.velocityX = speed;

  if(wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityX=0;
    deformation = Math.round(0.5*weight*speed*speed/22500);
     
    

  (state==="end") 

   

    
  }

  drawSprites();
}


function reset() {
  state="pre";
  car.x=50;
  car.shapeColor=color(127,127,127);

