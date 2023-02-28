let books = [];

const addBtn = document.getElementById('add_new_book');
const listBox = document.getElementById('list');

class AllBook {
  displayBooks() {
    const book = localStorage.getItem('book');
    this.book = book;
    if (this.book === null) {
      books = [];
    } else {
      books = JSON.parse(book);
    }
    let bookscontainer = '';
    books.forEach((item, index) => {
      bookscontainer += `<div class="book">
        <p>"${item.title}" by ${item.author}</p>
        <button type="button" onClick="bookLibrary.removeBook(${index})">Remove</button>
      </div>`;
    });
    listBox.innerHTML = bookscontainer;
  }

  addBook(title, author) {
    const book = localStorage.getItem('book');
    if (book === null) {
      books = [];
    } else {
      books = JSON.parse(book);
    }
    books.push({
      title,
      author,
    });
    localStorage.setItem('book', JSON.stringify(books));
    this.displayBooks();
  }

  removeBook(index) {
    const book = localStorage.getItem('book');
    books = JSON.parse(book);
    const { title } = books[index];
    const { author } = books[index];
    const bookIndex = books.indexOf(books.find(
      (book) => book.title === title && book.author === author,
    ));
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
    }
    localStorage.setItem('book', JSON.stringify(books));
    this.displayBooks();
  }
}

const bookLibrary = new AllBook();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('bookName').value;
  const author = document.getElementById('author').value;
  bookLibrary.addBook(title, author);
});

bookLibrary.displayBooks();

const booklist = document.getElementById('bookList');
const bookadd = document.getElementById('addBook');
const contact = document.getElementById('contact');
const totalbooks = document.getElementById('totalbooks');
const booksadd = document.getElementById('booksadd');
const contactinfo = document.getElementById('contactinfo');
const totalbookscolor = document.getElementById('totalbookscolor');
const booksaddcolor = document.getElementById('booksaddcolor');
const contactcolor = document.getElementById('contactcolor');

totalbooks.addEventListener('click', (e) => {
  e.preventDefault();
  booklist.style.display = 'block';
  totalbookscolor.style.color = 'blue';
  booksaddcolor.style.color = 'black';
  contactcolor.style.color = 'black';
  bookadd.style.display = 'none';
  contact.style.display = 'none';
});

booksadd.addEventListener('click', (e) => {
  e.preventDefault();
  bookadd.style.display = 'block';
  booklist.style.display = 'none';
  contact.style.display = 'none';
  totalbookscolor.style.color = 'black';
  booksaddcolor.style.color = 'blue';
  contactcolor.style.color = 'black';
});

contactinfo.addEventListener('click', (e) => {
  e.preventDefault();
  contact.style.display = 'block';
  booklist.style.display = 'none';
  bookadd.style.display = 'none';
  totalbookscolor.style.color = 'black';
  booksaddcolor.style.color = 'black';
  contactcolor.style.color = 'blue';
});
