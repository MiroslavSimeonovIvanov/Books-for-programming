var firstNumber = Number(window.prompt("Please enter integer number", ""));
var secondNumber = Number(window.prompt("One more integer number", ""));
var counter = 0;

for (let numbers = firstNumber; numbers <= secondNumber; numbers++) {
  if (numbers % 5 === 0) {
    counter++;
  }
}

console.log(`(${firstNumber}, ${secondNumber}) = ${counter}`);
