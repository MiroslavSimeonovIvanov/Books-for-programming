var hexadecimalNumber = window.prompt("Hello user! Please enter a " +
  "hexadecimal number", "");
var decimalNumber = parseInt(hexadecimalNumber, 16);
var binaryNumber = decimalNumber.toString(2);

console.log(`${hexadecimalNumber} (Hex)`);
console.log(`${binaryNumber} (Bin)`);
console.log(`${decimalNumber} (Dec)`);
