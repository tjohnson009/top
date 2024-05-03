import fillCard from "./fillCard";
// import Meal from "./recipeData";
import { recipeData } from './recipeData'; 

export default function recipes() {
    let container = document.createElement('div'); 
    container.classList.add('container'); 
    let allDivs = []; 

    let createElement = (newElement, className) => {
        let element = document.createElement(newElement); 
        element.classList.add(className); 
        return element; 
    }

    let mealDiv = (mealName) => { // creates a meal div section with cards
        let div = createElement('div', 'meal-div'); 
        div.classList.add(mealName); 
        let divID = allDivs.length + 1; 
        div.dataset.id = parseInt(divID); 

        let h1 = document.createElement('h1'); 
        h1.classList.add('meal-header'); 
        h1.textContent = mealName.toUpperCase();
        h1.style.margin = 0;  
        div.appendChild(h1); 

        let cardContainer = createElement('div', 'cards-container'); 
        // console.log(cardContainer, mealName); // shows in the console what card you're working on
        for (let i = 0; i < 4; i++) { // FOR EACH CARD AKA MEAL create a card div for the container in a loop
            let newCard = createElement('div', 'card'); 
            let cardID = Array.from(cardContainer.children).length + 1; 
            // console.log(cardID); 
            newCard.dataset.id = parseInt(cardID); 
            // console.log(newCard); 
            
            let cardInfo = createElement('div', 'card-info'); 
            let img = createElement('div', 'image');
            let instructions = createElement('div', 'instructions'); 
            newCard.appendChild(cardInfo); 
            newCard.appendChild(img); 
            newCard.appendChild(instructions); 
            
            let paragraphs = ['name', 'creator', 'completion-time', 'difficulty']; 
            paragraphs.forEach(el => { // create the paragraph elements to fill later from the imported function
                let paragraph = createElement('p', el); // el == className
                cardInfo.appendChild(paragraph); 
            }); 
            
            // run the function to fill the card with the appropriate data based on cardID - fillCard
            // console.log(recipeData); // successful - object of all recipedata
            // for (let meal in recipeData[mealName].meals) {   
                //     fillCard(recipeData[mealName].meals[meal]); 
                // }
                for (let meal in recipeData[mealName].meals) {   
                    // console.log(meal); // 1,2,3,4
                    // cardID to match the propName on meals
                    if (parseInt(cardID) === parseInt(meal)) {
                        setTimeout(() => {fillCard(mealName, recipeData[mealName].meals[meal], cardID)}, 150); // populate the card with the appropriate data
                    }
                }
                
                // append the card to the container
                cardContainer.appendChild(newCard); 
        }

        div.appendChild(cardContainer); 
        return div; 
    }


    allDivs.push(mealDiv('breakfast')); 
    allDivs.push(mealDiv('lunch')); 
    allDivs.push(mealDiv('dinner')); 
    allDivs.push(mealDiv('dessert')); 
    allDivs.push(mealDiv('drinks')); 

    // console.log(allDivs); 
    allDivs.forEach(div => container.appendChild(div)); 


    return container; 
}