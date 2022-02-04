window.addEventListener("load", () => {
    console.log("Scripts Loaded!!");
});

// const gameDiv = document.getElementById("game-info");
const gameDiv = document.querySelector("#game-info");
// when using querySelectors, you have to pass the name of what your looking for in the same format that you would use for your css selectors

console.log({ gameDiv: gameDiv.children[0] });

// const theMainHeader = document.getElementsByTagName("h1");
const theMainHeader = document.querySelector("h1");

console.log({ theMainHeader: theMainHeader.innerHTML });

theMainHeader.style.color = "orange";
// theMainHeader.style.fontSize = "50px";
// theMainHeader.className = "makeBig";
// theMainHeader.classList.toggle('makeTiny');
theMainHeader.innerHTML = "Changing the Header";

const upScore = document.querySelector("#increase-score");
const resetScore = document.querySelector("#reset-score");
const theScore = document.querySelector("#score");

upScore.addEventListener("click", () => {
    console.log({ scoreType: typeof theScore.innerHTML });
    theScore.innerHTML = Number(theScore.innerHTML) + 1;
});

resetScore.addEventListener("click", () => {
    theScore.innerHTML = 0;
    theMainHeader.classList.toggle("makeTiny");
});

// const listItems = document.getElementsByClassName("listItem");
const listItems = document.querySelectorAll(".listItem");
// when using querySelector you only get the first instance the the target your searching for. Use querySelectorAll to get all matching instances of the target.

console.log({ listItems });

// ================== creating content ==================

const contentDiv = document.querySelector("#content");

console.log({ contentDiv });

const contentToAdd = document.createElement("div");
contentToAdd.className = "content-div";
// use backticks when adding content to innerHTML after you create an element in order to add html structured elements to it;
contentToAdd.innerHTML = `
    <h2>Sub Header</h2>
    <ul>
        <li>Content 1</li>
        <li>Content 2</li>
        <li>Content 3</li>
    </ul>
`;

contentDiv.appendChild(contentToAdd);

const gameInfoList = document.querySelector("#game-info");

console.log({ gameInfoList: gameInfoList.children[1].children[1].innerHTML });

gameInfoList.children[1].children[1].innerHTML =
    "This is the second element in the list of game info div";

console.log({ blahness: gameInfoList.children[1].children });
[...gameInfoList.children[1].children].forEach((child, index) => {
    console.log({ child });
    child.innerHTML = `This child number ${index + 1} in the list`;
});
