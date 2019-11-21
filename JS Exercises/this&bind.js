// let cat = {};

// cat = {
//   sound: "meow",
//   speak: function() {
//     console.log(this.sound);
//   }
// };
// cat.speak();

// speakFunction = cat.speak;

// let speakFunctionBind = speakFunction.bind(cat);

// speakFunctionBind

let person1 = {
  name: "Alex"
};

let person2 = {
  name: "Alexis"
};

function namer() {
  return this.name;
}

var newNamer = namer.bind(person2.name);
newNamer();

namer.bind(person1);
namer.bind(person2);

let number = {
  x: 24,
  y: 22
};

let count = function() {
  console.log(this.x + this.y);
};
