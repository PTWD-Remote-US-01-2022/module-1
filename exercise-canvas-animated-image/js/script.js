

const context = document.querySelector("canvas").getContext("2d");

const moveImageBtn = document.querySelector("button");


// image properties: x, y, w, h
// created new image tag
// added source to the newly created image tag

const imageObject = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    img: new Image()
}

imageObject.img.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F10%2F19%2Fseljalandsfoss-iceland-1-WATERFALLS1021.jpg";

imageObject.img.addEventListener("load", () => {
    context.drawImage(
        imageObject.img,
        200,
        0,
        100,
        100
    )
})

// const anyImage = new Image();
// anyImage.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F10%2F19%2Fseljalandsfoss-iceland-1-WATERFALLS1021.jpg";

// anyImage.addEventListener("load", () => {
//     context.drawImage(anyImage, 0, 0, 200, 200)
// })

let dx = 3;

function moveImg(){
    context.clearRect(0, 0, 200, 200);

    imageObject.x += dx;

    context.drawImage(
        imageObject.img,
        imageObject.x,
        imageObject.y,
        imageObject.width,
        imageObject.height
    )

    // the following is just to have image bounce from 0 to 200 (till the next image)
    if (imageObject.x + imageObject.width > 200 || imageObject.x < 0){
        dx = -dx;
    }

    context.fillStyle = "red";
    context.font = "15px Arial";
    context.fillText("This is some text", 90, 170);
    
    setTimeout(moveImg, 30);
}

moveImageBtn.addEventListener("click", () => moveImg());

