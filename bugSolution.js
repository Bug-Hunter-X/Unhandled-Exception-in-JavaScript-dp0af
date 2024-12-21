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

function calculate(operation, a, b) {
  try {
    return operation(a, b);
  } catch (error) {
    console.error('Error:', error.message);
    return null; 
  }
}

console.log(calculate(add, 5, 3)); // 8
console.log(calculate(subtract, 10, 4)); // 6
console.log(calculate(multiply, 7, 2)); // 14
console.log(calculate(divide, 15, 3)); // 5
console.log(calculate(divide, 10, 0)); // Error: Cannot divide by zero
console.log(calculate(add, 10, 'abc')); //Error: a is not a number