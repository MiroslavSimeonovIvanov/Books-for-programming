var sequenceOfCharacters = window.prompt("User please enter a string", "");

function replaceMoreThanOneSpaceWithOnlyOne(sequenceOfCharacters) {
  "use strict";

  var regularExpression = /\s+/g;
  var result = sequenceOfCharacters.replace(regularExpression, " ");

  return result;
}

function printResult() {
  "use strict";

  console.log(replaceMoreThanOneSpaceWithOnlyOne(sequenceOfCharacters));
}

printResult();
