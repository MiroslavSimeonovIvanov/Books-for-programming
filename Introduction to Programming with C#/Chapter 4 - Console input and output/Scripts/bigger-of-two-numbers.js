var firstNumber = Number(window.prompt("Please enter a number", ""));
var secondNumber = Number(window.prompt("Now please enter a second " +
  "number", ""));
var biggerNumber = Math.max(firstNumber, secondNumber);

console.log(`The bigger number is ${biggerNumber}.`);
