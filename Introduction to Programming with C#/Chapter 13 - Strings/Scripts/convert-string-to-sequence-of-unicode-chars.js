var inputString = window.prompt("Enter a string", "");

function convertStrToSeqOfUnicodeChars(inputString) {
  var arrayOfUnicodeChars = inputString.split("")
    .map((char) => char.charCodeAt(0).toString(16));
  var outputString = [];
  var result;

  arrayOfUnicodeChars.forEach((element) => {
    outputString.push("\\u0" + element);
  });

  result = outputString.join("");
  return result;
}

function printResult() {
  console.log(convertStrToSeqOfUnicodeChars(inputString));
}

printResult();
