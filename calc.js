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

function operate(a, op, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
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
      if (display.textContent) {
        populateDisplay(event.target.textContent);
      }
      break;
    case "equals":
      let result = displayToOperate();
      clearDisplay();
      populateDisplay(result)
      break;
    case "clear":
      clearDisplay();
      break; 
  }
});

function displayToOperate (){
  const arr = display.textContent.split(" ");
  return operate(Number(arr[0]), arr[1], Number(arr[2]));
}