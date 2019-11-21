var sentence = `My name is Felix 
and I like cooking`;

var drink = "coffee";
var food = "doughnut";
var time = "morning";

var shorty = `John said, for breakfast in the ${time} I´am having ${drink} and ${food}.`;

let names = ["Tim", "Sarah", "Alex"];
let age = [17, 25, 30];

// let people = names.concat(age);
let people2 = ["Tim", "Sarah", "Alex", ...age];

var car = ["Audi", "A4", " Facelift"];
function task(brand, model, version) {
  return `${brand} produces the ${model} of ${version} version`;
}
