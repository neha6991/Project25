
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,450,70);
	ground = new Ground(800,height,1600,20)
	box1 = new Dustbin(1200,620,120,150);
    //box2 = new Dustbin(650,610,20,120);
	//box3 = new Dustbin(750,610,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper1.display();
  box1.display();
  //box2.display();
  //box3.display();
  ground.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
	}
}

