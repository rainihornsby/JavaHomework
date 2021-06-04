export default function PaddleHit(ballObj, paddleProps){
    if (
        // < less than, > greater than
        ballObj.x < paddleProps.x + paddleProps.width &&
        ballObj.x > paddleProps.x &&
        paddleProps.y < paddleProps.y + paddleProps.height &&
        ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
    ) {
        // check where the ballObj hit the paddleProps
        let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2);

        // normalize the values
        collidePoint = collidePoint / (paddleProps.width / 2);

        // calculate the angle of the ballObj
        let angle = (collidePoint * Math.PI) / 3;
        // console.log(angle);

        // The Math.sin() method returns a numeric value between -1 and 1, which represents the sine (Sine = Opposite(opposite angles) / Hypotenuse) of the angle given in radians.
        // controls the angle of which the 'ball' bouces off of the paddle
        // without this one, the ball will bouce in only the angle according to the direction it's going
        ballObj.dx = ballObj.speed * Math.sin(angle);
        // The Math.cos() method returns a numeric value between -1 and 1, which represents the cosine(Cosine = Adjacent(next to)/ Hypotenuse) of the angle.
        // without this it will bouce 'down' not 'up', hitting the ground and making you lose a life
        ballObj.dy = -ballObj.speed * Math.cos(angle);
    }
}