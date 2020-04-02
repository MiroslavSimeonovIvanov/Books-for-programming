var number = Number(window.prompt("Please enter a number", ""));
var sum = 0;

for (let counter = 0; counter <= number; counter++) {
  let numbers = Number(window.prompt("Please enter some numbers", ""));
  sum += numbers;
}

console.log(sum);
