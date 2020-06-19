var number = Number(window.prompt("User please enter a number", ""));
var arrayOfNumbers = new Array(20);

for (let index = 0; index < arrayOfNumbers.length; index++) {
  arrayOfNumbers[index] = Number(window.prompt("OK! Now please type the " +
    "elements of the array", ""));
}

function countAppearanceOfNumberInArray(number, arrayOfNumbers) {
  var counter = 0;

  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] === number) {
      counter++;
    }
  }

  return counter;
}

console.log("The number " + number + " appears in the given array " +
  countAppearanceOfNumberInArray(number, arrayOfNumbers) + " times.");
