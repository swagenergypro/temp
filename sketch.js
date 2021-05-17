const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world


function setup() {
  createCanvas(400,430);
  
  engine = Engine.create();
  world = engine.world;
  
  var ground_options ={
    isStatic: true
  }

   var ball_options = {
     restitution : 1.5
   }
  ground = Bodies.rectangle(200,399,400,2,ground_options)
  ball = Bodies.circle(200,299,20, ball_options) 
  
  World.add(world,ball)
  //object = Bodies.rectangle(200,200,50,50)
  //World.add(world,object)
  World.add(world,ground)
  //console.log(object)
  
  console.log(ball)
}


function draw() {
  background(0);  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  //rectMode(CENTER)
  //rect(object.position.x,object.position.y,50,50) 

}

