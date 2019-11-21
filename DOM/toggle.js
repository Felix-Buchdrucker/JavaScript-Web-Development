// Color Changer Exercise
var body = document.querySelector("body");
var bodyPink = false;

var btn = document.querySelector("button");
btn.addEventListener("click", function() {
  if (bodyPink) {
    body.style.background = "purple";
  } else {
    body.style.background = "white";
  }
  bodyPink = !bodyPink;
  //   body.style.background = "purple";
});
