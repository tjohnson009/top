const myLibrary = []; 
const form = document.querySelector('#form'); 
const formDialog = document.querySelector('.form'); 
const addBookFormButton = document.querySelector('#submit');
const addBookToLibrary = document.querySelector('.add-book'); 
const dialogClose = document.querySelector('.close-button'); 
 
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
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`; 
    } 

    // removeFromLibrary = (e) => {
    //     console.log(); 
    // }

   returnUIComponent = () => {
        return ``;  
    }
}

function clearInputs() {
    inputs.forEach(input => {
        input.value = ''; 
    }); 
}


function addToLibrary(e) { // takes the input of the form and creates a book object from it
    e.preventDefault();    
    // get data from form
    let title = form.title.value; 
    let author = form.author.value; 
    let pages = form.pageCount.value; 
    let readStatus = form.read.checked; 


    // new book from constructor
    let book = new Book(title, author, pages);
    book.read = readStatus; 
    // console.log(book);  
    // add book object to the array
    if (title && author && pages) {
        myLibrary.push(book); 
        renderBooks(); 
    }
    console.log(myLibrary); 
    // 
    
    // clear form inputs
    clearInputs(); 
}

function renderBooks() {
    // clear current books from UI
    let allBooks = Array.from(document.querySelectorAll('.book')); 
    allBooks.forEach(DOMBook => {
        DOMBook.remove();
    }); 
    // loop through array 
    myLibrary.forEach((DOMBook, index) => {
        // console.log(book); 
        // document.querySelector('.library').insertAdjacentHTML('beforeend', 
        document.querySelector('.add-book').insertAdjacentHTML('afterend', 
        `<div class="book" data-id='${index}'>
        <div class="book-info">
        <div class="book-title">${DOMBook.title}</div>
        <div class="book-author">${DOMBook.author}</div>
        <div class="book-pages">${DOMBook.pages} pages</div>
        <div class="read-delete">
        <div class="read"><button>${DOMBook.read ? 'Read' : 'Unread'}</button></div>
        <div class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></div>
        </div>
        </div>
        </div>`); 
    })

    // add event listeners on the books delete buttons
    let deleteButtons = Array.from(document.querySelectorAll('.delete')); 
    deleteButtons.forEach(button => {
        console.log(button); 
        button.firstChild.addEventListener('click', function(e) {
            removeFromLibrary(e); 
        })
    })


}

function removeFromLibrary(e) {
    e.stopPropagation(); 
    // let bookDiv = e.target.parentElement.parentElement.parentElement.parentElement.parentElement; // not ideal... but it works
    let bookDiv = e.target.closest('.book'); 
    console.log(bookDiv); 
    console.log(myLibrary[bookDiv.dataset.id]); 
}

addBookToLibrary.addEventListener('click', (e) => {
    formDialog.showModal(); 
    formDialog.style.display = 'grid'; 
})

addBookFormButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    addToLibrary(e); 
    // formDialog.close(); 
    // formDialog.style.display = 'none';
})

dialogClose.addEventListener('click', (e) => {
    formDialog.close(); 
    formDialog.style.display = 'none';
})