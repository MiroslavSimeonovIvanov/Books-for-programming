var sequenceOfCharacters = window.prompt("Hello user! Please type a string", "");

function checkIfItIsPalindrome(sequenceOfCharacters) {
  "use strict";

  var regularExpression = /[^A-Za-z0-9]/g;
  var lowerCaseString = sequenceOfCharacters.toLowerCase().replace(regularExpression, "");
  var reversedString = lowerCaseString.split("").reverse().join("");
  var result = lowerCaseString === reversedString;

  return result;
}

function printResult() {
  "use strict";

  console.log(checkIfItIsPalindrome(sequenceOfCharacters));
}

printResult();
