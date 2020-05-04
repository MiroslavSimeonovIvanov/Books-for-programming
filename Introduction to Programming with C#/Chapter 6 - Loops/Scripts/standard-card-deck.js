var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
  "A"];
var suits = ["♣", "♦", "♥", "♠"];
var standardCardDeck = "";

cards.forEach((card) => {
  for (let index = 0; index < suits.length; index++) {
    standardCardDeck = standardCardDeck + card + suits[index] + " ";
  }
});

console.log(standardCardDeck);
