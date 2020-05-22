var unsortedArray = [];
var arrayLength = Number(window.prompt("Hello user! Please enter the length " +
  "of the array", ""));

for (let counter = 0; counter < arrayLength; counter++) {
  let elements = Number(window.prompt("Please enter some numbers", ""));
  unsortedArray.push(elements);
}

for (let index = 0; index < arrayLength - 1; index++) {
  let smallestElement = index;

  for (let secondIndex = index + 1; secondIndex < arrayLength; secondIndex++) {
    if (unsortedArray[secondIndex] < unsortedArray[smallestElement]) {
      smallestElement = secondIndex;
    }
  }

  let container = unsortedArray[smallestElement];
  unsortedArray[smallestElement] = unsortedArray[index];
  unsortedArray[index] = container;
}

var sortedArray = unsortedArray.join(" ");
console.log(sortedArray);
