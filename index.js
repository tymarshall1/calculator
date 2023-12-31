let operators = "";
let firstNumber = "";
let secondNumber = "";
let total = "";

const operation = document.querySelector("#operation");

document.querySelectorAll("#number").forEach((number) =>
  number.addEventListener("click", () => {
    if (operators === "") {
      if (firstNumber.charAt(0) === "0" && firstNumber.charAt(1) !== ".") {
        firstNumber = "";
      }
      firstNumber += number.textContent;
      operation.textContent = firstNumber;
    } else {
      if (secondNumber.charAt(0) === "0" && secondNumber.charAt(1) !== ".") {
        secondNumber = "";
      }
      secondNumber += number.textContent;
      operation.textContent = secondNumber;
    }
  })
);

document.querySelector("#decimal").addEventListener("click", (e) => {
  if (firstNumber.includes(".") || secondNumber.includes(".")) {
    return;
  } else if (operators === "") {
    firstNumber = handleDecimal(firstNumber, e);
    operation.textContent = firstNumber;
  } else {
    secondNumber = handleDecimal(secondNumber, e);
    operation.textContent = secondNumber;
  }
});

document.querySelectorAll("#operator").forEach((operator) =>
  operator.addEventListener("click", () => {
    if (operators === "") {
      if (firstNumber === "") {
        return;
      }
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
  if (total === "") {
    operationPreview();
    if (firstNumber === "") {
      return;
    }
    operation.textContent = firstNumber;
    return;
  } else if (secondNumber === "") {
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

document.querySelector("#backspace").addEventListener("click", handleBackspace);

function handleBackspace() {
  if (firstNumber !== "") {
    firstNumber = handleBackspaceHelper(firstNumber);
    operation.textContent = firstNumber;
    return;
  } else if (secondNumber !== "") {
    secondNumber = handleBackspaceHelper(secondNumber);
    operation.textContent = secondNumber;
    return;
  } else if (total !== "") {
    total = handleBackspaceHelper(total);
    operation.textContent = total;
    return;
  }
}

function handleBackspaceHelper(num) {
  num = num.toString().slice(0, -1);
  if (num === "") {
    return "0";
  } else return num;
}

function handleDecimal(num, e) {
  if (num === "") {
    num += "0" + e.target.textContent;
  } else {
    num += e.target.textContent;
  }
  return num;
}

function operationPreview() {
  const previewOfOperation = document.querySelector("#previewOfOperation");
  if (secondNumber === "" && total === "") {
    if (firstNumber === "") {
      previewOfOperation.textContent = "0";
    } else {
      previewOfOperation.textContent = firstNumber;
    }
  } else if (secondNumber === "") {
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
