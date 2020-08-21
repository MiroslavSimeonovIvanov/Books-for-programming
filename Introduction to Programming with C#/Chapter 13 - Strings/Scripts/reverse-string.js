var inputString = window.prompt("Hello user! Please enter a string", "");

function reverseString(inputString) {
  var reversedString = inputString.split("").reverse().join("");
  return reversedString;
}

function printResult() {
  console.log(reverseString(inputString));
}

printResult();
