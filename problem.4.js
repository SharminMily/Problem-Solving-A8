/* -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

const cars = [
  { make: "Toyota", model: "Corolla", year: 2001 },
  { make: "Honda", model: "Civic", year: 2025 },
  { make: "Tesla", model: "Model 3", year: 2015 },
  { make: "Ford", model: "Fiesta", year: 2020 },
];

function sortCarsByYear() {
    const result = cars.sort((a, b) => a.year - b.year);
    return result 
}
// console.log(sortCarsByYear());