
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,100,400,50);
    
	bob1 = new Bobs(250,600,40);
	bob2 = new Bobs(330,600,40);
	bob3 = new Bobs(410,600,40);
	bob4 = new Bobs(490,600,40);
	bob5 = new Bobs(570,600,40);

	line1 = new Lines(bob1.body,{x:250,y:125});
	line2 = new Lines(bob2.body,{x:330,y:125});
	line3 = new Lines(bob3.body,{x:410,y:125});
	line4 = new Lines(bob4.body,{x:490,y:125});
	line5 = new Lines(bob5.body,{x:570,y:125});
	Engine.run(engine);
  
}


function draw() {
  
  background(225);
  
  roof.display();
   
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  
  keyPressed();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
 
}



function keyPressed(){
	 if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-100});
		 } 
		}
