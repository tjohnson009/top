let DOM_ELEMENTS = {
    container: document.querySelector('.container'), 
    div: '<div class="cell"></div>', 
    gridInput: document.querySelector('#grid-size'), 
    gridLabel: document.querySelector('#grid-label'), 
    colorInput: document.querySelector('#color'), 
    color: `#3f3d44`, 
    
}

let size = 15; 

function createDivs() {
    for (let i=0; i < size**2; i++) {
        // create size^2 number of identical divs
        DOM_ELEMENTS.container.insertAdjacentHTML("afterbegin", DOM_ELEMENTS.div); 
    }
}

function setSpacing() {
    // get cells
    let cells = Array.from(document.querySelectorAll('.cell')); 
    //sets the flex Basis (starting size) of each cell to be an equal percentage of the container 
    cells.forEach(el => {
        el.style.flexBasis = `${(100/size)}%`; 
        // console.log(el.style.width); 
    })
}

function initializeColorChanger() {
    let allCellsArray = Array.from(document.querySelectorAll('.cell')); 
    allCellsArray.forEach(el => {
        el.addEventListener('mouseover', changeBackgroundColor); 
        // console.log(el); 
    })
}

function addEventListeners() {
    //grid size input
    DOM_ELEMENTS.gridInput.addEventListener('change', (e) => {
        // prompt('What size grid? Min: 5 Max 75'); 
        console.log(DOM_ELEMENTS.gridInput.value); 
    })

    //color input
    DOM_ELEMENTS.colorInput.addEventListener('change', (e) => {
        console.log(e.target.value); 
        // sets color value to the input value
        DOM_ELEMENTS.color = e.target.value; 
    }); 



}

function changeBackgroundColor(event) {
    event.target.style.backgroundColor = `${DOM_ELEMENTS.color}`; 
    event.target.classList.add('colored'); 
}

createDivs(); // might need to set the flex basis property dynamically depending on the ratio of 100 / size
setSpacing(); 
initializeColorChanger(); 
addEventListeners(); 