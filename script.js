let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render(){
    let libraryEl = document.querySelector('#booksGrid');
    libraryEl.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${book.title}</p>`;
        bookEl.innerHTML = `
            <div class = 'card-header'>
                <h3 class = 'title'>${book.title}</h3>
                <h5 class = 'author'>by ${book.author}</h5>
            </div>
            <div class = 'card-body'>
                <p>${book.pages} pages</p>
                <p class = 'read-status'>${book.read ?'Read' : 'Not Yet'}</p>
            </div>
            `;
        libraryEl.appendChild(bookEl)
    }
}

function addBookToLibrary(){
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let pages = document.querySelector('#pages').value
   let reads = document.querySelector('#reads').value
   let newBook = new Book(title, author, pages, reads);
   myLibrary.push(newBook);
   render();
}

let newBookBtn = document.querySelector('.newBook-btn');
newBookBtn.addEventListener('click', function(){
     let newBookForm = document.querySelector('.newBook-form')
     newBookForm.style.display = 'block';
})

document.querySelector('.newBook-form').addEventListener('submit', function(event){
    event.preventDefault()
    addBookToLibrary();
})