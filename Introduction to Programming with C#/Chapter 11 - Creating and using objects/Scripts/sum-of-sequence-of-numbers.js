var sequenceOfNumbers = window.prompt("Eheee! User please enter a sequence " +
  "of numbers", "");
var regularExpression = /\d+/g;
var numbersAsString = sequenceOfNumbers.match(regularExpression);
var arrayOfNumbers = numbersAsString.map(Number);

function calculateSumOfSequenceOfNumbers(arrayOfNumbers) {
  var sum = 0;

  for (let index = 0; index < arrayOfNumbers.length; index++) {
    sum += arrayOfNumbers[index];
  }

  return sum;
}

function printResult() {
  console.log(calculateSumOfSequenceOfNumbers(arrayOfNumbers));
}

printResult();
