var container = document.querySelector("#container");

function createGrid(numRows) {
    for (let i = 0; i < numRows * numRows; i++) {
        var div = document.createElement("div");
        div.className = "cell"
        div.addEventListener("mouseover", colour);
        container.appendChild(div);
    }
}


function colour(event){

    event.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
}

createGrid(16);


