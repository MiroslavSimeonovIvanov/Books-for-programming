var binaryNumber = window.prompt("Hello user! Please enter binary number", "");
var slicedBinaryNumber = binaryNumber.toString().split("");
var binaryNumberAsDigits = slicedBinaryNumber.map(Number);
var exponent = binaryNumberAsDigits.length - 1;
var decimalNumber = 0;
var reversedHexadecimalNumber = "";

for (let index = 0; index < binaryNumberAsDigits.length; index++) {
  decimalNumber += binaryNumberAsDigits[index] * Math.pow(2, exponent);
  exponent--;
}

while (decimalNumber > 0) {
  switch (decimalNumber % 16) {
    case 0:
      reversedHexadecimalNumber += 0;
      break;
    case 1:
      reversedHexadecimalNumber += 1;
      break;
    case 2:
      reversedHexadecimalNumber += 2;
      break;
    case 3:
      reversedHexadecimalNumber += 3;
      break;
    case 4:
      reversedHexadecimalNumber += 4;
      break;
    case 5:
      reversedHexadecimalNumber += 5;
      break;
    case 6:
      reversedHexadecimalNumber += 6;
      break;
    case 7:
      reversedHexadecimalNumber += 7;
      break;
    case 8:
      reversedHexadecimalNumber += 8;
      break;
    case 9:
      reversedHexadecimalNumber += 9;
      break;
    case 10:
      reversedHexadecimalNumber += "A";
      break;
    case 11:
      reversedHexadecimalNumber += "B";
      break;
    case 12:
      reversedHexadecimalNumber += "C";
      break;
    case 13:
      reversedHexadecimalNumber += "D";
      break;
    case 14:
      reversedHexadecimalNumber += "E";
      break;
    case 15:
      reversedHexadecimalNumber += "F";
      break;
    default:
      console.log("Please enter a valid number!");
  }

  decimalNumber = Math.trunc(decimalNumber / 16);
}

var hexadecimalNumber = reversedHexadecimalNumber.split("").reverse().join("");
console.log(`${binaryNumber} (Bin)`);
console.log(`${hexadecimalNumber} (Hex)`);
