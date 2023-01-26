const container = document.querySelector(".container");
container.style.width = "640px"
container.style.height = "640px"

makeGrid = () => {
    for(let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
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

makeGrid();