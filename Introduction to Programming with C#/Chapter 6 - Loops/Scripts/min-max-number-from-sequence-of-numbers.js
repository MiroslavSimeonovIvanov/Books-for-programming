var sequenceLength = Number(window.prompt("Please enter the length of the " +
  "sequence", ""));
var minNumber = sequenceLength;
var maxNumber = 0;

for (var index = 1; index <= sequenceLength; index++) {
  var number = Number(window.prompt("", ""));

  if (number < minNumber) {
    minNumber = number;
  }

  if (number > maxNumber) {
    maxNumber = number;
  }
}

console.log(`The smallest number from the sequence is ${minNumber}.`);
console.log(`The biggest one is ${maxNumber}.`);
