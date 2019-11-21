// 5 < 7 && 4>3;

// 7 == "7" || 6>8;

// 7 !== "seven" && 5 == 17;

// true || 17;

// // 90>88 || 5 ==! 15

// var drivingPermission = 18;

// if ("age" > drivingPermission && "size" == "160cm") {
//   return "You can drive a car alone!";
// } else if ("age" < drivingPermission || "age" >= 17) {
//   return "Sorry, you can only drive with accompany";
// } else if ("age >= 16") {
//   return "Hey, you can drive your first vehicle!";
// } else {
//   return "Keep growing, little one";
// }

// var temp = 35;
// var rainy = true;

// if (temp > 45) {
//   console.log("I am going swimming");
// } else if (temp > 40) {
//   console.log("Time for a tan");
// } else if (temp > 30 && rainy) {
//   console.log("I am going to grab my umbrella");
// } else {
//   console.log("I am staying at home");
// }

// var score = 0;

// while (score < 5) {
//   console.log(score);
//   score++;
// }

// for (var i = 0; i < 10; i++) {
//   console.log("My favourite number is" + i + "!");
// }

// // New for-Loop

// var zooNames = ["lion", "tiger", "bear"];

// zooNames.length;

// for (i = 0; i < zooNames.length; i++) {
//   console.log("My favourite zoo animal is the " + zooNames[i] + "!");
// }

// var callMom = 0;

// while (callMom < 4) {
//   console.log("Called Mom for the " + callMom + " time!");
//   callMom++;
// }

var cars = [1, 2, 3, 4, 5];

for (i = 0; i < cars.length; i++) {
  if (i == [0]) {
    console.log("Audi");
  } else if (i == [1]) {
    console.log("BMW");
  } else if (i == [2]) {
    console.log("Mercedes");
  } else {
    console.log("VW");
  }
}
