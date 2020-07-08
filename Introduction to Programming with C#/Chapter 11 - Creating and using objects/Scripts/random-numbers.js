function generateRandomNumbersInclusive() {
  var min = 100;
  var max = 200;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printResult() {
  console.log(generateRandomNumbersInclusive());
}

for (let counter = 0; counter < 10; counter++) {
  generateRandomNumbersInclusive();
  printResult();
}
