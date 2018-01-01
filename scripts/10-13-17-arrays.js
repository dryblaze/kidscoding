// array
// different types in arrays
// nested arrays
// adding elements with `push`
// remove last element with pop - returns the removed item
// `unshift` to add to the front
// `shift` to remove from the front
// add arrays with `concat`
// finding the index of an element with `indexOf`
// turning an array into a String with join
// Math.floor(Math.random() * 4);
// [3,5,2,4].sort();
//

var friends = [
  "John",
  "Paul",
  "George",
  "Ringo"
];

console.log(friends.length);
console.log(friends[0]);
// console.log(friends[25]);

var ages = [
  "John",
  26,
  "Paul",
  true,
  "Ringo"
];

console.log(ages.length);

ages.push("George");
console.log(ages);

var lastItem = ages.pop();
console.log(lastItem);
console.log(ages);

var first = ages.shift("hello");
console.log(first);
console.log(ages);
console.log(friends.join(", "));

var randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
