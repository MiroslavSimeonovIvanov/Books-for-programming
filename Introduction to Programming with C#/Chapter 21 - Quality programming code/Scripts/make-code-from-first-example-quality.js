var inputNumber = Number(window.prompt("Hello, user! Please enter 8, 9 or 10",
  ""));
var firstNumber = 5;
var secondNumber;

for (let number = 0; number < firstNumber; number++) {
  console.log(`${number} - f`);
}

switch (inputNumber) {
  case 8:
    console.log(inputNumber);
    break;
  case 9:
    firstNumber = 0;
    break;
  case 10:
    secondNumber = 5;
    console.log(secondNumber);
    break;
  default:
    console.log("You have entered invalid number!");
}
