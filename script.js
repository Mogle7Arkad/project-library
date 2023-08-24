let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

Book.prototype.toggleRead = function(){
    this.read =! this.read;
}

function toggleRead(index){
    !myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary(){
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let pages = document.querySelector('#pages').value
   let reads = document.querySelector('#reads').checked
   let newBook = new Book(title, author, pages, reads);
   myLibrary.push(newBook);
   render();

}



function render(){
    let libraryEl = document.querySelector('#booksGrid');
    libraryEl.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${book.title}</p>`;
        bookEl.setAttribute('class', '.book-card');
        bookEl.innerHTML = `
            <div class = 'card-body'>
                <h3 class = 'title'>${book.title}</h3>
                <h5 class = 'author'>By: ${book.author}</h5>
                <p>${book.pages} Pages</p>
                <p class = 'read-status'>Status: ${book.read ?'Read' : 'Not Yet'}</p>
                <button class = 'remove-btn' onclick = 'removeBook(${i})'>Remove</button>
                <button class = 'toggleRead-btn' onclick = 'toggleRead(${i})'>Toggle Read</button>
            </div>
            `;
        libraryEl.appendChild(bookEl)
    }
    
}

  
const clearForm = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    reads.value = "";
}

let newBookBtn = document.querySelector('.newBook-btn');
newBookBtn.addEventListener('click', function(){
     let newBookForm = document.querySelector('.newBook-form')
     newBookForm.style.display = 'block';
})

document.querySelector('.newBook-form').addEventListener('submit', function(event){
    event.preventDefault()
    addBookToLibrary();
    clearForm();
})