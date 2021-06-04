import data from '../gameInterface/data';
import ResetBall from './ResetBall'
export default function AllBroken(bricks, player, canvas, ballObj){
    let { brickObj, paddleProps } = data
    let total = 0;
    for (let i = 0; i < bricks.length; i++){
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        alert("Round Completed :D");
        player.level++;
        // ballObj.y = canvas.height - 20;
        // ball resets from the peddle when round in cleared
        ResetBall(ballObj, canvas, paddleProps)
        // this will keep the bricks from moving down each round
        brickObj.y = 50
    }
}