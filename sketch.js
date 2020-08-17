
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var imageh;
function preload()
{
	imageh = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball = new Ball(100,10,40)
     box1 = new Box(600,650,150,20);
     box2 = new Box(525,560,20,200);
     box3 = new Box(675,560,20,200);

     groundSprite=createSprite(width/2, height-35, width,10);
     groundSprite.shapeColor=color(255)
   
   
     
   
    
     
   
     //Create a Ground
     ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
      World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  

  ball.display();
  box1.display();
  box2.display();
  box3.display();

  image (imageh,600,560,170,200);
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:16,y:-17});
  }
}

