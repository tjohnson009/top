// console.log('We are live and in color.'); 
import about from './about'; 
import recipes from './recipes'; 
import './style.css'; 
// import './icons'; 
// let divCreator = (divName, className) => {
//     divName = document.createElement('div'); 
//     divName.classList.add(className); 
//     return divName; 
// }
// function index() {
    // debugger; 
    let contentDiv = document.querySelector('#content'); 
    let hero = document.createElement('div'); 
    let pictureFrame = document.createElement('div'); 
    pictureFrame.classList.add('pictureFrame'); 
    hero.classList.add('hero');
    hero.classList.add('carousel');
    let heroParagraph = document.createElement('div'); 
    heroParagraph.classList.add('hero-text'); 
    
    contentDiv.appendChild(hero); 
    contentDiv.appendChild(heroParagraph); 
    hero.appendChild(pictureFrame);
    const image1 = new Image(); 
    image1.src = '../src/img/1-Food-File.jpg'; 
    image1.dataset.id = 1; 
    // image1.classList.add('hidden'); 
    const image2 = new Image(); 
    image2.src = '../src/img/2-Food-File.jpg'; 
    image2.dataset.id = 2; 
    // image2.classList.add('hidden');
    const image3 = new Image(); 
    image3.src = '../src/img/3-Food-File.jpg'; 
    image3.dataset.id = 3; 
    // image3.classList.add('hidden');
    const image4 = new Image(); 
    image4.src = '../src/img/4-Food-File.jpg'; 
    image4.dataset.id = 4; 
    // image4.classList.add('hidden');
    const image5 = new Image(); 
    image5.src = '../src/img/5-Food-File.jpg'; 
    image5.dataset.id = 5; 
    // image5.classList.add('hidden');
    const defaultImage = new Image(); 
    defaultImage.src = '../src/img/mae-mu-kID9sxbJ3BQ-unsplash.jpg'; 
    defaultImage.alt = 'A basket of baked chocolate chip cookies';
    defaultImage.dataset.id = 0; 
    defaultImage.classList.add('active');  
    pictureFrame.appendChild(defaultImage); 
    pictureFrame.appendChild(image1); 
    pictureFrame.appendChild(image2); 
    pictureFrame.appendChild(image3); 
    pictureFrame.appendChild(image4); 
    pictureFrame.appendChild(image5); 
    // console.log(heroImage); 
    // hero.insertAdjacentElement('beforeend', heroImage); // NOT insertAdjacentHTML because we created an element, not a string representation of an element
    hero.insertAdjacentHTML('beforeend', `<h1>Becky's Bakery</h1>`); 
    hero.insertAdjacentHTML('beforeend', '<h2>A Collection Of Custom-Made Culinary Creations</h2>'); 
    heroParagraph.insertAdjacentHTML('beforeend', "<p>Welcome to Becky's Bakery, where the aroma of freshly baked goods fills the air and the taste of homemade goodness delights the senses. For over 10 years, our family-owned bakery has been a beloved destination for locals and visitors alike. Offering a wide selection of artisanal breads, decadent pastries, and mouthwatering desserts, our bakery exists to please your taste buds and the craving in your heart.</p>")
    heroParagraph.insertAdjacentHTML('beforeend', "<p>At Becky's Bakery, we take pride in using only the finest, locally-sourced ingredients to create our signature baked goods. From our flaky croissants and buttery scones to our rich, fudgy brownies and delicate macarons, every item is crafted with care and attention to detail. Whether you're grabbing a quick breakfast on the go or indulging in an afternoon treat, we are always on hand to ensure your experience is nothing short of exceptional. Visit us today and discover why Becky's Bakery has become a cherished part of the community.</p>")
// }
    
    let switchTabs = (e) => {
        // console.log(e); 
        let children = Array.from(document.querySelector('#content').children); 
        // console.log(children); 
    children.forEach(child => child.remove()); 

    // render the js based on which button is clicked
    if (e.target.textContent === 'About') {
        clearInterval(carousel.automateID); 
        contentDiv.appendChild(about()); 
    } else if (e.target.textContent === 'Recipes') {
        clearInterval(carousel.automateID); 
        contentDiv.appendChild(recipes()); 
    }
    //  else if (e.target.textContent === 'Catering') {
    //     contentDiv.appendChild(catering()); 
    // } 
    else if (e.target.textContent === 'Newsletter') {
        clearInterval(carousel.automateID); 
        contentDiv.appendChild(newsletter()); 
    } else {
        contentDiv.appendChild(hero); 
        contentDiv.appendChild(heroParagraph); 
        carousel.automateImageRotation(); 
    }
}

let buttons = Array.from(document.querySelectorAll('button')); 
buttons.forEach(btn => {
    btn.addEventListener('click', e => switchTabs(e)); 
})
// export {divCreator}; 

class Carousel {
    constructor(element, images) {
        this.element = element; 
        this.images = images; 
        this.currentImage = 0; 
        this.automateID = ''; 
    }

    // buttons and event listeners

    automateImageRotation() { // every 5 seconds
        let timerID = setInterval(() => this.nextImage(), 5000); 
        this.automateID = timerID; 
        return this.automateID; 
    }

