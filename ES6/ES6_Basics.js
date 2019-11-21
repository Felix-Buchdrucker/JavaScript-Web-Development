// let is an alternative to var
// create identical set of code and show "var" does not take advantage of block scope but "let" does
// var y = "Felix B";

// function vari() {
//   if (true) {
//     var x = 17;
//   }
// }
// console.log(y + x);

// function letTest() {
//   if (true) {
//     let testx = 120;
//   }
// }
// console.log(y + testx);

function variable() {
  var x = 25;
  if (true) {
    var x = 66;
    console.log(x);
  }
}

function letIt() {
  var x = 25;
  if (true) {
    let x = 55;
  }
}

console.log(x);
