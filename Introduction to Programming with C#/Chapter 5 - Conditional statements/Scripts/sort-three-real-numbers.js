var firstNumber = Number(window.prompt("User please type a number", ""));
var secondNumber = Number(window.prompt("OK! Now please type a second " +
  "number", ""));
var thirdNumber = Number(window.prompt("I'm really sorry but I need one last " +
  "third number", ""));

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
  if (secondNumber < thirdNumber) {
    console.log(`${thirdNumber} ${secondNumber} ${firstNumber}`);
  }
}

if (firstNumber > secondNumber && firstNumber < thirdNumber) {
  if (secondNumber < thirdNumber) {
    console.log(`${thirdNumber} ${firstNumber} ${secondNumber}`);
  }
}

if (firstNumber < secondNumber && firstNumber > thirdNumber) {
  if (thirdNumber < secondNumber) {
    console.log(`${secondNumber} ${firstNumber} ${thirdNumber}`);
  }
}

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
  if (thirdNumber < secondNumber) {
    console.log(`${secondNumber} ${thirdNumber} ${firstNumber}`);
  }
}

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  if (thirdNumber > secondNumber) {
    console.log(`${firstNumber} ${thirdNumber} ${secondNumber}`);
  }
}

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  if (secondNumber > thirdNumber) {
    console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);
  }
}
