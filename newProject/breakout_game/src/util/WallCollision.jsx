const WallCollision =(ballObj, canvas, player, paddleProps, setLives) =>{
    // statement saying when the 'ball' hit the bottom, lose 1 life
    if(ballObj.y + ballObj.rad > canvas.height)
        {
        player.lives--;
        // this is what makes it return to the paddle if it hits the bottom edge
        ballObj.x = paddleProps.x;
        // the - 20 is so it starts closer to the paddles top edge
        ballObj.y = paddleProps.y - 20;
        // angle and speed
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        // controls the speed when the ball resets onto the paddle after hitting the ground
        ballObj.dy = -6;
    }
    // collision for ceiling and floor
    if ( ballObj.y - ballObj.rad < 0)
        {
            ballObj.dy *= -1
    }
    // collision for left and right walls
    if (ballObj.x - ballObj.rad < 0 ||
        ballObj.x + ballObj.rad > canvas.width)
            {
            ballObj.dx *= -1
        }
}

export default WallCollision;