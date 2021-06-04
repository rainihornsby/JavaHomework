export function BallMovement (ctx, ballObj) {
    let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
    data.draw(ctx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
    
}

class Ball {
    constructor(x, y, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
        // console.log("Working")
    }
    // draws the 'ball' onto the canvas, need (context)ctx. for it to work
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 4;
        ctx.fill();
        ctx.stroke();
        
    }
}