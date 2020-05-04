var bound = Number(window.prompt("User please type a number", ""));

for (var numbers = 1; numbers <= bound; numbers++) {
  if (!(numbers % 3 === 0 && numbers % 7 === 0)) {
    console.log(numbers);
  }
}
