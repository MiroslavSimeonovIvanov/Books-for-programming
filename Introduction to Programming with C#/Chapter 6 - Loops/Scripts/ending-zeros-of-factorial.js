var numberN = Number(window.prompt("User please enter a number", ""));
var factorial = 1;
var counter = 0;

do {
  factorial *= numberN;
  numberN--;
} while (numberN > 0);

var slicedFactorial = factorial.toString().split("");
var factorialAsDigits = slicedFactorial.map(Number);

for (let index = factorialAsDigits.length - 1; index > 0; index--) {
  if (factorialAsDigits[index] !== 0) {
    break;
  }

  if (factorialAsDigits[index] === 0) {
    counter++;
  }
}

console.log(`N! = ${factorial} -> ${counter}`);
