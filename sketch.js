var ball;
var radius=40;

let engine;
let world;

var groundObj, rightSIde, leftSide;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	rectMode(CENTER);
  ellipseMode(RADIUS);
	createCanvas(1200, 600);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,590,width,20);
	rightSide = new ground(1100,520,20,120);
	leftSide = new ground(850,520,20,120);

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  
  background(51);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,20)
 
}

  function keyPressed(){

	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:70,y:-70}) 
	}
	}


