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
  return a / b;
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}

const display = document.querySelector("#display");

function populateDisplay(digit) {
  display.textContent += digit;
}

function clearDisplay() {
  display.textContent = "";
}

const buttons = document.querySelector(".bot");

buttons.addEventListener("click", (event) => {
  switch (event.target.classList[0]) {
    case "num":
      populateDisplay(event.target.textContent);
      break;
    case "op":
      populateDisplay(event.target.textContent);
      break;
  }
});
