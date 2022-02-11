

const context = document.querySelector("canvas").getContext("2d");

// .save(), .restore()

function drawRect(x, y, w, h,color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

drawRect(10, 20, 30, 30, "blue");
context.save();

drawRect(50, 70, 30, 30, "orange");
context.save();

drawRect(120, 150, 30, 30, "green");

context.restore();
drawRect(200, 70, 30, 30);

context.restore();
drawRect(250, 20, 30, 30);

