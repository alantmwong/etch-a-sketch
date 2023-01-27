/* Etch-a-Sketch 
Author: Alan Wong
Date: 26/01/2023

*/

// Setting up the container for the grid
const container = document.querySelector(".container");
container.style.width = "640px"
container.style.height = "640px"

// makeGrid function inputs the number or rows and columns for the grid
// and makes a grid of squares. 
makeGrid = (rows, cols) => {
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let div = document.createElement("div");
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.outline = "1px";
            div.style.outlineColor = "black";
            div.style.outlineStyle = "solid";
            div.className = "box";
            container.appendChild(div);
        }
    }
}

makeGrid(16, 16);

// hover turns squares black and leaves a trail behind the mouse. 

function hoverDiv(e){
    e.target.style.background = "black";
}

const box = document.querySelector("div");
box.addEventListener("mouseover", (e) => hoverDiv(e));

// adding the function to change amount of squares in the same area grid
const button = document.querySelector("button");

button.addEventListener("click", function inputGridSize() {
    gridSize = prompt("Please enter grid size");
    const boxes = document.getElementsByClassName("box");
    while(boxes.length > 0) {
        boxes[0].parentNode.removeChild(boxes[0]);
    }
    makeGrid(gridSize, gridSize);
});

