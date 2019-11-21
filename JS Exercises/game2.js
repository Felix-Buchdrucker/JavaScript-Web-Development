// bear mauls human.

// human disarms gun.

// gun shoots bear.

// If there's a tie, then the game ends in a draw.

function getUserChoice(userInput, promptUserChoice) {
  var userInput = userInput.toLowerCase();
  {
    if (userInput === "bear" || userInput === "human" || userInput === "gun") {
      return userInput;
    } else {
      console.log("Please enter a valid Input!");
    }
  }
}
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "bear";
  } else if (randomNumber === 1) {
    return "human";
  } else {
    return "gun";
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  }
  if (userChoice == "human") {
    if (computerChoice == "bear") {
      return "You have been mauled by a bear";
    } else {
      return "You have disarmed a gun";
    }
  }
  if (userChoice == "bear") {
    if (computerChoice == "gun") {
      return "Your were shot by the gun";
    } else {
      return "You have mauled a human";
    }
  }
  if (userChoice == "gun") {
    if (computerChoice == "human") {
      return "Your gun has been disarmed";
    } else {
      return "You have shot a bear";
    }
  }
}
function playGame() {
  var promptUserChoice = prompt("Please choose bear, human or gun!");
  var userChoice = getUserChoice(promptUserChoice);
  var computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
