var length = Number(window.prompt("Please enter the length of the two " +
  "arrays", ""));
var firstArray = [];
var secondArray = [];

for (let counter = 0; counter < length; counter++) {
  let elementsOfArray = Number(window.prompt("Please enter the elements of " +
    "the first array", ""));
  firstArray.push(elementsOfArray);
}

for (let counter = 0; counter < length; counter++) {
  let elementsOfArray = Number(window.prompt("Now enter the elements of the " +
    "second array", ""));
  secondArray.push(elementsOfArray);
}

var areEqual = JSON.stringify(firstArray) === JSON.stringify(secondArray);
console.log(areEqual);
