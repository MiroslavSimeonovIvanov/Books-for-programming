var numberN = Number(window.prompt("User please type a number", ""));
var numberX = Number(window.prompt("OK! Now please type a second " +
  "number", ""));
var factorialOfN = 1;
var xPowerToN = Math.pow(numberX, numberN);
var sumOfFactorials;

while (true) {
  if (numberN <= 1) {
    break;
  }

  factorialOfN *= numberN;
  numberN--;
}

sumOfFactorials = factorialOfN / xPowerToN;
console.log(`S = ${sumOfFactorials}`);
