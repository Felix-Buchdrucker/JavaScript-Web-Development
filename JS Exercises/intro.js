// var age = prompt("How old are you?");
// alert(age + " years is roughly " + age * 365.25 + " days");

// console.log("Calculated");
// function sayHi() {
//   console.log("Hello!");
//   console.log("Goodbye");
// }
// sayHi();
// console.log("SPAAACE");

// function singSong() {
//   console.log("Twinkle. twinkle, little star");
//   console.log("Twinkle. twinkle, little star");
//   console.log("Twinkle. twinkle, little star");
//   console.log("Twinkle. twinkle, little star");
// }
// singSong();

// function sayHello(name) {
//   console.log("Hello there " + name + "!");
// }
// sayHello("Felix");

// console.log("STOP");

// function greet(person1, person2, person3) {
//   console.log("hi " + person1);
//   console.log("hi " + person2);
//   console.log("hi " + person3);
// }
// greet("Harry", "Ron", "Hermione");

// function square(x) {
//   console.log(x * x);
// }
// square(4);

// "4 squared is: " + square(4);

// function square(x) {
//   return x * x;
// }
// // square(4);

// "4 squared is: " + square(4);

// function capitalize(str) {
//   if (typeof str === "number") {
//     return "This is not a string!";
//   }
// }
function factorial(count) {
  var result = 1;

  for (var i = 1; i <= count; i++) {
    result = result * i;
  }
  return result;
}
function doMath() {
  var x = 40;
  console.log(x);
}
var x = "Hello!";
