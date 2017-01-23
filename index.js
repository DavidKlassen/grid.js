const maxX = 8;
const maxY = 7;

for (let x = 1, y = 1, dx = 1, dy = -1; x <= maxX || y <= maxY; x += dx, y += dy) {
    if (x > 0 && y > 0 && x <= maxX && y <= maxY) {
        console.log(`(${x};${y})`);
    } else {
        dx *= -1; dy *= -1;
        if (x > maxX || x === 0 && y <= maxY) {
            y++;
        } else {
            x++;
        }
    }
}
