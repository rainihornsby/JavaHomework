import React, {useRef, useEffect} from 'react';
import { BallMovement } from './BallMovement';
import data from "../../gameInterface/data"
import WallCollision  from '../../util/WallCollision'
import PaddleFunc from './Paddle';
import BrickCreation from './Brick'
import BrickCollision from '../../util/BrickCollision';
import PaddleHit from '../../util/PaddleHit';
import PlayerStats from './PlayerStats';
import AllBroken from '../../util/AllBroke';
import ResetBall from '../../util/ResetBall';

// let x = 0

let bricks = []
let {ballObj, paddleProps, brickObj, player} = data;


// functional component
export default function Board() {
    const canvasRef = useRef(null);

    useEffect(()=>{
        // callback function
    const render = () =>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // call this so that ball hit paddle
        paddleProps.y = canvas.height - 30;
        
     

        // control+space inside {} to see what properties are inside a file('data' in this case)
        
        // assign bricks
        let newBrickSet = BrickCreation(player.level, bricks, canvas ,brickObj);

        if (newBrickSet && newBrickSet.length > 0){
            bricks = newBrickSet;
        }
        // .clearRect goes at beginning of canvas function, purpose is to clear the board and THEN put stuff on it
        // CanvasRect.clearRect(x: number, y: number, w: number, h: number): void/ 0's at the beginning are so it clears the x and y axis
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        PlayerStats(ctx, player, canvas);

        // display bricks
        bricks.map((brick) => {
            return brick.draw(ctx);
        });
        // console.log(bricks)

        
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // for rectangles
        // ctx.fillStyle = 'skyblue';
        // CanvasRect.fillRect(x: number, y: number, w: number, h: number): void
        // ctx.fillRect(10, 10, 300, 100);

        // for circles
        // commented out, instead made a ball in  component
        // ctx.beginPath();
        // ctx.fillStyle = "blue";
        // // CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
        // ctx.arc(x, 75, 50, 0, 2 * Math.PI);
        // // speed
        // x+=8;
        // ctx.strokeStyle = "black";
        // ctx.strokeWidth = 4;
        // // ctx.fill() does not work when above ctx.arc()
        // ctx.fill();
        // ctx.stroke();
        // // // console.log('circle');

        // handling ball movement, function inside games/Breakball/BallMovement BallMovement
        BallMovement(ctx, ballObj);

        AllBroken(bricks, player, canvas, ballObj);

        if (player.lives === 0){
            alert("Game Over! Press ok to restart")

            player.lives = 5;
            player.level = 1;
            player.score = 0;
            ResetBall(ballObj, canvas, paddleProps);
            bricks.length = 0;
        } 
        else if (player.level === 5 + 1){
            alert("Congrats you Won! :D but you're still a loser, press ok to play again :P")

            player.lives = 5;
            player.level = 1;
            player.score = 0;
            ResetBall(ballObj, canvas, paddleProps);
            bricks.length = 0;
        }
        
        // collision, inside util/WallCollision, ball and wall collision
        WallCollision(ballObj, canvas, player, paddleProps);

        let brickCollision;

        for(let i = 0; i < bricks.length; i++) {
            brickCollision = BrickCollision(ballObj, bricks[i]);

            if (brickCollision.hit && !bricks[i].broke) {
                if (brickCollision.axis === "X") {
                    ballObj.dx *= -1;
                    bricks[i].broke = true;
                } else if (brickCollision.axis === "Y") {
                    ballObj.dy *= -1;
                    bricks[i].broke = true;
                }
                player.score += 10
            }
        }

        // paddle
        PaddleFunc(ctx, canvas, paddleProps);

        // paddle + ball collision
        PaddleHit(ballObj, paddleProps);
        

        requestAnimationFrame(render);
    }

    
     render();
     },[])

    return ( 
        // <div style={{textAlign: "center"}}>
        //     <h1 className="header">Welcome to Breakout</h1></div>
        // Canvas API- allows me to draw using javascript and the html <canvas> element
    <canvas 
        ref={canvasRef} 
        // mouse move event, - paddleProps.width / 2ish so that mouse stays in center when it moves
        onMouseMove={(event)=> (paddleProps.x = event.clientX - paddleProps.width / 2 )}
        id="canvas" 
        height="500em" 
        width={window.innerWidth - 20}
    /> 
    
    )
}


