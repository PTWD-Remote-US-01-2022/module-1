const context = document.querySelector("canvas").getContext("2d");

let speed1 = 1;
let speed2 = 2;
let speed3 = 3;

function drawRectangle(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

function clearCanvas(){
    context.clearRect(0, 0, 300, 300);
}

function updateCanvas(){

    // these are the "y" axis of rectangles
    // since rectangle moves from top to bottom (y needs to change)
    speed1 += 1;
    speed2 += 2;
    speed3 += 3;

    clearCanvas();

    drawRectangle(50, speed1, 50, 50, "blue");
    drawRectangle(150, speed2, 50, 50, "green");
    drawRectangle(250, speed3, 50, 50, "yellow");

    // 1
    setTimeout(updateCanvas, 30);

    // 2
    // requestAnimationFrame(updateCanvas);

    // 3
    // setInterval(updateCanvas, 14000 / 60);
}

updateCanvas();

