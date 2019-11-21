var global = 3;

function local() {
  var localVar = 9;

  // console.log("Local: " + localVar);
  var result = localVar + global;

  return result;
}

console.log(local());
