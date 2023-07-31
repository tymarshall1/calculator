let operators = "";
let firstNumber = "";
let secondNumber = "";
let total = "";

const operation = document.querySelector("#operation");

document.querySelectorAll("#number").forEach((number) =>
  number.addEventListener("click", () => {
    if (operators === "") {
      firstNumber += number.textContent;
      operation.textContent = firstNumber;
    } else {
      secondNumber += number.textContent;
      operation.textContent = secondNumber;
    }
  })
);

document.querySelectorAll("#operator").forEach((operator) =>
  operator.addEventListener("click", () => {
    if (operators === "") {
      operators = operator.textContent;
      total = firstNumber;
      operationPreview();
    } else {
      if (secondNumber === "") {
        operators = operator.textContent;
        operationPreview();
        return;
      }
      operationPreview();
      total = operate(operators, parseInt(total), parseInt(secondNumber));
      operation.textContent = total;
      operators = operator.textContent;
      secondNumber = "";
    }
  })
);

document.querySelector("#equals").addEventListener("click", () => {
  if (
    total === undefined ||
    firstNumber === undefined ||
    secondNumber === undefined ||
    total === ""
  ) {
    operation.textContent = "0";
    return;
  }
  if (secondNumber === "") {
    return;
  }
  operationPreview();
  total = operate(operators, parseInt(total), parseInt(secondNumber));
  secondNumber = "";
  operation.textContent = total;
});

document.querySelector("#clear").addEventListener("click", () => {
  operation.textContent = "0";
  clearInputs();
  operationPreview();
});

function operationPreview() {
  const previewOfOperation = document.querySelector("#previewOfOperation");
  if (secondNumber === "") {
    previewOfOperation.textContent = `${total} ${operators}`;
  } else {
    previewOfOperation.textContent = `${total} ${operators} ${secondNumber} =`;
  }
}

function clearInputs() {
  operators = "";
  firstNumber = "";
  secondNumber = "";
  total = "";
}

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
