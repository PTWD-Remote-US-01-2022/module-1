

const canvas = document.getElementById("canvas-example-2");
const context = canvas.getContext("2d");

// draw rectangle

function drawRect(){
    context.fillStyle = "#99FF99";
    context.fillRect(220, 220, 40, 40);
}

drawRect()


// draw text
context.fillStyle = "red";
context.font = "15px monospace";
context.fillText("PTWD Jan 2022 is the best!", 35, 50);

// draw paths

// step 1: beginPath()
context.beginPath();

// step 2: start position -> movePath(x, y);
context.moveTo(50, 80);

// step 3: end position -> lineTo(x, y)
context.lineTo(220, 80);

// step 4: actually drawing the line -> stroke()
context.stroke();

// context.fill()

// step 5: closePath()
context.closePath();


// draw circle

// step 1: beginPath()
context.beginPath();

context.strokeStyle = "orange";
context.lineWidth = 7;

// step 2: arc()
context.arc(150, 150, 50, 0, 6.29)

// step 3: stroke()

context.stroke()

// step x: closePath()
context.closePath();

// create smaller circle in the middle of the bigger one

context.beginPath();
context.arc(150, 150, 30, 0, 3.14)
context.strokeStyle = "purple";
context.stroke()

// step x: closePath()
context.closePath();