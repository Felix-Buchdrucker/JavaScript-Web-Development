var nums = [45, 65, 77, 34];
nums.forEach(function(num) {
  console.log(num);
});
//
function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
// var colors = ["red", "blue", "green", "yellow"];
// myForEach(colors, alert);

// (function() {
//   console.log("IAM A FUNCTION");
// })();
// myForEach(colors, function(colors) {
//   console.log(colors);
// });
//
// myForEach(colors, function(color) {
//   console.log(color);
// });
Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};
var friends = ["Charlie", "Dave", "Maddy"];
friends.myForEach(function(name) {
  console.log("I love " + name);
});
