const data = [
  {
    id: 1,
    title: "Bok 1",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    readCount: 10,
  },
  {
    id: 2,
    title: "Bok 2",
    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
    readCount: 300,
  },
  {
    id: 3,
    title: "Bok 3",
    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
    readCount: 80,
  },
  {
    id: 4,
    title: "Bok 4",
    body: "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    readCount: 200,
  },
  {
    id: 5,
    title: "Bok 5",
    body: "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
    readCount: 109,
  },
];

function renderBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${book.title}</strong><br>
        ${book.body}<br>
        Read Count: ${book.readCount}<br>
        <button onclick="editBook(${book.id})">Edit</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      `;
    bookList.appendChild(li);
  });
}
renderBooks(data);
function addBook() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const readCount = parseInt(document.getElementById("readCount").value);
  const newBook = {
    id: data.length + 1,
    title,
    body,
    readCount,
  };
  data.push(newBook);
  renderBooks(data);
  document.getElementById("title").value = "";
  document.getElementById("body").value = "";
  document.getElementById("readCount").value = "";
}

function editBook(bookId) {
  alert(`Edit book with ID ${bookId}`);
}

function deleteBook(bookId) {
  const newData = data.filter((book) => book.id !== bookId);
  data.length = 0;
  data.push(...newData);
  renderBooks(data);
}
