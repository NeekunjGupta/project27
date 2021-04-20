class Bobs{
    constructor(x,y,radius){
     var options = { 
      isStatic : true
     
     }
     this.body = Bodies.circle(x,y,radius-20/2,options);
     this.radius  = radius;
     
     World.add(world,this.body)
    }

  display()
{
  fill("purple");
   var pose = this.body.position
   var angle = this.body.angle
   push()
   translate(pose.x,pose.y)
   rotate(angle)
   ellipseMode(RADIUS)
   ellipse(0,0,this.radius,this.radius); 
   pop();
}
}
