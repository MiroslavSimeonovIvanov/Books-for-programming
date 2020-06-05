var binaryNumber = window.prompt("Hello user! Please enter a binary " +
  "number", "");
var decimalNumber = parseInt(binaryNumber, 2);
var hexadecimalNumber = decimalNumber.toString(16);

console.log(`${binaryNumber} (Bin)`);
console.log(`${hexadecimalNumber} (Hex)`);
console.log(`${decimalNumber} (Dec)`);
