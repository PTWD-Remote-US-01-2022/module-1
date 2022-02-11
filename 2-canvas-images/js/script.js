


const context = document.querySelector("canvas").getContext("2d");

const natureImg = new Image();

// console.log(natureImg);


// although we are in the js/script.js file
// we HAVE TO link images as if we were in the index.html file
// that's why we don't put "../images/nature.jpeg"
// but instead we put only one dot because index.html and images are on the same level
// in folder structure
natureImg.src = "./images/nature.jpeg";

natureImg.addEventListener("load", () => {
    // context.drawImage(which image, x, y, imageWidth, imageHeight);
    context.drawImage(natureImg, 10, 30, 260, 160);
});


// ALWAYS choose transparent images

// Google Images > Tools > Color > Transparent
