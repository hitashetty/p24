
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sides3;
var sides2;
var side1;
var paper1;
var canvas;
var ground;

function setup() {
	canvas =createCanvas(700, 300);
	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(50,270,20);
	side1 = new sides(420,260,150,20);
	side2 = new sides(410,200,20,80);
	side3 = new sides(550,200,20,80);
	ground = new sides(1,280,700,20);
	Engine.run(engine);
}


function draw() {
 Engine.update(engine);
 background(0);
 ground.display();
 side1.display();
 side2.display();
 side3.display();
 paper1.display();
 keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:95})
	}
}