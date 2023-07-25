let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let pages = document.querySelector('#pages').value
   let reads = document.querySelector('#reads').value
   let newBook = new Book(title, author, pages, reads);
   console.log(newBook); 
}

let newBookBtn = document.querySelector('.newBook-btn');
newBookBtn.addEventListener('click', function(){
     let newBookForm = document.querySelector('.newBook-form')
     newBookForm.style.display = 'block';
})

document.querySelector('.newBook-form').addEventListener('submit', function(){
    event.preventDefault()
    addBookToLibrary();
})