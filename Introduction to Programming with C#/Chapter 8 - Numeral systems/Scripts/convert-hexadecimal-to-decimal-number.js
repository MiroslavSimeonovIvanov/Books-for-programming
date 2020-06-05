var hexadecimalNumber = window.prompt("Dear user please enter hexadecimal " +
  "number", "");
var slicedHexadecimalNumber = hexadecimalNumber.toString().split("");
var exponent = slicedHexadecimalNumber.length - 1;
var decimalNumber = 0;

for (let index = 0; index < slicedHexadecimalNumber.length; index++) {
  switch (slicedHexadecimalNumber[index]) {
    case "0":
      decimalNumber += 0 * Math.pow(16, exponent);
      break;
    case "1":
      decimalNumber += 1 * Math.pow(16, exponent);
      break;
    case "2":
      decimalNumber += 2 * Math.pow(16, exponent);
      break;
    case "3":
      decimalNumber += 3 * Math.pow(16, exponent);
      break;
    case "4":
      decimalNumber += 4 * Math.pow(16, exponent);
      break;
    case "5":
      decimalNumber += 5 * Math.pow(16, exponent);
      break;
    case "6":
      decimalNumber += 6 * Math.pow(16, exponent);
      break;
    case "7":
      decimalNumber += 7 * Math.pow(16, exponent);
      break;
    case "8":
      decimalNumber += 8 * Math.pow(16, exponent);
      break;
    case "9":
      decimalNumber += 9 * Math.pow(16, exponent);
      break;
    case "A":
      decimalNumber += 10 * Math.pow(16, exponent);
      break;
    case "B":
      decimalNumber += 11 * Math.pow(16, exponent);
      break;
    case "C":
      decimalNumber += 12 * Math.pow(16, exponent);
      break;
    case "D":
      decimalNumber += 13 * Math.pow(16, exponent);
      break;
    case "E":
      decimalNumber += 14 * Math.pow(16, exponent);
      break;
    case "F":
      decimalNumber += 15 * Math.pow(16, exponent);
      break;
    default:
      console.log("Please enter a valid number!");
  }

  exponent--;
}

console.log(`${hexadecimalNumber} (Hex)`);
console.log(`${decimalNumber} (Dec)`);
