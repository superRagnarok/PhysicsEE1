const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }
    

    ground = Bodies.rectangle(200,380,400,50,options);
    var options_1 ={
        restitution: 0.8
}
    ball = Bodies.circle(200,200,40,options_1);
    World.add(world,ground);
    World.add(world,ball);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);

    
}