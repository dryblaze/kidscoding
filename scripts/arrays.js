var friends = [
  "Nate",
  "Zach",
  "Gyuri",
  "Alyssa",
  "Robi"
];

// console.log(friends.length);
friends.push("Melinda");
// console.log(friends);
friends.unshift("Detti");
// console.log(friends);
friends.sort();
// console.log(friends);

// var numbers = [9,8,2,2,2,1,6];
// numbers.sort();
// console.log(numbers);

var lastFriend = friends.pop();
// console.log(lastFriend);
// console.log(friends);

var firstFriend = friends.shift();
// console.log(firstFriend);
// console.log(friends);

var otherFriends = [
  "Joshua",
  "Noah",
  "Olivia"
];

var allFriends = friends.concat(otherFriends);
// console.log(allFriends);

// console.log(allFriends.join(" - "));
// console.log([1,2,3].join(" - "));

// console.log(allFriends.indexOf("Nate"));
// console.log(allFriends.indexOf("Maci"));

var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

console.log(allFriends.length);

console.log(allFriends[randomNumber]);
console.log(allFriends[Math.floor(Math.random() * 8)]);
