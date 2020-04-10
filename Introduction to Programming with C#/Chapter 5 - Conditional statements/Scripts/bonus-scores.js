var bonusScore = Number(window.prompt("Please enter a digit from [1..9]", ""));

switch (bonusScore) {
  case 1:
  case 2:
  case 3:
    bonusScore *= 10;
    console.log(`Bonus score is ${bonusScore}!`);
    break;
  case 4:
  case 5:
  case 6:
    bonusScore *= 100;
    console.log(`Bonus score is ${bonusScore}!`);
    break;
  case 7:
  case 8:
  case 9:
    bonusScore *= 1000;
    console.log(`Bonus score is ${bonusScore}!`);
    break;
  default:
    if (bonusScore === 0 || bonusScore > 9) {
      console.log("ERROR!");
    }
}
