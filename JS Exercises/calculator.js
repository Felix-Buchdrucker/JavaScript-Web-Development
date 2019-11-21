function inputCaloriesByDay(day) {
  if (day == "Monday") {
    return 2800;
  } else if (day === "Tuesday") {
    return 2900;
  } else if (day === "Wednesday") {
    return 2900;
  } else if (day === "Thursday") {
    return 2900;
  } else if (day === "Friday") {
    return 2800;
  } else if (day === "Saturday") {
    return 2900;
  } else if (day === "Sunday") {
    return 3500;
  } else {
    return "Please enter a day!";
  }
}

function getTotalCalories() {
  //   var total = 2900 + 2800 + 2900 + 2900 + 2900 + 2900 + 2800 + 2900 + 3500;
  return (
    inputCaloriesByDay("Monday") +
    inputCaloriesByDay("Tuesday") +
    inputCaloriesByDay("Wednesday") +
    inputCaloriesByDay("Thursday") +
    inputCaloriesByDay("Friday") +
    inputCaloriesByDay("Saturday") +
    inputCaloriesByDay("Sunday")
  );
}
// function getTotalCalories() {
//   return (
//     inputCaloriesByDay("Monday") +
//     inputCaloriesByDay("Tuesday") +
//     inputCaloriesByDay("Wednesday") +
//     inputCaloriesByDay("Thursday") +
//     inputCaloriesByDay("Friday") +
//     inputCaloriesByDay("Saturday") +
//     inputCaloriesByDay("Sunday")
//   );

function getIdealCalories() {
  var idealDailyCalories = 2000;
  {
    return idealDailyCalories * 7;
  }
}
// console.log("Your total calories!" + getTotalCalories());
// console.log("Your ideal daily calories!" + getIdealCalories());

function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    console.log("You ate just the right amount of food!");
  } else if (actualCalories > idealCalories) {
    console.log("Time to head to the gym!");
  } else {
    console.log("Time for seconds!");
  }
}

console.log(calculateHealthPlan());
// if (actualCalories === idealCalories) {
//     return "You ate just the right amount of food!";
//   } else if (actualCalories > idealCalories);
//   {
//     return "Time to head to the gym";
//   }
// }
