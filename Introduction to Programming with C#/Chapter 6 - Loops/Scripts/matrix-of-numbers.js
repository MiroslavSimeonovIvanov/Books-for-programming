var limit = Number(window.prompt("Please enter an integer number", ""));
var matrixOfNumbers = [];
var result;

for (let rows = 1; rows <= limit; rows++) {
  matrixOfNumbers.push("\n");
  for (let columns = rows; columns <= rows + limit - 1; columns++) {
    matrixOfNumbers.push(columns);
  }
}

result = matrixOfNumbers.join(" ");
console.log(result);
