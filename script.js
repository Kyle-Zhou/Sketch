var container = document.querySelector("#container");
var clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clear);
container.style.setProperty('--coloumNumber', 16);
var slider = document.getElementById("myRange");


function createGrid(numRows) {
    container.style.setProperty('--coloumNumber', numRows);
    for (let i = 0; i < numRows * numRows; i++) {
        var div = document.createElement("div");
        div.className = "cell"
        div.addEventListener("mouseover", colour);
        container.appendChild(div);
    }
}

slider.oninput = function() {
    while (container.firstChild){ //clear grid
        container.removeChild(container.lastChild);
    }

    var numRows = this.value;
    createGrid(numRows);
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


