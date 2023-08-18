// Book objects will be stored in this array
const myLibrary = [];
console.log(myLibrary);

function Book(title, author, pageCount, bookRead) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.bookRead = bookRead
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
// console.log(book1.title);

function addBookToLibrary() {
    myLibrary.push(book1);
}
addBookToLibrary();