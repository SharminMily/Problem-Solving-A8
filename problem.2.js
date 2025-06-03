/* -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */
const books = [  
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "9999", author: "George Orwell", year: 1949 },
];

function getBookTitles(){
   return books.map(b => b.title);

}

// console.log(getBookTitles());