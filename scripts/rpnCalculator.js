var calculateRPN = function(input) {
  var splitInput = input.split(" ");

  var cheatSheet = [];

  for (var i=0; i<splitInput.length; i++) {
    if (splitInput[i] == "+") {
      var number2 = cheatSheet.pop();
      var number1 = cheatSheet.pop();

      cheatSheet.push(number1+number2);
    } else if (splitInput[i] == "-") {
      var number2 = cheatSheet.pop();
      var number1 = cheatSheet.pop();

      cheatSheet.push(number1-number2);
    } else {
      cheatSheet.push(parseInt(splitInput[i]));
    }
  }
  // console.log(cheatSheet);

  console.log(cheatSheet)
  return cheatSheet[0];
};

// console.log(calculateRPN("1 2 +")); // This should give 3
// console.log(calculateRPN("2 2 +")); // This should give 4
// console.log(calculateRPN("1 2 +") == 3);
// console.log(calculateRPN("10 2 +"));
console.log(calculateRPN("10 2 3 + 3 - 23 13 - + 12 - +"));
