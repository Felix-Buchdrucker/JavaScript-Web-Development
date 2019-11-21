// var friend = ["Charlie", "Liz", "David", "Mattias"];
// // console.log(friends[0)
// //     friends[0] + "<3" + friends[1]
// friends[0] = "Chuck";
// friends[1] = "Lizzie";

// var friend = ["Charlie", "Liz", "David", "Mattias"];
// friends[4] = "Amelie";
window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var todos = ["Buy new Turtle"];
  var input = prompt("What would you like to do?");

  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
  }
  while (input !== "quit") {
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      var newTodo = prompt("Enter new Todo");
      todos.push(newTodo);
    }
    var input = prompt("What would you like to do?");
  }
  console.log("OK, YOU ARE DONE");
}, 500);
