// import { divCreator } from "./index"; 
export default function about() {
    let container = document.createElement('div'); 
    container.classList.add('container'); 

    let bakerDiv = document.createElement('div');
    bakerDiv.classList.add('bakerDiv'); 
    let bakerH1 = document.createElement('h1'); 
    bakerH1.innerHTML = 'About Becky'; 
    bakerDiv.appendChild(bakerH1); 
    let bakerText = bakerDiv.appendChild(document.createElement('div')); 
    bakerText.classList.add('text'); 
    let bakerDescription = bakerDiv.appendChild(document.createElement('p')); 
    bakerDescription.classList.add('description'); 
    bakerDescription.innerHTML = `Becky J, the founder and head baker of Becky's Bakery, has been perfecting her craft for over a decade. With a passion for baking that was instilled in her from a young age, she honed her skills in her family's kitchen, experimenting with recipes and techniques until she found the perfect balance of flavors and textures. Today, her unwavering dedication to quality and her commitment to using only the freshest, locally-sourced ingredients are evident in every item that leaves the Becky's Bakery ovens. Her signature creations, from the flaky, buttery croissants to the rich, decadent cakes, have earned her bakery a loyal following throughout the community and beyond. As the heart and soul of Becky's Bakery, she takes great pride in sharing her love of baking with each and every customer who walks through the door.`; 
    let bakerPictureDiv = bakerDiv.appendChild(document.createElement('div')); 
    let bakerPicture = new Image(200); 
    bakerPicture.classList.add('baker-picture'); 
    bakerPicture.src = './src/img/andy-sartori-Lmpx1n-TVjk-unsplash.jpg';
    bakerPictureDiv.appendChild(bakerPicture); 
    container.appendChild(bakerDiv); 
    
    let bakeryDiv = document.createElement('div');
    bakeryDiv.classList.add('bakery'); 
    let bakeryH1 = document.createElement('h1'); 
    bakeryH1.innerHTML = 'The Bakery'; 
    bakeryDiv.appendChild(bakeryH1); 
    let bakeryText = bakeryDiv.appendChild(document.createElement('div')); 
    bakeryText.classList.add('text'); 
    let bakeryPictureDiv =  bakerDiv.appendChild(document.createElement('div')); 
    bakeryPictureDiv.classList.add('picture'); 
    let bakeryPicture = new Image(200); 
    bakeryPicture.src = './src/img/gabriella-clare-marino-NaGx1KQA-MM-unsplash.jpg';
    bakeryPicture.classList.add('picture'); 
    bakeryPictureDiv.appendChild(bakeryPicture); 
    let bakeryDescription =  bakerDiv.appendChild(document.createElement('p')); 
    bakeryDescription.classList.add('description'); 
    bakeryDescription.innerHTML = `What started as a small, home-based baking operation in Becky's cozy kitchen has blossomed into a beloved community staple. Over 20 years ago, Becky began selling her homemade breads and pastries at the local farmer's market, quickly earning a loyal following with her uncompromising commitment to quality and her warm, welcoming demeanor. Word of Becky's exceptional baking skills soon spread throughout the neighborhood, and it wasn't long before she outgrew her home kitchen. With the support of her family, Becky opened the doors to Becky's Bakery, a charming storefront that has since become a gathering place for locals and a destination for visitors seeking a taste of the community's culinary heart. Today, Becky's Bakery stands as a testament to the power of passion, perseverance, and a genuine love for bringing people together through the universal joy of freshly baked goods.`
    container.appendChild(bakeryDiv); 
    
    


}