    nextImage() {
        // debugger; 
        if (this.currentImage === this.images.length - 1) {
            this.currentImage = 0; 
            // console.log('reset'); 
            let activeImg = document.querySelector('.active'); 
            activeImg.classList.toggle('active'); 
            let nextImg = document.querySelector(`[data-id="${this.currentImage}"]`); 
            nextImg.classList.toggle('active');
            this.updateButtonsAppearance(this.currentImage);
        } else {
            // get current active image and deactivate it, toggle hidden class
            let activeImg = document.querySelector('.active'); 
            activeImg.classList.toggle('active'); 
            this.currentImage = this.currentImage + 1; 
            // console.log('Add', this.currentImage); 
            let nextImg = document.querySelector(`[data-id="${this.currentImage}"]`); 
            nextImg.classList.toggle('active');
            this.updateButtonsAppearance(this.currentImage);
         }
    }

    previousImage() {
        if (this.currentImage === 0) {
            this.currentImage = 5; 
            // console.log('reset'); 
            let activeImg = document.querySelector('.active'); 
            activeImg.classList.toggle('active'); 
            let nextImg = document.querySelector(`[data-id="${this.currentImage}"]`); 
            nextImg.classList.toggle('active');
            this.updateButtonsAppearance(this.currentImage); 
        } else {
            // get current active image and deactivate it, toggle hidden class
            let activeImg = document.querySelector('.active'); 
            activeImg.classList.toggle('active'); 
            this.currentImage = this.currentImage - 1; 
            // console.log('Add', this.currentImage); 
            let nextImg = document.querySelector(`[data-id="${this.currentImage}"]`); 
            nextImg.classList.toggle('active');
            this.updateButtonsAppearance(this.currentImage);
         }
    }

    goToImage(ID) {
        let activeImg = document.querySelector('.active'); 
        activeImg.classList.toggle('active'); 
        console.log(ID); 
        this.currentImage = ID; 
        // console.log('Add', this.currentImage); 
        let nextImg = document.querySelector(`[data-id="${this.currentImage}"]`); 
        nextImg.classList.toggle('active');
        this.updateButtonsAppearance(this.currentImage);
    }

    updateButtonsAppearance(ID) {
        let imgButtons = Array.from(document.querySelectorAll('#buttonsDiv > .svg')); 
        imgButtons.forEach(btn => {
            btn.src = '../src/icons/emptyButton.svg'; 
        })
        console.log(ID); 
        // remove the ID-th button from the DOM
        let buttonToChange = document.querySelector(`.navButton[data-id="${ID}"]`); 
        // buttonToRemove.remove(); 
        buttonToChange.src = '../src/icons/fullButton.svg'; 
        // insert the full circle
    }

    insertButtonElementsForCarousel(DOMelement) {
        images.forEach((img, index) => {
            let emptyButton = `<img class="svg navButton" src="../src/icons/emptyButton.svg" data-id=${index} >`; 
            DOMelement.insertAdjacentHTML('beforeend', emptyButton); 
        }) 

    }
}

let carouselElement = document.querySelector('.carousel'); 
let imageSrcArray = [
    '../src/img/mae-mu-kID9sxbJ3BQ-unsplash.jpg',
    '../src/img/1-Food-File.jpg', 
    '../src/img/2-Food-File.jpg', 
    '../src/img/3-Food-File.jpg', 
    '../src/img/4-Food-File.jpg', 
    '../src/img/5-Food-File.jpg', 
]

let images = imageSrcArray.map(src => {
    let imgElement = new Image(); 
    console.log(imgElement); 
    imgElement.src = src; 
    return imgElement;
})

let carousel = new Carousel(carouselElement, images); 
console.log(images); 

let divNames = ['prevDiv', 'nextDiv', 'buttonsDiv']; 
let divs = divNames.map(el => {
    let element = document.createElement('DIV'); 
    element.id = el; 
    element.name = el; 
    element.style.position = 'absolute'; 
    element.classList.add('changeImage'); 
    return element;
}); 

divs.forEach(div => {
    carouselElement.insertAdjacentElement('beforeend', div); 
}); 

let prevDiv = document.querySelector('#prevDiv');
let nextDiv = document.querySelector('#nextDiv');
let buttonsDiv = document.querySelector('#buttonsDiv');

prevDiv.innerHTML = `<img class="svg" src="../src/icons/left.svg">`; 
nextDiv.innerHTML = `<img class="svg" src="../src/icons/right.svg">`; 

carousel.insertButtonElementsForCarousel(buttonsDiv); 
carousel.automateImageRotation(); 
carousel.updateButtonsAppearance(carousel.currentImage); 

nextDiv.addEventListener('click', (e) => {
    clearInterval(carousel.automateID); 
    carousel.nextImage(); 
    carousel.automateImageRotation(); 
}); 

prevDiv.addEventListener('click', (e) => {
    clearInterval(carousel.automateID); 
    carousel.previousImage(); 
    carousel.automateImageRotation();
}); 

let imageButtons = Array.from(document.querySelectorAll('#buttonsDiv > .svg')); 
imageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target); 
        clearInterval(carousel.automateID); 
        carousel.goToImage(parseInt(e.target.dataset.id)); 
        carousel.updateButtonsAppearance(parseInt(e.target.dataset.id)); 
        carousel.automateImageRotation();
    })
}) 