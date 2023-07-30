let operator = "";
let firstNumber = 0;
let secondNumber = 0;

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function operate(operator, numberOne, numberTwo) {
  switch (operator) {
    case "+":
      return add(numberOne, numberTwo);
    case "-":
      return subtract(numberOne, numberTwo);
    case "*":
      return multiply(numberOne, numberTwo);
    case "/":
      return divide(numberOne, numberTwo);
  }
}
