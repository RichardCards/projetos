const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

let currentNumber = '';
let oldNumber = '';
let operation = null;

function clear() {
  result.value = '';
  currentNumber = '';
  oldNumber = '';
  operation = null;
}

function updateResult(value) {
  result.value = value;
}

function appendNumber(number) {
  if (result.value === '0') {
    result.value = number;
  } else {
    result.value += number;
  }
  currentNumber = result.value;
}

function setOperation(op) {
  operation = op;
  oldNumber = currentNumber;
  currentNumber = '';
  result.value = '';
}

function calculate() {
  let resultNumber = '';
  switch (operation) {
    case '+':
      resultNumber = parseFloat(oldNumber) + parseFloat(currentNumber);
      break;
    case '-':
      resultNumber = parseFloat(oldNumber) - parseFloat(currentNumber);
      break;
    case '*':
      resultNumber = parseFloat(oldNumber) * parseFloat(currentNumber);
      break;
    case '/':
      resultNumber = parseFloat(oldNumber) / parseFloat(currentNumber);
      break;
  }
  updateResult(resultNumber);
  operation = null;
  oldNumber = '';
  currentNumber = resultNumber;
}
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;
    switch (buttonText) {
        case 'C':
          clear();
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          setOperation(buttonText);
          break;
        case '=':
          calculate();
          break;
        default:
          appendNumber(buttonText);
      }});
    });