/* -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */

// Step 1: Individual functions

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}


function composedFunction(num) {
  const squared = square(num);    
  const doubled = double(squared); 
  const finalResult = addFive(doubled);
  return finalResult;
}


// console.log(composedFunction(3)); 
