/* Extract only the titles from an array of book objects. */
const books = [  
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "9999", author: "George Orwell", year: 1949 },
];

function Name(){
    const result = books.map(b => b.title)
        return result;

}

// console.log(Name());