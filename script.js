let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let newBookBtn = document.querySelector('.newBook-btn');
newBookBtn.addEventListener('click', function(){
     let newBookForm = document.querySelector('.newBook-form')
     newBookForm.style.display = 'block';
})

function addBookToLibrary(){
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let pages = document.querySelector('#pages').value
   let reads = document.querySelector('#reads').checked
   let newBook = new Book(title, author, pages, reads);
   myLibrary.push(newBook);
   render();

}

function createBook(item){
    const bookGrid = document.querySelector('#booksGrid');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn'); 
    
    readBtn.addEventListener('click', () => { 
        item.read = !item.read;
        setData();
        render();
    }); 
    bookDiv.appendChild(readBtn);

    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63';
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    bookGrid.appendChild(bookDiv);

    removeBtn.addEventListener('click', () =>{
        removeBook();
        setData();
    })


};

let newBookForm = document.querySelector(".newBook-form");
function close(){
    newBookForm.style.display = 'none';
}

document.querySelector('#addBook').addEventListener('click', function(event){
    event.preventDefault();
    addBookToLibrary();
    close();
    setData();
    clearForm();
})

function render(){
    const display = document.querySelector('.books-grid');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

const clearForm = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
    reads.value = "";
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    render();
}

restore();


