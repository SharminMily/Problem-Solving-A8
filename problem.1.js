/* Filter out all females and return the names of the remaining people. */
const people = [
  { name: "Alinaaa", age: 20, gender: "female" },
  { name: "Billahhh", age: 29, gender: "male" },
  { name: "jihannn", age: 20, gender: "male" },
  { name: "Dianaaa", age: 10, gender: "female" }
];

function getMale() {
 const result = people.filter(p=> p.gender !== "female").map(p=> p.name)
 return result
}

//console.log(getMale());