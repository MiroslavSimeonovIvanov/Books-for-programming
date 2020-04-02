var firstNumber = Number(window.prompt("Hi sir/madame! Would you mind " +
  "typing a number", ""));
var secondNumber = Number(window.prompt("Nice job! Now please enter the " +
  "second number", ""));
var thirdNumber = Number(window.prompt("Please enter the third number", ""));
var fourthNumber = Number(window.prompt("The fourth number is waiting to " +
  "be entered", ""));
var fifthNumber = Number(window.prompt("I'm really sorry but I need one " +
  "last number", ""));
var biggestNumber = Math.max(firstNumber, secondNumber, thirdNumber,
  fourthNumber, fifthNumber);

console.log(`The biggest number is ${biggestNumber}.`);
