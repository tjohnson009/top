const myLibrary = []; 
const form = document.querySelector('#form'); 
const addBookButton = document.querySelector('#submit'); 
const bookHTML = 1; 

const inputs = Array.from(document.querySelectorAll('input')); 

function Library() {
    this.bookCount = 0; 
}

function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; // number 
    this.read = false; 
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`)
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`; 
    } 

    makeUIComponent = () => {

    }
}

function clearInputs() {
    inputs.forEach(input => {
        input.value = ''; 
    }); 
}


function addToLibrary() { // takes the input of the form and creates a book object from it
    // get data from form
    let title = form.title.value; 
    let author = form.author.value; 
    let pages = form.pageCount.value; 

    // new book from constructor
    let book = new Book(title, author, pages);
    // console.log(book);  
    // add book object to the array
    if (title && author && pages) {
        myLibrary.push(book); 
        document.body.insertAdjacentHTML('beforeend', `<h1>Book added</h1>`)
    }
    console.log(myLibrary); 
    // 
    
    // clear form inputs
    clearInputs(); 
}

addBookButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    addToLibrary(); 
})