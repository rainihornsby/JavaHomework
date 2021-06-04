export default function BrickCreation (level, bricks, canvas, brick){
   brick.width = canvas.width / 5 - 1;
    // empty array for new bricks
   let newbricks = [];
   if(!bricks){
    //    returning empty array of bricks
       return [];
   } 
    // if all levels are filled
   if (bricks.length >= 5 * level){
       return;
   }
   
//    console.log(brick.x)

   // for loop for formation of the bricks
   for (let i = 0; i < 5 * level; i++){
       let newBrick = new SingleBrick(
           brick.x + brick.width,
           brick.y,
           brick.width,
           brick.height,
           brick.colors,
       );
       newbricks.push(newBrick);
       brick.x += brick.width + 1;
       if(brick.x + brick.width >= canvas.width){
           brick.x = 0.5;
           brick.y += brick.height + 1;
       }
   }
   console.log(newbricks)
   return newbricks;
}

class SingleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.colors = c;
        this.broke = false;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.broke ? "skyblue" : this.colors[1];
        ctx.strokeStyle = this.broke ? "skyblue" : "skyblue";
        // stroke of ball and brick when broken
        ctx.lineWidth = 1;
        ctx.fillStyle = this.broke ? "skyblue" : this.colors[1];
        ctx.shadowBlur = 0;
        ctx.shadowColor = "blue";
        ctx.strokeStyle = this.broke ? "rgb(42, 1, 80)" : "transparent";
        ctx.fill();
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
    }
}
