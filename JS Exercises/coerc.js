var age = Number(prompt("What is your age?"));

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue!");
} else if (age < 21) {
  console.log("You can enter, but cannot drink!");
} else {
  console.log("You can come in and drink.");
}

if (age === 21) {
  console.log("happy 21st birthday");
}
if (age < 0) {
  console.log("ERROR");
}
if (age % 2 !== 0) {
  console.log("your age is odd!");
}
if (age % Math.sqrt(age) === 0) {
  console.log("perfect square!");
}
