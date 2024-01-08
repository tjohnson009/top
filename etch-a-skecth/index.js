let DOM_ELEMENTS = {
    container: document.querySelector('.container'), 
    div: '<div class="cell"></div>', 
    gridInput: document.querySelector('#grid-size'), 
    gridLabel: document.querySelector('#gridLabel'), 
    colorInput: document.querySelector('#color'), 
    color: `#3f3d44`, // default color - dark grey
    colorfulMode: document.getElementById('colorful'), 
    
}

let size = 15; 
// let colorfulMode = false; 

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
    DOM_ELEMENTS.gridInput.addEventListener('input', (e) => {
        // console.log(DOM_ELEMENTS.gridInput.value); 
        DOM_ELEMENTS.gridInput.defaultValue = e.target.value; 
        // console.log(DOM_ELEMENTS.gridInput); 
        DOM_ELEMENTS.gridLabel.innerHTML = `${e.target.value} x ${e.target.value}`;   
        clearContainer(); 
        size = e.target.value; 
        createDivs(); 
        setSpacing(); 
        initializeColorChanger(); 
    })

    //color input
    DOM_ELEMENTS.colorInput.addEventListener('change', (e) => {
        // console.log(e.target.value); 
        // sets color value to the input value
        DOM_ELEMENTS.color = e.target.value; 
    }); 

    // colorfulMode
    DOM_ELEMENTS.colorfulMode.addEventListener('change', (e) => {
        console.log(e); 
        console.log(DOM_ELEMENTS.colorfulMode.value); 
    })


}

function changeBackgroundColor(event) {
    if (DOM_ELEMENTS.colorfulMode.checked) {
        let r = Math.floor(Math.random() * 256); 
        let g = Math.floor(Math.random() * 256); 
        let b = Math.floor(Math.random() * 256); 
        event.target.classList.add('colored'); 
        event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`; 
        return; 
    }
    event.target.style.backgroundColor = `${DOM_ELEMENTS.color}`; 
    event.target.classList.add('colored'); 
}

function clearContainer() {
    DOM_ELEMENTS.container.replaceChildren(); 
}

createDivs(); // might need to set the flex basis property dynamically depending on the ratio of 100 / size
setSpacing(); 
initializeColorChanger(); 
addEventListeners(); 