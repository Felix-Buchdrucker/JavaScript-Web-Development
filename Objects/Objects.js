var car = { wheels: 4, color: "red", mpg: 34, engine: 1, gallons: 12 };

// var car = {
//   carWheels: 4,
//   carColor: "red",
//   carMpg: 4,
//   carEngine: 1,
//   carGallons: 12
// };

var car = {};
car["wheels"] = 4;

("");

// var car = {};
// var car = {};
// (car.Wheels = 4),
//   (car.Color = "red"),
//   (car.Mpg = 4),
//   (car.Engine = 1),
//   (car.Gallons = 12);

// var person = {
//   eyeColor: "blue",
//   age: 25,
//   hungry: true
// };
// newww

// var snowman ={
//     isSnow: true,
//     color: white,
//     madeOfSnowballs: 3,
//     "firstName": "Frosty"

// }
// function car (make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
function Animal(name, foodType, kingOfJungle) {
  this.name = name;
  this.foodType = foodType;
  this.kingOfJungle = kingOfJungle;
}
var Animal1 = new Animal("Snoopy", "carnivore", false);
var Animal2 = new Animal("Garfield", "Lasagne", true);

// new
// var home = {
//   rooms: 4,
//   aparment: false,
//   color: "brown",
//   swimmingPool: true,
//   state: "WA",
//   city: "Seattle"
// };
// var home2 = {
//   rooms: 2,
//   aparment: true,
//   color: "white",
//   swimmingPool: false,
//   state: "CA",
//   city: "Sacramento"
// };
function home(rooms, aparment, color, swimmingPool, state, city) {
  this.rooms = rooms;
  this.aparment = aparment;
  this.color = color;
  this.swimmingPool = swimmingPool;
  this.state = state;
  this.city = city;
}
var home1 = new home(3, false, "blue", true, "Atlanta", "GA");
var home2 = new home(2, true, "white", true, "Georgia", "TA");
var home3 = new home(1, false, "red", false, "WA DC", "CA");
var home4 = new home(4, true, "gray", false, "California", "WA");
function Book(pages, title, genre) {
  this.pages = pages;
  this.title = title;
  this.genre = genre;
}
var book1 = new Book(100, "The old Man and the Sea", "Children stories");
var book2 = new Book(200, "Nutrition", "Health");
var book3 = new Book(250, "Tale of Two Cities", "Crime");
