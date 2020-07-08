function getCurrentDay() {
  var today = new Date();
  var day = today.getDay();
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];
  return daysOfWeek[day];
}

function printResult() {
  console.log(getCurrentDay());
}

printResult();
