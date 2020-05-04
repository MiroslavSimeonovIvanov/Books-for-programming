var bound = Number(window.prompt("Hello user! Please enter a number", ""));

for (let numbers = 1; numbers <= bound; numbers++) {
  let randomGenerator = Math.floor(Math.random() * (bound - 1 + 1)) + 1;
  console.log(randomGenerator);
}
