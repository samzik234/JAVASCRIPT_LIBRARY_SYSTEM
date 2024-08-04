// Create an empty array named library to store book objects
let library = [];

// Add book objects to the library array using the push method
library.push(
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true },
  { title: "1984", author: "George Orwell", yearPublished: 1949, available: false },
  { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true }
);

// Update the availability of "1984" to true
for (let book of library) {
  if (book.title === "1984") {
    book.available = true;
  }
}

// Remove "Pride and Prejudice" from the library array using the splice method
for (let i = 0; i < library.length; i++) {
  if (library[i].title === "Pride and Prejudice") {
    library.splice(i, 1);
    break;
  }
}

// Check if "The Great Gatsby" is in the library using a method that indirectly checks for inclusion
let isGatsbyInLibrary = library.some(book => book.title === "The Great Gatsby");
console.log(`Is "The Great Gatsby" in the library? ${isGatsbyInLibrary}`);

// Borrow the first available book (remove it from the array after updating its status to false)
for (let i = 0; i < library.length; i++) {
  if (library[i].available) {
    library[i].available = false;
    let borrowedBook = library.shift();
    console.log(`Borrowed Book:`, borrowedBook);
    break;
  }
}

// Add a new book to the start of the library array using the unshift method
library.unshift({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true });

// Get a list of all book titles and combine them into a single string, with each title separated by a comma
let bookTitles = library.map(book => book.title).join(', ');
console.log(`Book Titles: ${bookTitles}`);

// Create a new array called newArrivals containing only the last two books in the library array using the slice method
let newArrivals = library.slice(-2);
console.log(`New Arrivals:`, newArrivals);

// Final state of the library array
console.log(`Final Library State:`, library);
