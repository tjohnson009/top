const DOM_ELEMENTS = {
    container: document.querySelector('.container'), 
    div: '<div class="cell"></div>'
}

let size = 3; 

function createDivs() {
    for (let i=0; i < size**2; i++) {
        DOM_ELEMENTS.container.insertAdjacentHTML("afterbegin", DOM_ELEMENTS.div); 
    }
}

function setSpacing() {
    // get cells
    let cells = Array.from(document.querySelectorAll('.cell')); 
    // get cell rule
    cells.forEach(el => {
        el.style.width = `${(size / 100) * 100}%`; 
        // console.log(el.style.width); 
    })
    // set flex property to be 1 1 (size / 100) * 100
}

createDivs(); // might need to set the flex basis property dynamically depending on the ratio of size / 100
setSpacing(); 
// DOM_ELEMENTS.container.append('<h1>HELLO</h1>'); 