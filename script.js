let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    
}
let newBookBtn = document.querySelector('.newBook-btn');
newBookBtn.addEventListener('click', function(){
     let newBookForm = document.querySelector('.newBook-form')
     newBookForm.style.display = 'block';
})