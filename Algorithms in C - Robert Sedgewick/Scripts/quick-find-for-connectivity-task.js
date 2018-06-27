const numberN = 10000;

function quickFind() {
  var number;
  var objectP;
  var objectQ;
  var variableT;
  var arrayId = [numberN];

  for (number = 0; number < numberN; number += 1) {
    arrayId[number] = number;
  }

  while (window.prompt("Please enter some numbers", "") === 2) {
    if (arrayId[objectP] === arrayId[objectQ]) {
      for (variableT = arrayId[objectP], number = 0; number < numberN; number += 1) {
        if (arrayId[number] === variableT) {
          arrayId[number] = arrayId[objectQ];
        }

        console.log(objectP + " " + objectQ);
      }
    }
  }
}

quickFind();
