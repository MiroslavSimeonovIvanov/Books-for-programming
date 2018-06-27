const numberN = 10000;

function quickUnion() {
  "use strict";

  var number;
  var innerNumber;
  var objectP;
  var objectQ;
  var variableT;
  var arrayId = [numberN];
  var supportArray = [numberN];

  for (number = 0; number < numberN; number += 1) {
    arrayId[number] = number;
    supportArray[number] = 1;
  }

  while (window.prompt("Please enter some numbers", "") === 2) {
    for (number = objectP; number !== arrayId[number]; number = arrayId[number]) {
      for (innerNumber = objectQ; innerNumber !== arrayId[innerNumber]; innerNumber = arrayId[innerNumber]) {
        if (number === innerNumber) {
          if (supportArray[number] < supportArray[innerNumber]) {
            arrayId[number] = innerNumber;
            supportArray[innerNumber] += supportArray[number];
          }
          else {
            arrayId[innerNumber] = number;
            supportArray[number] += supportArray[innerNumber];
          }

          console.log(objectP + " " + objectQ);
        }
      }
    }
  }
}

quickUnion();
