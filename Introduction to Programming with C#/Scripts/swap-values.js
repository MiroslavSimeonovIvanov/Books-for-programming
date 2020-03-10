var firstNumber = 5;
var secondNumber = 10;
var container;

console.log("Before swap:\n" + "firstNumber = " + firstNumber + ";" +
  "\nsecondNumber = " + secondNumber + ";");

container = firstNumber;
firstNumber = secondNumber;
secondNumber = container;

console.log("After swap:\n" + "firstNumber = " + firstNumber + ";" +
  "\nsecondNumber = " + secondNumber + ";");
