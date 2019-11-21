var numSquares = 6; //checks the mode
var colors = generatedRandomColors(numSquares);
var squares = document.getElementsByClassName("square ");
console.log(squares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");

easy.addEventListener("click", function() {
  easy.classList.add("select");
  hard.classList.remove("select");
  numSquares = 3; //amount of squares
  colors = generatedRandomColors(numSquares); //generate new colors
  pickedColor = pickColor(); //picks a new picked Color
  colorDisplay.textContent = pickedColor; //show new picked Color
  console.log(colors);
  //loop through to hide wrong clicks
  for (var i = 0; i < squares.length; i++) {
    //if there is a next color//
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      console.log(colors[i]); //change color of first 3
    } else {
      squares[i].style.display = "none"; //hide squares
    }
  }
});
hard.addEventListener("click", function() {
  hard.classList.add("select");
  easy.classList.remove("select");
  numSquares = 6;
  colors = generatedRandomColors(numSquares);
  pickedColor = pickColor(); //picks a new color
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

reset.addEventListener("click", function() {
  //generate all new colors
  colors = generatedRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  this.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //   add click listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    // compare clicked color to picked color
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play Again?";
      changeColor(pickedColor); //changes all squares to the picked color
      h1.style.backgroundColor = pickedColor; //change background color of h1
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  });
}
function changeColor(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}
//picks Colors randomly
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//function to save picked Colors of the array
function generatedRandomColors(num) {
  //make array
  var arr = [];

  for (var i = 0; i < num; i++) {
    //add num random colors to array
    arr.push(randomColors());
  }
  //return that array
  return arr;
}

function randomColors() {
  //pick a "red" 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" 0-255
  var b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  // ("rgb(r, g, b)");
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
