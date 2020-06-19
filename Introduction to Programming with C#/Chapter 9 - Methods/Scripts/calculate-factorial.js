var numberN = Number(window.prompt("User please type a number from " +
  "[1...100]", ""));

function calculateFactorial(numberN) {
  var factorialOfN = 1;

  while (true) {
    if (numberN <= 1) {
      break;
    }

    factorialOfN *= numberN;
    numberN--;
  }

  return factorialOfN;
}

console.log("n = " + numberN + "\n" + "n! = " + calculateFactorial(numberN));
