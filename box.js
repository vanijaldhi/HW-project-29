class Box{
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'isStatic':false
        }
    this.body = Bodies.rectangle(x,y,30,30,options);
    World.add(world,this.body);
   // this.Visiblity = 255;
    }

    display(){
    //if(this.body.speed < 3){
    //this.Visiblity= 255
    //}
    //else{
       // World.remove(world, this.box);
       // push();
       // this.Visiblity = this.Visiblity - 5;
       // tint(255,this.Visiblity);
        fill ("blue");
        rectMode(CENTER);
        rect( this.body.position.x, this.body.position.y, 30, 30);
        pop();
    }
}
    // //score(){
    //   //  if(this.Visiblity<0 && this.Visiblity> - 105){
    //         score++;
    //     }
    // }
