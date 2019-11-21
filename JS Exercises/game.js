function getUserChoice() {
  var userInput = prompt("Please choose");

  while (userInput !== "bear" && userInput !== "human" && userInput !== "gun") {
    userInput = prompt("Please a valid input").toLowerCase();
  }

  console.log(userInput);
  return userInput;
}

function getComputerChoice() {
  var computerChoices = ["bear", "human", "gun"];
  var computerChoice =
    computerChoices[Math.floor(Math.random() * Math.floor(3))];
  return computerChoice;
}
while (getUserChoice() === getComputerChoice()) {
  console.log("draw");
  getUserChoice();
  getComputerChoice();
}

// getUserChoice();
// getComputerChoice();
