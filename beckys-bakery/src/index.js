console.log('We are live and in color.'); 

// let divCreator = (divName, className) => {
//     divName = document.createElement('div'); 
//     divName.classList.add(className); 
//     return divName; 
// }

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
hero.insertAdjacentElement('beforeend', heroImage); // NOT insertAdjacentHTML because we created an element, not a string representation of an element
hero.insertAdjacentHTML('beforeend', '<h1>A Collection Of Custom-Made Culinary Creations</h1>'); 
heroText.insertAdjacentHTML('beforeend', "<p>Welcome to Becky's Bakery, where the aroma of freshly baked goods fills the air and the taste of homemade goodness delights the senses. For over 10 years, our family-owned bakery has been a beloved destination for locals and visitors alike. Offering a wide selection of artisanal breads, decadent pastries, and mouthwatering desserts, our bakery exists to please your taste buds and the craving in your heart.</p>")
heroText.insertAdjacentHTML('beforeend', "<p>At Becky's Bakery, we take pride in using only the finest, locally-sourced ingredients to create our signature baked goods. From our flaky croissants and buttery scones to our rich, fudgy brownies and delicate macarons, every item is crafted with care and attention to detail. Whether you're grabbing a quick breakfast on the go or indulging in an afternoon treat, we are always on hand to ensure your experience is nothing short of exceptional. Visit us today and discover why Becky's Bakery has become a cherished part of the community.</p>")

let switchTabs = () => {
    let children = Array.from(document.querySelector('#content').children); 
    console.log(children); 
    children.forEach(child => child.remove()); 
}

let buttons = Array.from(document.querySelectorAll('button')); 
buttons.forEach(btn => {
    btn.addEventListener('click', switchTabs); 
})
// export {divCreator}; 