
let library = [];

function Book (title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    library[index].toggleRead();
    render();
}


// Create a new Book object and push it to "library" array

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title,author,pages,read);

    library.push(newBook);

    render();
}


function render(){
    let libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML="";
    library.forEach((book,index)=>{
        
        let newBookEl = document.createElement("div");
        newBookEl.innerHTML = `<div class="library-card">
        <img
          id="card-book-cover"
          src="./assets/img/book-cover-placeholder.png"
          alt="Book cover"
        />
        <div>
        <p id="card-title">${book.title}</p>
        <p id="card-author">${book.author}</p>
        <p id="card-pages">${book.pages} pages</p>
        <button id="card-read" onclick="toggleRead(${index})" type="button">${book.read ? "Read":"Not Read"}</button>
        <button id="remove-btn" onclick="removeBook(${index})">Remove</button>
        </div>
        </div>`;
        libraryDiv.appendChild(newBookEl);
        
    })
}


// Give functionality to Buttons
//  // Add Book button(when clicked show the form)
let addBookButton = document.getElementById("add-btn");

addBookButton.addEventListener("click",()=>{
    let addBookForm = document.getElementById("add-book-form");
    addBookForm.style.display = "block";
    
});

//  // Submit button(when clicked add book to library)
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click",()=>{
    addBookToLibrary();
})

// // Remove button onclick=removeBook(index)
function removeBook(index){    
    library.splice(index,1);
    render();
}