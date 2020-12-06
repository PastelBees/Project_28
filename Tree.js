class Tree {
    constructor(x, y, height,width) {
 
      this.width =width;
      this.height = height;
      this.x =x;
      this.y = y;
  
      this.tree=loadImage("sprites/tree.png")
      
      
    }
    display(){
      image(this.tree, 530,60, 570,570)

    }
  };
  