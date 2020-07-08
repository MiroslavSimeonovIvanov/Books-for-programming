var year = Number(window.prompt("User please enter a year", ""));

function isYearLeap(year) {
  if ((year % 4 === 0) || ((year % 100 === 0) && (year % 400 === 0))) {
    return true;
  } else {
    return false;
  }
}

function printResult() {
  if (isYearLeap(year) === true) {
    console.log("The year is a leap year (it has 366 days).");
  } else {
    console.log("The year is not a leap year (it has 365 days).");
  }
}

printResult();
