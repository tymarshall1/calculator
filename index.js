let operators = "";
let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let total = "";

const operation = document.querySelector("#operation");

document.querySelectorAll("#number").forEach((number) =>
  number.addEventListener("click", () => {
    if (operators === "") {
      firstNumber += number.textContent;
      operation.textContent = firstNumber;
      console.log("first", firstNumber);
      console.log("sec", secondNumber);
    } else {
      secondNumber += number.textContent;
      operation.textContent = secondNumber;
      console.log("first", firstNumber);
      console.log("sec", secondNumber);
    }
  })
);

document
  .querySelectorAll("#operator")
  .forEach((operator) =>
    operator.addEventListener("click", () => (operators = operator.textContent))
  );

document
  .querySelector("#equals")
  .addEventListener(
    "click",
    () =>
      (operation.textContent = operate(
        operators,
        parseInt(firstNumber),
        parseInt(secondNumber)
      ))
  );

document.querySelector("#clear").addEventListener("click", () => {
  operation.textContent = "0";
  operators = "";
  firstNumber = "";
  secondNumber = "";
});

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

// function updateScreen() {
//   document.querySelectorAll("button").forEach((button) =>
//     button.addEventListener("click", () => {
//       displayValue += button.textContent;
//       operation.textContent = displayValue;
//     })
//   );
// }

// updateScreen();
