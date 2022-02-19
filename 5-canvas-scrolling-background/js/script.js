// set up scrolling background
// the image will be using for background: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3nAVrcgNoQ8wRNnjF4reAHaEK%26pid%3DApi&f=1

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let image = new Image();

image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3nAVrcgNoQ8wRNnjF4reAHaEK%26pid%3DApi&f=1";

let i = 0;
let j = canvas.width;

// draw function

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  i--; // this is like "x"

  if (i <= -canvas.width) {
    i = canvas.width;
  }

  j--; // this is like "x"

  if (j <= -canvas.width) {
    j = canvas.width
  }

  // image going in opposite direction:

  //  i++; // this is like "x"

  // if(i >= canvas.width) {
  //   i = -canvas.width;
  // }

  // j++; // this is like "x"

  // if (j >= canvas.width) {
  //   j = -canvas.width
  // }

  context.drawImage(image, i, 0, canvas.width, canvas.height);
  context.drawImage(image, j, 0, canvas.width, canvas.height);

  let animation = requestAnimationFrame(draw);

  if (i > 500){
    cancelAnimationFrame(animation);
  }
  
}


draw()