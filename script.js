/* Etch-a-Sketch 
Author: Alan Wong
Date: 26/01/2023

*/

// Setting up the container for the grid
const container = document.querySelector(".container");
container.style.width = "640px"
container.style.height = "640px"

// makeGrid function makes 
makeGrid = (rows, cols) => {
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let div = document.createElement("div");
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.background = "white";
            div.style.outline = "1px";
            div.style.outlineColor = "black";
            div.style.outlineStyle = "solid";
            div.className = "box";
            container.appendChild(div);
        }
    }
}

makeGrid(16, 16);