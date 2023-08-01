let operators = "";
let firstNumber = "";
let secondNumber = "";
let total = "";

//bug is when click = multiple times and try typing numbers

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

document.querySelector("#decimal").addEventListener("click", (e) => {
  if (firstNumber.includes(".") || secondNumber.includes(".")) {
    return;
  } else if (operators === "") {
    firstNumber += e.target.textContent;
    operation.textContent = firstNumber;
  } else {
    secondNumber += e.target.textContent;
    operation.textContent = secondNumber;
  }
});

document.querySelectorAll("#operator").forEach((operator) =>
  operator.addEventListener("click", () => {
    if (operators === "") {
      operators = operator.textContent;
      total = firstNumber;
      firstNumber = "";
      operationPreview();
    } else {
      if (secondNumber === "") {
        operators = operator.textContent;
        operationPreview();
        return;
      }
      operationPreview();
      total = operate(operators, parseFloat(total), parseFloat(secondNumber));
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
  total = operate(operators, parseFloat(total), parseFloat(secondNumber));
  secondNumber = "";
  operation.textContent = total;
});

document.querySelector("#clear").addEventListener("click", () => {
  operation.textContent = "0";
  clearInputs();
  operationPreview();
});

document.querySelectorAll("button").forEach((button) => {
  if (button.disabled === true) {
    button.style.pointerEvents = "none";
  }
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
