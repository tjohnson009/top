// console.log('We are live and in color.'); 
import about from './about'; 
import './style.css'; 
// let divCreator = (divName, className) => {
//     divName = document.createElement('div'); 
//     divName.classList.add(className); 
//     return divName; 
// }
// function index() {

    let contentDiv = document.querySelector('#content'); 
    let hero = document.createElement('div'); 
    hero.classList.add('hero');
    let heroText = document.createElement('div'); 
    heroText.classList.add('hero-text'); 
    
    contentDiv.appendChild(hero); 
    contentDiv.appendChild(heroText); 
    const heroImage = new Image(1500); 
    heroImage.src = '../src/img/mae-mu-kID9sxbJ3BQ-unsplash.jpg'; 
    heroImage.alt = 'A basket of baked chocolate chip cookies'; 
    console.log(heroImage); 
    // hero.insertAdjacentElement('beforeend', heroImage); // NOT insertAdjacentHTML because we created an element, not a string representation of an element
    hero.insertAdjacentHTML('beforeend', `<h1>Becky's Bakery</h1>`); 
    hero.insertAdjacentHTML('beforeend', '<h2>A Collection Of Custom-Made Culinary Creations</h2>'); 
    heroText.insertAdjacentHTML('beforeend', "<p>Welcome to Becky's Bakery, where the aroma of freshly baked goods fills the air and the taste of homemade goodness delights the senses. For over 10 years, our family-owned bakery has been a beloved destination for locals and visitors alike. Offering a wide selection of artisanal breads, decadent pastries, and mouthwatering desserts, our bakery exists to please your taste buds and the craving in your heart.</p>")
    heroText.insertAdjacentHTML('beforeend', "<p>At Becky's Bakery, we take pride in using only the finest, locally-sourced ingredients to create our signature baked goods. From our flaky croissants and buttery scones to our rich, fudgy brownies and delicate macarons, every item is crafted with care and attention to detail. Whether you're grabbing a quick breakfast on the go or indulging in an afternoon treat, we are always on hand to ensure your experience is nothing short of exceptional. Visit us today and discover why Becky's Bakery has become a cherished part of the community.</p>")
    // {
    //     hero, heroText
    // }; 
// }
    
    let switchTabs = (e) => {
        console.log(e); 
        let children = Array.from(document.querySelector('#content').children); 
        // console.log(children); 
    children.forEach(child => child.remove()); 

    // render the js based on which button is clicked
    if (e.target.textContent === 'About') {
        contentDiv.appendChild(about()); 
    } else if (e.target.textContent === 'Recipes') {
        contentDiv.appendChild(recipes()); 
    } else if (e.target.textContent === 'Catering') {
        contentDiv.appendChild(catering()); 
    } else if (e.target.textContent === 'Newsletter') {
        contentDiv.appendChild(newsletter()); 
    } else {
        contentDiv.appendChild(hero); 
        contentDiv.appendChild(heroText); 
    }
}

let buttons = Array.from(document.querySelectorAll('button')); 
buttons.forEach(btn => {
    btn.addEventListener('click', e => switchTabs(e)); 
})
// export {divCreator}; 