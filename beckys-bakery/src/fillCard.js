export default function fillCard(mealName, obj, cardID) {
    // console.log(mealName); 
    console.log(obj); // successful
    // find the div with the same name as the main meal block on the page
    let placementDiv = document.querySelector(`.${mealName}`); 
    // console.log(placementDiv); 
    
    // find the nearest child that has the class of card info
    let card = placementDiv.querySelector(`.card[data-id="${cardID}"]`); 
    let cardInfo = card.querySelector('.card-info'); 
    let pElements = Array.from(cardInfo.querySelectorAll('p')); 
    let image = card.querySelector('.image'); 
    let instructions = card.querySelector('.instructions'); 
    // console.log(instructions); 

    // get the paragraph that matches the propertyname of the obj
    for (let i = 0; i < pElements.length; i++) { // handles populating everything except image and instructions
        // console.log(obj); 
        // fill the innerText of that element with the value of the property
        for (let prop in obj) {
            // console.log(prop); 
            if (prop === pElements[i].classList[0]) {
                pElements[i].innerHTML = obj[prop]; 
            }
        }
    }
    // image.innerHTML = obj['image']; 
    image.innerHTML = `<img src='${obj['image']}' id='${obj['imgLink']}'>`; 
    instructions.innerHTML = obj.instructions; 
}