var userName = prompt("What is your name ?");

if (userName) {
  console.log("Hello, " + userName + ".");
} else {
  console.log("Hello!");
}

var userQuestion = prompt("Please ask a question!");
console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

if (randomNumber === 0) {
  return "Better not tell you now.";
} else if (randomNumber === 1) {
  console.log((eightBall = "Concentrate and ask again."));
} else if (randomNumber === 2) {
  console.log((eightBall = "Reply hazy try again"));
} else if (randomNumber === 3) {
  console.log((eightBall = "Cannot predict now"));
} else if (randomNumber === 4) {
  console.log((eightBall = "My reply is no."));
} else if (randomNumber === 5) {
  console.log((eightBall = "My sources say no"));
} else if (randomNumber === 6) {
  console.log((eightBall = "Outlook not so good"));
} else if (randomNumber === 7) {
  console.log((eightBall = "Signs point to yes"));
}

console.log("The eight ball answer: " + eightBall);
