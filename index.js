import Book from './modules/bookclass.js';
import pageFunctionality from './modules/ui_controller.js';

const getBooks = JSON.parse(localStorage.getItem('books'));
let bookList = [];
if (getBooks !== null) {
  bookList = getBooks;
}

// create a book every time the add book btn is clicked.
document.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const authorInput = document.getElementById('author').value;

  const newBook = new Book.Book(title, authorInput); // create new book object
  bookList.push(newBook);

  // send book to local storage
  newBook.storeBook(bookList);
});

// dynamically showing book in the UI
const bookShelf = document.querySelector('.book-shelf');
bookShelf.innerHTML += bookList
  .map((item) => `
          <div class="compactment">
        <ul class="booklist">
          <li class="title">${item.title}</li>
          <li class="by">BY</li>
          <li class="author">${item.author}</li>
        </ul>
        <button type="button" class="remove-btn">Remove</button>
      </div>
      <hr class="divider" />`)
  .join('');

const removeBtn = document.querySelectorAll('.remove-btn');
removeBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    const takeOut = new Book.Book(bookList[index].title, bookList[index].author);
    takeOut.removeBook(takeOut.title);
  });
});

pageFunctionality.pageFunctionality();