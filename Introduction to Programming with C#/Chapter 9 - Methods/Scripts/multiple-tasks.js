var userChoice = Number(window.prompt("------ Menu ------\n" +
  " 1 - Reverse\n 2 - Average\n 3 - Equation\n\nPlease enter 1, 2 or 3", ""));

switch (userChoice) {
  case 1:
    var number = window.prompt("Hello, user! Please type a number", "");

    function reverseDigitsOfNumber(number) {
      if (number > 0) {
        var reversedNumber = number.split("").reverse().join("");
        return reversedNumber;
      }
    }

    console.log(reverseDigitsOfNumber(number));
    break;
  case 2:
    var sequenceOfNumbers = window.prompt("Hey! Please enter a few " +
      "numbers", "");
    var regularExpression = /\d+/g;
    var numbersAsString = sequenceOfNumbers.match(regularExpression);
    var arrayOfNumbers = numbersAsString.map(Number);

    function calculateAverageOfNumbers(arrayOfNumbers) {
      var count = arrayOfNumbers.length;

      if (count > 0) {
        var sum = 0;

        for (let index = 0; index < count; index++) {
          sum += arrayOfNumbers[index];
        }

        var average = sum / count;
        return average;
      }
    }

    console.log(calculateAverageOfNumbers(arrayOfNumbers));
    break;
  case 3:
    var coefficientA = Number(window.prompt("a = "));
    var coefficientB = Number(window.prompt("b = "));

    function solveLinearEquation(coefficientA, coefficientB) {
      if (coefficientA > 0) {
        var rootX = -coefficientB / coefficientA;
        return rootX;
      }
    }

    console.log(solveLinearEquation(coefficientA, coefficientB));
    break;
  default:
    console.log("Please enter a valid number!");
}
