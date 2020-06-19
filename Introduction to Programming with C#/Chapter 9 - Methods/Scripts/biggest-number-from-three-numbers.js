var firstNumber = Number(window.prompt("Please enter the first number", ""));
var secondNumber = Number(window.prompt("Please enter the second number", ""));
var thirdNumber = Number(window.prompt("Please enter the third number", ""));

function getMax(firstNumber, secondNumber) {
  var biggerNumber = firstNumber;

  if (secondNumber > firstNumber) {
    biggerNumber = secondNumber;
  }

  return biggerNumber;
}

var biggerFromTwo = getMax(firstNumber, secondNumber);
var biggestFromThree = getMax(biggerFromTwo, thirdNumber);

console.log(`The biggest of the three numbers is ${biggestFromThree}.`);
