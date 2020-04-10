var firstNumber = Number(window.prompt("User please enter a number", ""));
var secondNumber = Number(window.prompt("Now please enter again a number", ""));
var thirdNumber = Number(window.prompt("OK! One last time please enter a " +
  "number", ""));

if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    console.log("The product is equal to zero.");
}

if ((firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) ||
    (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) ||
    (firstNumber < 0 && secondNumber > 0 && thirdNumber < 0) ||
    (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0)) {
    console.log("The sign of the product is + .");
}

if ((firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) ||
    (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0) ||
    (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) ||
    (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0)) {
    console.log("The sign of the product is - .");
}
