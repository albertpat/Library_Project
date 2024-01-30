console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(bookCount, books) {
    this.bookCount = 0;
    this.books = [];
  }
  markread(checkbox, id) {
    this.books.forEach((book) => {
      if ((book.id === id)) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }
  addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;

    const book = new Book(this.bookCount, title, author, read);
    this.books.push(book);

    this.addBookRow(book);

    this.bookCount++;
  }
  addBookRow(book) {
    const tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    
    newRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><input type="checkbox" ${book.read ? 'checked disabled' : ''}></td>
    <td><button onclick="library.removeBook(${book.id})">Remove</button></td>`;
}
removeBook(bookId) {
    this.books = this.books.filter(book => book.id !== bookId);
    document.getElementById('table').getElementsByTagName('tbody')[0].innerHTML = '';
    this.books.forEach(book => this.addBookRow(book));
}
}

const library = new Library();

document.getElementById("bookForm").addEventListener("submit", function (a) {
  a.preventDefault();
  library.addBook();
});
