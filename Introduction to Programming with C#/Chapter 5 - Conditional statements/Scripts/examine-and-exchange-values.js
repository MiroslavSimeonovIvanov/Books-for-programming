var firstNumber = Number(window.prompt("Please enter a number", ""));
var secondNumber = Number(window.prompt("Hello again user! Now please enter " +
  "a second number", ""));

console.log(`First number - ${firstNumber}`);
console.log(`Second number - ${secondNumber}`);

if (firstNumber > secondNumber) {
    var container = firstNumber;
    firstNumber = secondNumber;
    secondNumber = container;
}

console.log(`First number - ${firstNumber}`);
console.log(`Second number - ${secondNumber}`);
