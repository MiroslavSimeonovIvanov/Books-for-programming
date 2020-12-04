const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("mails.txt");
  var regularExpression = /([a-zA-Z_]+)@([a-z]+).([a-z]{2,4})/g;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.match(regularExpression)) {
      fs.writeFile("validMails.txt", line, (err) => {
        if (err) {
          throw err;
        }

        console.log(`${line}`);
      });
    }
  }
}

processLineByLine();
