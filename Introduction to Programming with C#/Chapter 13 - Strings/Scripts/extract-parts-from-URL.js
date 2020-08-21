var url = window.prompt("Please enter an URL", "");

function isNotEmptyString(element) {
  if (element !== "") {
    return element;
  }
}

function extractPartsFromURL(url) {
  var regularExpression =
    /(http|https|ftp|mailto)\:\/\/([A-Za-z0-9\-\.]+\.[A-Za-z]{2,3})(\/\S*)?/igm;
  var partsFromUrl = url.split(regularExpression);

  partsFromUrl = partsFromUrl.filter(isNotEmptyString);
  return partsFromUrl;
}

function printResult() {
  console.log(extractPartsFromURL(url));
}

printResult();
