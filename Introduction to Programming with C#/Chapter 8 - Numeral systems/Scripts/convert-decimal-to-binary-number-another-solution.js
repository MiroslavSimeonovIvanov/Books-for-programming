var decimalNumber = Number(window.prompt("User please enter decimal number",
  ""));
var bits = "";

console.log(`${decimalNumber} (Dec)`);

while (decimalNumber > 0) {
  if (decimalNumber % 2 === 0) {
    bits += 0;
  }

  if (decimalNumber % 2 !== 0) {
    bits += 1;
  }

  decimalNumber = Math.trunc(decimalNumber / 2);
}

var binaryNumber = bits.split("").reverse().join("");
console.log(`${binaryNumber} (Bin)`);
