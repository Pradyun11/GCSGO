var delmo,swift,montra;
var wall1,wall2;
var crash1,crash2,crash3;
var deformation;
var carWeight1 ,carSpeed1;
var carWeight2 ,carSpeed2;
var carWeight3 ,carSpeed3;
var invisibleWall1,invisibleWall2,invisibleWall3;



function setup() {
  createCanvas(1200,600);
  delmo = createSprite(100,100,20,20);
  delmo.shapeColor = "white";
 
  swift = createSprite(100,300,20,20);
  swift.shapeColor = "white";

  montra = createSprite(100, 500,20,20);
  montra.shapeColor = "white";

  wall1 = createSprite(600, 200,1200,10);
  wall1.shapeColor = "blue";

  wall2 = createSprite(600, 400,1200,10);
  wall2.shapeColor = "blue";

  crash1 = createSprite(1000, 100,20,80);
  crash1.shapeColor = "orange";

  crash2 = createSprite(1000, 300,20,80);
  crash2.shapeColor = "orange";

  crash3 = createSprite(1000, 500,20,80);
  crash3.shapeColor = "orange";

  carWeight1 = random(900,3500);
  carSpeed1 = random(30,70);

  carWeight2 = random(900,3500);
  carSpeed2 = random(30,70);

  carWeight3 = random(900,3500);
  carSpeed3 = random(30,70);

  invisibleWall1 = createSprite(1000,100,15,80);
  invisibleWall1.visible = false;

  invisibleWall2 = createSprite(1000,300,15,80);
  invisibleWall2.visible = false;

  invisibleWall3 = createSprite(1000,500,15,80);
  invisibleWall3.visible = false;
}

function draw() {
  background(0,0,0);  

  
  delmo.collide(invisibleWall1);
  swift.collide(invisibleWall2);
  montra.collide(invisibleWall3);

  if (keyDown("1")) {
   delmo.velocityX = carSpeed1;
  }

  if (keyDown("2")) {
    swift.velocityX = carSpeed2;
  }

  if (keyDown("3")) {
    montra.velocityX = carSpeed3;
  }

  
  if (isTouching(delmo,crash1) ) {
    checkDeformation(delmo,carWeight1,carSpeed1);
  } 

  if (isTouching(swift,crash2) ) {
    checkDeformation(swift,carWeight2,carSpeed2);
  } 

  if (isTouching(montra,crash3) ) {
    checkDeformation(montra,carWeight3,carSpeed3);
  } 

  
    
  drawSprites();
}
function checkDeformation(car,weight,speed){

  car.velocityX = 0;

  deformation = 0.5*weight*speed*speed/22500;

  console.log(deformation);

  if (deformation>180) {
    car.shapeColor= "red";
  } 
   if (deformation<60) {
    car.shapeColor = "green";
  }
  if(deformation>60 && deformation<180){
    car.shapeColor = "yellow";
  }
}




  

