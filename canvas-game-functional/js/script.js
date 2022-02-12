
// start
// background
// player(s)
// obstacle(s)
// score
    //  lives
// end

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let score = 0;


function drawBackground(){
    context.fillStyle = "pink";

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "green";
    context.font = "25px Arial";
    context.fillText(`Score: ${score}`, 800, 50);
    context.fillText(`Lives: ${superman.lives}`, 800, 80);
}

// drawBackground()


const superman = {
    x: 0,
    y: 200,
    width: 150,
    height: 150,
    lives: 3,
    img: new Image(),
    immunity: false
}

// images are always linked like from index.html
superman.img.src = "./images/superman.png";

// superman.img.addEventListener("load", () => {
//     context.drawImage(
//         superman.img, 
//         superman.x,
//         superman.y,
//         superman.width,
//         superman.height    
//         )
// })

const fireball = {
    x: 800,
    y: 200,
    width: 70,
    height: 70,
    img: new Image()
}

// images are always linked like from index.html
fireball.img.src = "./images/fireball.png";

// fireball.img.addEventListener("load", () => {
//     context.drawImage(
//         fireball.img, 
//         fireball.x,
//         fireball.y,
//         fireball.width,
//         fireball.height    
//     )
// })

function drawEverything(){
    drawBackground();

    context.drawImage(
        superman.img, 
        superman.x,
        superman.y,
        superman.width,
        superman.height    
    )

    context.drawImage(
        fireball.img, 
        fireball.x,
        fireball.y,
        fireball.width,
        fireball.height    
    )

    if(didCollide(superman, fireball)){
        // alert("Collision!!!")
        if(superman.lives === 0){
            // alert("GAME OVER!");

            gameOver();
        }
    }
}

// updateCanvas
function drawingLoop(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawEverything();
    

    fireball.x -= 5;

    if (fireball.x + fireball.width < 0){
        resetFireball();
    }

    if(superman.lives > 0){
        requestAnimationFrame(drawingLoop);
    }

    // setTimeout(drawingLoop, 20);
}

// player movement

document.addEventListener("keydown", (event) => {
    // console.log(event.code);

    switch(event.code){
 
        case "ArrowRight":
        case "KeyD":
            superman.x += 10;
            break;
        case "ArrowLeft": 
        case "KeyA":   
            if(superman.x > 0) superman.x -= 10;
            break;
        case "ArrowUp":
        case "KeyW":
            superman.y -= 10;
            break;
        case "ArrowDown":
        case "KeyS":    
            superman.y += 10;
            break;
        default:
            console.log("You are not using arrow keys!");
    }
})

function didCollide(superman, fireball){
    if(
        // right (case 1)
        superman.x + superman.width - 20 < fireball.x ||
        // left (case 3)
        superman.x > fireball.x + fireball.width ||
        // bottom (case 4)
        fireball.y > superman.y + superman.height ||         
        // top (case 2)
        superman.y > fireball.y + fireball.height
    ) {

        if(fireball.x === 0){
            score++;
        }
        return false;
    } else {

        if(superman.immunity === false){
            superman.lives -=1;
            switchImmunity();
            resetFireball();
        }

        return true;
    }
}

function resetFireball(){
    fireball.x = canvas.width;
    fireball.y = Math.random() * (canvas.height - fireball.height);
}

function switchImmunity(){
    superman.immunity = true;

    setTimeout(() => {
        superman.immunity = false;
    }, 1000);
}

function gameOver(){

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    const tiredSuperman = {
        x: 400,
        y: 250,
        width: 150,
        height: 150,
        img: new Image(),
    }
    tiredSuperman.img.src = "./images/tired-superman.png";

    tiredSuperman.img.addEventListener("load", () => {
        context.drawImage(
            tiredSuperman.img, 
            tiredSuperman.x,
            tiredSuperman.y,
            tiredSuperman.width,
            tiredSuperman.height
        )
    })

    context.font = "70px Arial";
    context.fillStyle = "red";
    context.fillText("GAME OVER!", 300, 200);
}



drawingLoop()

