const myLibrary = []; 

function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; // number 
    this.status = 'not read yet'; 
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`)
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`; 
    } 
}

function addToLibrary() {

}