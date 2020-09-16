const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("input data.txt");
  var lineNumber = 1;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (lineNumber % 2 !== 0) {
      console.log(`${line}`);
    }

    lineNumber++;
  }
}

processLineByLine();
