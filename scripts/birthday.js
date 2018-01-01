var convertAge = function(age, unit) {
  var monthsInYear = 12;
  var daysInMonth = 30;
  var hoursInDay = 24;

  switch(unit) {
    case "months":
      return age * monthsInYear;
    case "days":
      return age * monthsInYear * daysInMonth;
    case "hours":
      return age * monthsInYear * daysInMonth * hoursInDay;
    default:
      return "You, zsiroskenyer!";
  }
};

console.log(
  // convertAge(25) // 25*12 = 300 in months
  // convertAge(25, "months") // 300
  convertAge(25, "days") // 9000
  // convertAge(25, "hours") // 216,000
);
