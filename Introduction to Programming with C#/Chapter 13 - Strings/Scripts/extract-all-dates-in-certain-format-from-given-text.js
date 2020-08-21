var text = window.prompt("Enter some text", "");

function extractDatesFromText(text) {
  var regularExpression = /\d{1,2}\.\d{1,2}\.\d{4}/g;
  var dates = text.match(regularExpression);
  var result = dates.join("\n");

  return result;
}

function printResult() {
  console.log(extractDatesFromText(text));
}

printResult();
