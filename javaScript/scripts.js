const containerDimention = 960;
let button = document.getElementById("buttonId");
button.addEventListener("click", (event) => {
    let squaresCount = Number(prompt("Please set number of squares between 0 and 100."));
    if(squaresCount > 0 && squaresCount < 100){
        clearContainer();
        createGrid(Number(squaresCount));
    } else {
       //  clearContainer();
         alert("Wrong number of squares. Please try again.");
    }
})

//create matrix count x count
function createGrid(count) {
    let container = document.getElementById("containerId");
    let cellWidth = Math.round((containerDimention/count)) - 2*count;
    for(let i = 0; i < count; i++){
        let horizontaDiv = createHorizontaDiv(i, cellWidth);
        //create div cells and set into horizontal div
        for(let cellId = 0; cellId < count; cellId++){
            let cell = createDivCell(`${i}${cellId}`, cellWidth, cellWidth);
            horizontaDiv.appendChild(cell);
        }
        container.appendChild(horizontaDiv);
    }
}

//create div cell of matrix
function createDivCell(id, width, heigth){
    let cell =  document.createElement("div");
     cell.classList.add("cell");
     cell.style.width = width;
     cell.style.heigth = heigth;
     cell.setAttribute("id", `div${id}Id`);
     return cell;
}

//create line div that will contain div cells of 1 line (such as array)
function createHorizontaDiv(id, heigth){
     let horizontaDiv = document.createElement("div");
        horizontaDiv.classList.add("horizontalContainer");
        horizontaDiv.style.heigth = heigth;
        horizontaDiv.setAttribute("id", `horizontalDiv${id}Id`);
        return horizontaDiv;
}

function clearContainer(){
      let container = document.getElementById("containerId");
      while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

//initial creation of matrix
//createGrid(16);