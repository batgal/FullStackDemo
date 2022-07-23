console.log("hello world");

const booksList = document.querySelector("#books");

const listBook = document.createElement("li");
listBook.textContent = "hello";
booksList.append(listBook);

fetch("/books", () => {});
