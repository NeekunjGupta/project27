class Lines{ 
    constructor(bodyA,pointB){
         var option={ 
             bodyA:bodyA, pointB:pointB, stiffness:0.04, length:200 }
              this.pointB=pointB;
               this.rope=Constraint.create(option);
                World.add(world,this.rope); 
            }
             display(){ 
                 var pointA = this.rope.bodyA.position;
                  var pointB = this.pointB;
                   strokeWeight(5);
                    line(pointA.x,pointA.y,pointB.x,pointB.y); 
                }
             }