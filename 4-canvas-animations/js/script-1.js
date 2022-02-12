const context = document.querySelector("canvas").getContext("2d");

const moveButton = document.querySelector("button");
const stopButton = document.querySelector("#stop");


// http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2f2a738f24664f9.png

// const fireballX = 0;
// const fireballY = 0;
// const fireballWidth = 100;
// const fireballHeight = 50;
// const fireballImg = new Image();
// fireballImg.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2f2a738f24664f9.png";

const fireball = {
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    img: new Image()
}

fireball.img.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2f2a738f24664f9.png";

let timeoutId;


function draw(){

    context.clearRect(0, 0, 500, 200);

    context.drawImage(
        fireball.img, 
        fireball.x,
        fireball.y,
        fireball.width,
        fireball.height
    );

    fireball.x += 4;


    timeoutId = setTimeout(draw, 20);
}

fireball.img.addEventListener("load", () => {
    moveButton.addEventListener("click", () => draw());

    stopButton.addEventListener("click", () => clearTimeout(timeoutId));

})
