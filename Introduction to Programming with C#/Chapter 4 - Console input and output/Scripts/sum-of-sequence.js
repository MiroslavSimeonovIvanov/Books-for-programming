var limit = Number(window.prompt("Please enter a number", ""));
var sum = 0;

for (let number = 1; number <= limit; number++) {
  sum += (1 / number);
}

console.log(sum);
