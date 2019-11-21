var header = document.querySelector("h1");
header.style.color = "blue";

var body = document.querySelector("body");
var isPink = false;

setInterval(function() {
  if (isPink) {
    body.style.color = "white";
  } else {
    body.style.color = "pink";
  }
  isPink = !isPink;
}, 1000);
