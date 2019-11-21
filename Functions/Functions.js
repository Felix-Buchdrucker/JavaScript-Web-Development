function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(5);

function factorial(fact) {
  if (fact === 0) {
    console.log(1);
  } else {
    for (i = fact - 1; i > 0; i--) {
      fact = fact * i;
    }

    console.log(fact);
  }
}
//   var result = 1;
//   for (var i = fact - 1; i <= fact; i--) {
//     result = result * i;
//   }
//   return result;
factorial(5);

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
