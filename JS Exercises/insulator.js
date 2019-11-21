var randomBodyParts = ["head", "tongue", "eye", "arm"];
var randomAdjectives = ["soft", "dumb", "blind", "broken"];
var randomWords = ["food", "kitchen", "sport", "passion", "hello"];

randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
randomWord = randomWords[Math.floor(Math.random()) * 5];

console.log(
  "Your " +
    randomBodyPart +
    " is like a " +
    randomAdjective +
    randomWord +
    "" +
    "!!!"
);
