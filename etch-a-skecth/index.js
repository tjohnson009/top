const DOM_ELEMENTS = {
    container: document.querySelector('.container'), 
    div: '<div class="cell"></div>', 
}

let size = 50; 

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
    // set flex property to be 1 1 (size / 100) * 100
}

createDivs(); // might need to set the flex basis property dynamically depending on the ratio of 100 / size
setSpacing(); 
// DOM_ELEMENTS.container.append('<h1>HELLO</h1>'); 