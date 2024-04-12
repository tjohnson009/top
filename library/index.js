function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; // number 
    this.status = 'not read yet'; 
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`; 
    } 
}