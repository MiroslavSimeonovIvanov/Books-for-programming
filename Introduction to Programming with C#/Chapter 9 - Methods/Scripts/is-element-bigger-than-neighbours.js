var position = Number(window.prompt("Please enter the position of the " +
  "element", ""));
var arrayOfNumbers = new Array(10);

for (let index = 0; index < arrayOfNumbers.length; index++) {
  arrayOfNumbers[index] = Number(window.prompt("Hello Sir/Madame! Would you " +
    "mind entering the elements of the array", ""));
}

function isElementBiggerThanItsNeighbours(position, arrayOfNumbers) {
  for (let index = position; index < arrayOfNumbers.length; index++) {
    if ((arrayOfNumbers[index - 1] < arrayOfNumbers[index]) &&
        arrayOfNumbers[index] > arrayOfNumbers[index + 1]) {
      return true;
    }
  }
}

console.log("Is the element bigger than it's neighbours?" + "\n" +
  isElementBiggerThanItsNeighbours(position, arrayOfNumbers));
