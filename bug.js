function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(7, 2)); // 14
console.log(divide(15, 3)); // 5
console.log(divide(10,0)); // throws error