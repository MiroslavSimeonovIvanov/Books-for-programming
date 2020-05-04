var numberN = Number(window.prompt("Hi sir/madame! Would you mind " +
  "typing a number", ""));
var factorialOfN = 1;
var factorialOfNPlusOne = 1;
var factorialOfTwoN = 1;
var numberNPlusOne = numberN + 1;
var twoMultipliedByN = 2 * numberN;
var catalanNumbers;

while (true) {
  if (numberN <= 1) {
    break;
  }

  factorialOfN *= numberN;
  numberN--;
}

while (true) {
  if (numberNPlusOne <= 1) {
    break;
  }

  factorialOfNPlusOne *= numberNPlusOne;
  numberNPlusOne--;
}

while (true) {
  if (twoMultipliedByN <= 1) {
    break;
  }

  factorialOfTwoN *= twoMultipliedByN;
  twoMultipliedByN--;
}

catalanNumbers = factorialOfTwoN / (factorialOfNPlusOne * factorialOfN);
console.log(`Cn = ${catalanNumbers}`);
