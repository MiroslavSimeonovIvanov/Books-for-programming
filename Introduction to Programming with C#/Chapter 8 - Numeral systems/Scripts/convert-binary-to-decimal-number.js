var binaryNumber = window.prompt("Hey user! Would you mind typing " +
  "that binary number", "");
var slicedBinaryNumber = binaryNumber.toString().split("");
var binaryNumberAsDigits = slicedBinaryNumber.map(Number);
var exponent = binaryNumberAsDigits.length - 1;
var decimalNumber = 0;

for (let index = 0; index < binaryNumberAsDigits.length; index++) {
  decimalNumber += binaryNumberAsDigits[index] * Math.pow(2, exponent);
  exponent--;
}

console.log(`${binaryNumber} (Bin)`);
console.log(`${decimalNumber} (Dec)`);
