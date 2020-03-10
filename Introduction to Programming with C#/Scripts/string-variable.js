var firstPartOfGreeting = "Hello";
var secondPartOfGreeting = "World";
var interval = " ";
var fullGreeting = {
  firstPartOfGreeting: firstPartOfGreeting,
  interval: interval,
  secondPartOfGreeting: secondPartOfGreeting
};
var fullGreetingAsString = fullGreeting.firstPartOfGreeting +
  fullGreeting.interval + fullGreeting.secondPartOfGreeting;

console.log(fullGreetingAsString);
