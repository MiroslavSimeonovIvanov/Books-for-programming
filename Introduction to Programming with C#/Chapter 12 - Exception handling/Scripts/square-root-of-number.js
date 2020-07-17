function FormatException(message) {
  this.message = message;
  this.name = "FormatException";
}

function calculateSquareRoot(number) {
  var squareRoot = Math.sqrt(number);

  if (number === undefined || number < 0) {
    throw new FormatException("Invalid Number");
  } else {
    return squareRoot;
  }
}

try {
  var number = Number(window.prompt("Please enter a positive integer number",
    ""));
  var squareRootOfNumber = calculateSquareRoot(number);

  console.log(squareRootOfNumber);
} catch (exception) {
  console.error(exception.message, exception.name);
} finally {
  console.log("Good Bye");
}
