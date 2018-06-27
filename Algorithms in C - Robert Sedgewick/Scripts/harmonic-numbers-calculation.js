var nthHarmonicNumber = Number(window.prompt("Please enter the n-th harmonic number", ""));

function calculateHarmonicNumbers(nthHarmonicNumber) {
  "use strict";

  const eulerMascheroniConstant = 0.577215664;
  var result = Math.log(nthHarmonicNumber) + eulerMascheroniConstant;

  return result;
}

function printResult() {
  "use strict";

  console.log(calculateHarmonicNumbers(nthHarmonicNumber));
}

printResult();
