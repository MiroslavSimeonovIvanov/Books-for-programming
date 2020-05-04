var numberN = Number(window.prompt("Please enter a number", ""));
var numberK = Number(window.prompt("Enter again a number", ""));
var factorialOfN = 1;
var factorialOfK = 1;
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

fractionOfFactorials = factorialOfN / factorialOfK;
console.log(`N!/K! = ${fractionOfFactorials}`);
