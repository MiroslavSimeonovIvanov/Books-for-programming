var start = Number(window.prompt("User please enter a number", ""));
var end = Number(window.prompt("Again enter a number", ""));

function readNumber(start, end) {
  for (let counter = 0; counter < 10; counter++) {
    try {
      var number = Number(window.prompt("Hello, user! Please enter a number",
        ""));

      if (number < start || number > end) {
        throw new RangeError("The argument must be between " + start +
          " and " + end + ".");
      }
    } catch (exception) {
      if (exception instanceof RangeError) {
        console.error(exception.message, exception.name);
      }
    }
  }
}

readNumber(start, end);
