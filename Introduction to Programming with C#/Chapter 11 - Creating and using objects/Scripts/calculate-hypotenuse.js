var sideA = Number(window.prompt("a = ", ""));
var sideB = Number(window.prompt("b = ", ""));

function calculateHypotenuse(sideA, sideB) {
  var hypotenuse = Math.hypot(sideA, sideB);
  return hypotenuse;
}

function printResult() {
  console.log(`c = ${calculateHypotenuse(sideA, sideB)}`);
}

printResult();
