export default function BrickCollision(circle, rect){
    // Math absolute of X and Y.A static method of math that returns the absolute value of a number.
    // for left and right
    var distX = Math.abs(circle.x - rect.x - rect.width / 2);
    var distY = Math.abs(circle.y - rect.y - rect.height / 2);

    if (distX > rect.width / 2 + circle.rad) {
        return {
            hit: false,
        };
    }

    if (distY > rect.height / 2 + circle.rad){
        return{
            hit:false
        };
    }

    // this being set to false makes it so that the ball does not hit the bottom
    if (distX <= rect.width / 2){
        return {
            hit: true,
            axis: "Y",
        };
    }

    if (distY <= rect.height / 2) {
        return {
            hit: true,
            axis: "X",
        };
    }

    // testing for edge and corner collision
    var dx = distX - rect.width / 2;
    var dy = distY - rect.height / 2;
    return {
        hit: dx * dx + dy * dy <= circle.rad * circle.rad,
        axis: "X",
    };
}