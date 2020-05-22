var arrayOfNumbers = [];
var arrayLength = Number(window.prompt("User please enter the length of the " +
  "array", ""));

for (let counter = 0; counter < arrayLength; counter++) {
  var elements = Number(window.prompt("Now enter some numbers", ""));
  arrayOfNumbers.push(elements);
}

arrayOfNumbers.sort((a, b) => a - b);

var minimum = 0;
var middle;
var maximum = arrayLength - 1;
var targetValue = Number(window.prompt("Please enter the target value", ""));

if (maximum < minimum) {
  console.log(-1);
}

while (maximum >= minimum) {
  middle = Math.floor((minimum + maximum) / 2);

  if (arrayOfNumbers[middle] < targetValue) {
    minimum = middle + 1;
  } else if (arrayOfNumbers[middle] > targetValue) {
    maximum = middle - 1;
  } else {
    console.log(`arr[${middle}] is ${targetValue}`);
    break;
  }
}
