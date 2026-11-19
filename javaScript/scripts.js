
let button = document.getElementById("buttonId");
let opacity = 10;

button.addEventListener("click", (event) => {
    let squaresCount = Number(prompt("Please set number of squares between 0 and 100."));
    if(squaresCount > 0 && squaresCount < 100){
        clearContainer();
        createGrid(Number(squaresCount));
    } else {
         alert("Wrong number of squares. Please try again.");
    }
})

//create matrix count x count
function createGrid(count) {
    let container = document.getElementById("containerId");
    //increase of opacity of cells after each interaction
    increaseOpacity();
    for(let i = 0; i < count; i++){
        let horizontaDiv = createHorizontaDiv(i);
        //create div cells and set into horizontal div
        for(let cellId = 0; cellId < count; cellId++){
            let cell = createDivCell(`${i}${cellId}`);
            horizontaDiv.appendChild(cell);
        }
        container.appendChild(horizontaDiv);
    }
}

function increaseOpacity(){
   opacity = opacity <= 90  ? opacity + 10 : 100;
}

//create div cell of matrix
function createDivCell(id){
    let cell =  document.createElement("div");
     cell.classList.add("cell");
     cell.setAttribute("id", `div${id}Id`);
     cell.style.opacity = `${opacity}%`;
     return cell;
}

//create line div that will contain div cells of 1 line (such as array)
function createHorizontaDiv(id){
     let horizontaDiv = document.createElement("div");
        horizontaDiv.classList.add("horizontalContainer");
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
createGrid(16);