var firstArray = ["A", "c", "C", "c", "P", "r"];
var secondArray = ["M", "S", "I", "r", "e", "a"];
var lexicographicComparison = 0;

for (let index = 0; index < firstArray.length; index++) {
  lexicographicComparison += firstArray[index]
    .localeCompare(secondArray[index]);
}

if (lexicographicComparison === 0) {
  console.log("The arrays are equivalent.");
}

if (lexicographicComparison < 0) {
  console.log("The first array is lexicographic before the second one.");
}

if (lexicographicComparison > 0) {
  console.log("The first array is lexicographic after the second one.");
}
