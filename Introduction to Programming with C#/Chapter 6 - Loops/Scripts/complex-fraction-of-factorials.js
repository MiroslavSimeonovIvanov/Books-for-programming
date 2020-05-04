var numberN = Number(window.prompt("Please enter a number", ""));
var numberK = Number(window.prompt("Now please enter a second number", ""));
var factorialOfN = 1;
var factorialOfK = 1;
var factorialOfNMinusK = 1;
var numberNMinusNumberK = numberN - numberK;
var fractionOfFactorials;

while (true) {
  if (numberN <= 1) {
    break;
  }

  factorialOfN *= numberN;
  numberN--;
}

while (true) {
  if (numberK <= 1) {
    break;
  }

  factorialOfK *= numberK;
  numberK--;
}

while (true) {
  if (numberNMinusNumberK <= 1) {
    break;
  }

  factorialOfNMinusK *= numberNMinusNumberK;
  numberNMinusNumberK--;
}

fractionOfFactorials = (factorialOfN * factorialOfK) / factorialOfNMinusK;
console.log(`N!*K!/(N-K)! = ${fractionOfFactorials}`);
