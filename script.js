var container = document.querySelector("#container");
var clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clear);

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

function clear(){
    var divs = document.getElementsByClassName("cell");
    for (div of divs){
        div.style.backgroundColor = "#fff2e6";
    }
}

createGrid(16);


