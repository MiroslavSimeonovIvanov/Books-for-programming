var text = window.prompt("Please enter some text", "");
var regularExpression = /(<upcase>)(.*?)(<\/upcase>)/g;
var textResult = text.replace(regularExpression, replacer);

function replacer(match, p1, p2, p3) {
  return p2.toUpperCase();
}

function printResult(textResult) {
  console.log(textResult);
}

printResult(textResult);
