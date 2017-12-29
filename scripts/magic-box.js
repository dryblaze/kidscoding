var magicBox = function(todo, sentence) {
  switch(todo) {
    case "upper":
      return sentence.toUpperCase();
    case "lower":
      return sentence.toLowerCase();
    case "substring":
      var message = "String not long enough";
      if (sentence.length > 15) {
        message = sentence.substring(5,15);
      }
      return message;
    default:
      return sentence.length;
  }
}

console.log(magicBox("count", "Hello, Andy!")) // 12
console.log(magicBox("upper", "This is A sentence")) // THIS IS A SENTENCE
console.log(magicBox("lower", "This Is A SENTENCE")) // this is a sentence
console.log(magicBox("substring", "This is going to be a longer sentence")) // " is going t "
console.log(magicBox("substring", "This is")) // "String not long enough"
