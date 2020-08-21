var text = window.prompt("User it would be nice if you enter some text", "");

function extractEmailsFromText(text) {
  var regularExpression = /([A-Za-z.\-+]+?)@(([A-Za-z]+\.)+([A-Za-z]{2,3}))/g;
  var emails = text.match(regularExpression);
  var result = emails.join("\n");

  return result;
}

function printResult() {
  console.log(extractEmailsFromText(text));
}

printResult();
