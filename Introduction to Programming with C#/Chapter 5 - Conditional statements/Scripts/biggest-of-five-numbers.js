var firstNumber = Number(window.prompt("Hi sir/madame! Would you mind typing " +
  "a number", ""));
var secondNumber = Number(window.prompt("Nice job! Now please enter second " +
  "number", ""));
var thirdNumber = Number(window.prompt("Please enter third number", ""));
var fourthNumber = Number(window.prompt("Fourth number is waiting to be " +
  "entered", ""));
var fifthNumber = Number(window.prompt("I'm really sorry but I need one last " +
  "number", ""));

if (firstNumber > secondNumber && firstNumber > thirdNumber
    && firstNumber > fourthNumber && firstNumber > fifthNumber) {
  console.log("The first number is the biggest.");
}

if (secondNumber > firstNumber && secondNumber > thirdNumber
    && secondNumber > fourthNumber && secondNumber > fifthNumber) {
  console.log("The second number is the biggest.");
}

if (thirdNumber > firstNumber && thirdNumber > secondNumber
    && thirdNumber > fourthNumber && thirdNumber > fifthNumber) {
  console.log("The third number is the biggest.");
}

if (fourthNumber > firstNumber && fourthNumber > secondNumber
    && fourthNumber > thirdNumber && fourthNumber > fifthNumber) {
  console.log("The fourth number is the biggest.");
}

if (fifthNumber > firstNumber && fifthNumber > secondNumber
    && fifthNumber > thirdNumber && fifthNumber > fourthNumber) {
  console.log("The fifth number is the biggest.");
}
