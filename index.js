function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(function (response) {
    return response.json()
  })
  .then(function(bookTitlesJson) {
    renderBooks(bookTitlesJson)
  })
}

function renderBooks(bookTitlesJson) {
  const main = document.querySelector('main');
  bookTitlesJson.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML =`${book.name}`;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});