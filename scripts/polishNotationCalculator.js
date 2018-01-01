var polishCalculator = function(toCalculate) {
  var splittedInput = toCalculate.split(' ');

  var convertedNumbers = [];
  for (i=0; i<splittedInput.length; i++) {

    if (splittedInput[i] == '+') {
      var number2 = convertedNumbers.pop();
      var number1 = convertedNumbers.pop();
      convertedNumbers.push((number1 + number2));
      continue;
    }

    if (splittedInput[i] == '-') {
      var number2 = convertedNumbers.pop();
      var number1 = convertedNumbers.pop();
      convertedNumbers.push((number1 - number2));
      continue;
    }
    convertedNumbers.push(parseInt(splittedInput[i]));
  }

  // console.log(convertedNumbers);

  return convertedNumbers[0];
};

console.log(polishCalculator("1 2 +"));
console.log(polishCalculator("1 2 +") == 3);
console.log(polishCalculator("12 1 7 + -"));
console.log(polishCalculator("12 1 7 + -") == 4);
