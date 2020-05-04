// Euclid's algorithm
var firstNumber = Number(window.prompt("User please enter a number", ""));
var secondNumber = Number(window.prompt("Now please enter again a number", ""));
var container;

console.log(`GCD(${firstNumber}, ${secondNumber})`);

while (secondNumber !== 0) {
  container = secondNumber;
  secondNumber = firstNumber % secondNumber;
  firstNumber = container;
}

console.log(`${firstNumber}`);
