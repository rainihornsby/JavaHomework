export default function PlayerStats(ctx, player, canvas) {
    // player name
    ctx.font = "1em Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Name: ${player.name}`, 20, 30);

    // player lives
    ctx.font = "1em Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
        ctx.fillText("❤", canvas.width / 2 + gap, 30);
        gap += 30;
    }

    // player score
    ctx.font = "1em Arial";
    ctx.fillStyle = "white"
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}