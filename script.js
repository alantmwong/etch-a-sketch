const container = document.querySelector(".container");

makeGrid = () => {
    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let div = document.createElement("div");
            div.style.width = "10px";
            div.style.height = "10px";
            container.appendChild(div);
        }
    }
}

makeGrid();