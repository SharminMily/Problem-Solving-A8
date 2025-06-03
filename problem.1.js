/* -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result */
const people = [
  { name: "Alinaaa", age: 20, gender: "female" },
  { name: "Billahhh", age: 29, gender: "male" },
  { name: "jihannn", age: 20, gender: "male" },
  { name: "Dianaaa", age: 10, gender: "female" }
];

function getMale() {
 const result = 
    people.filter(p=> p.gender !== "female")
   .map(p=> p.name)
 return result
}

// console.log(getMale());