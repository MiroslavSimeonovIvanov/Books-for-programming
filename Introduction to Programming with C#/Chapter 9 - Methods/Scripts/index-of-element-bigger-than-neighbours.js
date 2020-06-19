var arrayOfNumbers = new Array(10);

for (let index = 0; index < arrayOfNumbers.length; index++) {
  arrayOfNumbers[index] = Number(window.prompt("Hello Sir/Madame! Would you " +
    "mind entering the elements of the array", ""));
}

function getIndexOfElementBiggerThanItsNeighbours(arrayOfNumbers) {
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if ((arrayOfNumbers[index - 1] < arrayOfNumbers[index]) &&
        arrayOfNumbers[index] > arrayOfNumbers[index + 1]) {
      return index;
    }
  }

  return -1;
}

console.log("Position of the element bigger than it's neighbours:" + "\n" +
  getIndexOfElementBiggerThanItsNeighbours(arrayOfNumbers));
