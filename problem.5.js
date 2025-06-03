/* -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const people = [
  { name: "Alinaaa", age: 20 },
  { name: "Billahhh", age: 29 },
  { name: "Jihannn", age: 20 },
];

function updateAgeByName(nameToFind, newAge) {
  for (let person of people) {
    if (person.name === nameToFind) {
      person.age = newAge; 
      break; 
    }
  }

  
//   console.log(people);
}

updateAgeByName("Billahhh", 35);
