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

let arr;
let result;

const floatBtn = document.querySelector(".float");

buttons.addEventListener("click", (event) => {
  switch (event.target.classList[0]) {
    case "num":
      populateDisplay(event.target.textContent);
      break;
    case "op":
      if (display.textContent && !display.textContent.includes(" ")) {
        if (display.textContent.split(" ").length !== 3) {
          populateDisplay(event.target.textContent);
          floatBtn.removeAttribute("disabled");
        } else {
          arr = display.textContent.split(" ");
          result = displayToOperate(arr);
          clearDisplay();
          populateDisplay(result + event.target.textContent);
          floatBtn.removeAttribute("disabled");
        }
      }
      break;
    case "equals":
      if (display.textContent.split(" ").length === 3) {
        arr = display.textContent.split(" ");
        result = displayToOperate(arr);
        clearDisplay();
        populateDisplay(result);
        floatBtn.removeAttribute("disabled")
      }
      break; 
    case "clear":
      clearDisplay();
      break;
    case "float":
      if (!display.textContent) {
        display.textContent += "0.";
        floatBtn.disabled = "true";
      } else {
        display.textContent += ".";
        floatBtn.disabled = "true";
      }
  }
});

function displayToOperate(arr) {
  if (arr[1] === "/" && arr[2] === "0") {
    return "Oye, Parker. Estas demente";
  }
  return operate(Number(arr[0]), arr[1], Number(arr[2]));
}
