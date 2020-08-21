var stringData = window.prompt("User please enter a string with max length 20",
  "");
var stringDataLength = stringData.length;

function addAsterisks(stringData, stringDataLength) {
  const asterisk = "*";
  var stringDataResult;

  if (stringDataLength < 20) {
    stringDataResult = stringData.padEnd(20, asterisk);
  }

  return stringDataResult;
}

function printResult() {
  console.log(`${addAsterisks(stringData, stringDataLength)}`);
}

printResult();
