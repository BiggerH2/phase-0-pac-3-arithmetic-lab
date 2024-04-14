// Addition Function
function add(a, b) {
    return a + b;
  }
  
  // Subtraction Function
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplication Function
  function multiply(a, b) {
    return a * b;
  }
  
  // Division Function
  function divide(a, b) {
    return a / b;
  }
  
  // Increment Function
  function increment(n) {
    return ++n;
  }
  
  // Decrement Function
  function decrement(n) {
    return --n;
  }
  
  // Convert String to Integer Function
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Preserve Decimal Function
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
  };
  