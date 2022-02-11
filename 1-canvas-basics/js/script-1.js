

function moveRect(x, y){

    const canvas = document.getElementById("canvas-example");
    const context = canvas.getContext("2d");
    
    // const context = document.getElementById("canvas-example").getContext("2d");
    
    // console.log(context);
    // canvas.width = 300; canvas.height = 300;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "blue";
    
    // context.fillRect(x, y, width, height);
    context.fillRect(x, y, 50, 60);

    x += 3;

    if( x % 10 === 0 ){
        y += 15;
    }

    setTimeout(() => moveRect(x, y), 30);
}
