class Monster extends Base {
	constructor(x,y){
		  super(x,y,300,300);
		  this.image = loadImage("monster.png");
		  this.Visiblity = 255;
	  }
	  display()
	  {
		  if(this.body.speed < 5){
			  super.display();
			 }
			 else{
			   World.remove(world, this.body);
			   push();
			   this.Visiblity = this.Visiblity - 5;
			   tint(255,this.Visiblity);
			   image(this.image, this.body.position.x, this.body.position.y, 300, 300);
			   pop();
			 }
		
	  }
  
  }