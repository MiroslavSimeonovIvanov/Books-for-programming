var htmlDocument = window.prompt("Please enter HTML document with hyperlinks",
  "");
var regularExpression = /(<a\shref="(.+?)">)(.+?)(<\/a>)/g;
var htmlDocumentResult = htmlDocument.replace(regularExpression, replacer);

function replacer(match, p1, p2, p3, p4) {
  var result = "[URL=" + p2 + "]" + p3 + "[/URL]";
  return result;
}

function printResult(htmlDocumentResult) {
  console.log(htmlDocumentResult);
}

printResult(htmlDocumentResult);
